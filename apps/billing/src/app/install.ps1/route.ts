import { installerHeaders, renderInstaller } from "@/lib/installers";

export const dynamic = "force-dynamic";

export async function GET() {
  const body = await renderInstaller("install.ps1");
  return new Response(body, { headers: installerHeaders("install.ps1") });
}
