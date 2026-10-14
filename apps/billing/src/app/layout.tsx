import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import { auth, signIn, signOut } from "@/auth";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Doctoral Second Brain",
  description: "A paid skill library for doctoral learners — subscribe to install the Claude plugin.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <header className="site-header">
          <a className="brand" href="/">Doctoral Second Brain</a>
          <nav className="nav">
            <a href="/pricing">Pricing</a>
            <a href="/dashboard">Account</a>
            <a href="/terms">Terms</a>
            {session?.user ? (
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button className="button secondary" type="submit">Sign out</button>
              </form>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn("github", { redirectTo: "/dashboard" });
                }}
              >
                <button className="button secondary" type="submit">Sign in</button>
              </form>
            )}
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <span>Nantasket AI · Dr. Rich Huebner</span>
          <nav className="nav">
            <a href="/terms">Terms</a>
            <a href="/refunds">Refunds</a>
            <a href="mailto:rich.huebner@nantasket.ai">Support</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
