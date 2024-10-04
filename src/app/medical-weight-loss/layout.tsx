import type { Metadata } from "next";
import "../globals.css";
import { prospectus } from "../fonts";

export const metadata: Metadata = {
  title: "Medical Weight Loss: Personalized Plans for Healthier Living",
  description: "Achieve your weight loss goals with our medically supervised programs. Get personalized plans, expert guidance, and long-term success with our medical weight loss services.",
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
