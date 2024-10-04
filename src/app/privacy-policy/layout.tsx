import type { Metadata } from "next";
import "../globals.css";
import { prospectus } from "../fonts";

export const metadata: Metadata = {
  title: "Privacy Policy - Elevate Now",
  description: "Elevate Now respects your privacy. This privacy policy covers Elevate Now's treatment of personally identifiable information that we collect when you are on the website.",
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
