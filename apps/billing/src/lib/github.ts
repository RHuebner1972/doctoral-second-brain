type GrantResult = { ok: true; state: "invited" | "member" } | { ok: false; error: string };

function githubConfig() {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER ?? "RHuebner1972";
  const repo = process.env.GITHUB_REPO ?? "doctoral-second-brain";
  const team = process.env.GITHUB_TEAM_SLUG;
  if (!token) throw new Error("GITHUB_TOKEN is required to grant repository access");
  return { token, owner, repo, team };
}

async function gh(path: string, init: RequestInit = {}) {
  const { token } = githubConfig();
  const response = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init.headers ?? {}),
    },
  });
  return response;
}

export async function grantGithubAccess(username: string): Promise<GrantResult> {
  const { owner, repo, team } = githubConfig();
  try {
    if (team) {
      const response = await gh(`/orgs/${owner}/teams/${team}/memberships/${username}`, {
        method: "PUT",
        body: JSON.stringify({ role: "member" }),
      });
      if (!response.ok) {
        return { ok: false, error: `GitHub team invite failed (${response.status})` };
      }
      const body = (await response.json()) as { state?: string };
      return { ok: true, state: body.state === "active" ? "member" : "invited" };
    }

    const response = await gh(`/repos/${owner}/${repo}/collaborators/${username}`, {
      method: "PUT",
      body: JSON.stringify({ permission: "pull" }),
    });
    if (response.status === 204) return { ok: true, state: "member" };
    if (response.status === 201) return { ok: true, state: "invited" };
    return { ok: false, error: `GitHub collaborator invite failed (${response.status})` };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "GitHub grant failed" };
  }
}

export async function revokeGithubAccess(username: string): Promise<GrantResult> {
  const { owner, repo, team } = githubConfig();
  try {
    if (team) {
      const response = await gh(`/orgs/${owner}/teams/${team}/memberships/${username}`, {
        method: "DELETE",
      });
      if (response.status === 204 || response.status === 404) {
        return { ok: true, state: "member" };
      }
      return { ok: false, error: `GitHub team revoke failed (${response.status})` };
    }

    const pending = await gh(`/repos/${owner}/${repo}/invitations`);
    if (pending.ok) {
      const invitations = (await pending.json()) as Array<{ id: number; invitee?: { login?: string } }>;
      const match = invitations.find((invite) => invite.invitee?.login?.toLowerCase() === username.toLowerCase());
      if (match) {
        await gh(`/repos/${owner}/${repo}/invitations/${match.id}`, { method: "DELETE" });
      }
    }

    const response = await gh(`/repos/${owner}/${repo}/collaborators/${username}`, {
      method: "DELETE",
    });
    if (response.status === 204 || response.status === 404) {
      return { ok: true, state: "member" };
    }
    return { ok: false, error: `GitHub collaborator revoke failed (${response.status})` };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "GitHub revoke failed" };
  }
}
