import type { Metadata } from "next";
import { prospectus } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Elevate",
  description: "Weight Loss",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prospectus.className}>{children}</body>
    </html>
  );
}
