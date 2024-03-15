import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
  src: "../public/fonts/Helvetica-Font/Helvetica-Bold.ttf",
});

export const metadata: Metadata = {
  title: "Alvie",
  description: "We connect unique minds with their ideal careers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.className}>{children}</body>
    </html>
  );
}
