import { readFile } from "node:fs/promises";
import path from "node:path";
import { env } from "./env";

/**
 * Serves the one-line installer scripts with the deployment's own URLs
 * substituted in, so the same script works on every environment.
 * Templates live in apps/billing/installers/.
 */
export async function renderInstaller(name: "install.sh" | "install.ps1"): Promise<string> {
  const { APP_URL } = env();
  const file = path.join(process.cwd(), "installers", name);
  const template = await readFile(file, "utf8");
  const appUrl = APP_URL.replace(/\/$/, "");
  return template
    .replaceAll("__APP_URL__", appUrl)
    .replaceAll("__DASHBOARD_URL__", `${appUrl}/dashboard`);
}

export function installerHeaders(name: "install.sh" | "install.ps1"): HeadersInit {
  return {
    "Content-Type": name.endsWith(".ps1") ? "text/plain; charset=utf-8" : "text/x-shellscript; charset=utf-8",
    "Cache-Control": "public, max-age=300",
    "X-Content-Type-Options": "nosniff",
  };
}

/** The one-line commands shown on the dashboard. */
export function installOneLiners() {
  const appUrl = env().APP_URL.replace(/\/$/, "");
  return {
    bash: `curl -fsSL ${appUrl}/install.sh | bash`,
    powershell: `irm ${appUrl}/install.ps1 | iex`,
  };
}
