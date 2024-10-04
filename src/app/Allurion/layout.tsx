import type { Metadata } from "next";
import "../globals.css";
import { prospectus } from "../fonts";

export const metadata: Metadata = {
  title: "How the Allurion Balloon Can Help You Reach Your Weight Loss Goals",
  description: "Explore the Allurion Balloon for effective weight management. This non-invasive, balloon-based solution aids in significant weight loss without surgery. Find out how it works and why it's a top choice.",
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
