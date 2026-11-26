"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    initializeGeexDashboard?: () => (() => void) | undefined;
  }
}

function PageScripts({ sources }: { sources: string[] }) {
  const [loadedCount, setLoadedCount] = useState(0);
  const allLoaded = loadedCount === sources.length;
  const isDashboard = sources.includes("/assets/js/main.js");

  useEffect(() => {
    if (allLoaded && isDashboard) return window.initializeGeexDashboard?.();
  }, [allLoaded, isDashboard]);

  const source = sources[loadedCount];
  if (!source) return null;

  const advance = () => setLoadedCount(current => Math.max(current, loadedCount + 1));
  return <Script key={source} src={source} strategy="afterInteractive" onReady={advance} onError={advance} />;
}

export default function GeexScripts({ sources }: { sources: string[] }) {
  const pathname = usePathname();
  return <PageScripts key={pathname} sources={sources} />;
}
