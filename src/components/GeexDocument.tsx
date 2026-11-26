import type { ReactNode } from "react";
import Script from "next/script";

const preferences = `
  try {
    const preferences = { theme: ["dark", "light"], layout: ["ltr", "rtl"], navbar: ["top", "side"] };
    const attributes = { theme: "data-theme", layout: "dir", navbar: "data-nav" };
    for (const key of Object.keys(preferences)) {
      const value = localStorage.getItem(key);
      if (preferences[key].includes(value)) document.documentElement.setAttribute(attributes[key], value);
    }
  } catch {}
`;

export default function GeexDocument({ bodyClass, children }: { bodyClass: string; children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={bodyClass || undefined}>
        {/* The document component is rendered by each App Router root layout. */}
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        {bodyClass && <Script id="geex-preferences" strategy="beforeInteractive">{preferences}</Script>}
        {children}
      </body>
    </html>
  );
}
