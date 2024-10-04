import type { Metadata } from "next";
import "../globals.css";
import { prospectus } from "../fonts";

export const metadata: Metadata = {
  title: "Terms of Use - Elevate Now",
  description: "Terms of Use - Elevate Now   Read in detail about the site's terms and conditions for a safe and secure access to content.",
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
