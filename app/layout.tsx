import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bluespan Arkas 2060",
  description:
    "Alan Bluespan III and Draqi for Caprica 2060: citizens first, executive restraint, and a republic of laws.",
  openGraph: {
    title: "Bluespan Arkas 2060",
    description: "Citizen. Constitutionalist. Not a Caesar.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Bluespan Arkas 2060 campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluespan Arkas 2060",
    description: "Citizen. Constitutionalist. Not a Caesar.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
