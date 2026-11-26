import type { ReactNode } from "react";
import GeexDocument from "@/components/GeexDocument";

export default function Layout({ children }: { children: ReactNode }) {
  return <GeexDocument bodyClass="geex-dashboard file-manager">{children}</GeexDocument>;
}
