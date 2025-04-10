import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Fametonic",
  description: "Fametonic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${urbanist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
