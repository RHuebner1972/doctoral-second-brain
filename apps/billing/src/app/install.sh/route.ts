import { installerHeaders, renderInstaller } from "@/lib/installers";

export const dynamic = "force-dynamic";

export async function GET() {
  const body = await renderInstaller("install.sh");
  return new Response(body, { headers: installerHeaders("install.sh") });
}
