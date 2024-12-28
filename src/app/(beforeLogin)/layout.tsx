import { ReactNode } from "react";

export default async function BeforeLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}
