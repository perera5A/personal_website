import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords:
    "Anuja Perera, McMaster University, OPS, Ontario Public Service, Personal Website, Software Developer, Fullstack Developer, Computer Engineering, DeltaHacks, McMaster Engineering Society, McMaster Sumobotts",
  creator: "Anuja Perera",
  authors: [{ name: "Anuja Perera" }],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="antialiased max-w-5xl mx-4 mt-8 lg:mx-auto">
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-4 md:px-2">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
