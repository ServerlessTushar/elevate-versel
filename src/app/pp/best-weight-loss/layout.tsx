import type { Metadata } from "next";
import "../../globals.css";
import { prospectus } from "../../fonts";

export const metadata: Metadata = {
  title: "Elevate",
  description: "Get fitter today",
};

// Font files can be colocated inside of `app`

export default function RootLayout({
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
