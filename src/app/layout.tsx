import type { Metadata } from "next";
import "./globals.css";
import { prospectus } from './fonts';
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Lose Weight | Best Weight Loss Program Online by Expert Doctors - Elevate Now",
  description: "Looking to shed those extra pounds? Elevate Now's weight loss program, designed by expert doctors, can help you achieve your fitness goals. Get personalized support & guidance"
};

// Font files can be colocated inside of `app`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prospectus.className}`}>{children}</body>
      <GoogleTagManager gtmId='GTM-5PPVQL3' />
      {/* <Script src="https://forms.zoho.in/js/zf_gclid.js" strategy="beforeInteractive" /> */}
      {/* <script async src="https://forms.zoho.in/js/zf_gclid.js" type="text/partytown" /> */}
    </html>
  );
}
