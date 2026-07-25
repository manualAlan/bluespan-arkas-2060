import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteOrigin = basePath
  ? "https://manualAlan.github.io"
  : "https://bluespan-arkas-2060.alanmu.chatgpt.site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Bluespan Arkas 2060",
  description:
    "Alan Bluespan III and Draqi for Caprica 2060: citizens first, executive restraint, and a republic of laws.",
  openGraph: {
    title: "Bluespan Arkas 2060",
    description: "Caprican, Economist, Entrepreneur, Not a politician.",
    images: [
      {
        url: `${basePath}/og-v2.png`,
        width: 1731,
        height: 909,
        alt: "Bluespan Arkas 2060 campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluespan Arkas 2060",
    description: "Caprican, Economist, Entrepreneur, Not a politician.",
    images: [`${basePath}/og-v2.png`],
  },
  icons: {
    icon: [
      {
        url: `${basePath}/favicon-32.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `${basePath}/favicon-64.png`,
        sizes: "64x64",
        type: "image/png",
      },
    ],
    shortcut: `${basePath}/favicon-32.png`,
    apple: `${basePath}/apple-touch-icon.png`,
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
