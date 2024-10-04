import { Metadata } from 'next';


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
      <body>{children}</body>
    </html>
  );
}
