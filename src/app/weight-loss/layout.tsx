import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import { prospectus } from '../fonts';
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Elevate",
    description: "Weight Loss",
};

// Font files can be colocated inside of `app`

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={prospectus.className}>{children}</body>
            <GoogleTagManager gtmId='GTM-5PPVQL3' />
        </html>
    );
}
