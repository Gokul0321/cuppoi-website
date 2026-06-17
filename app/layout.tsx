import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const headingFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://cuppoi-website.vercel.app"
  ),

  title: "Cuppoi | Premium Kerala Coffee",

  description:
    "Single-estate Kerala coffee crafted from carefully selected Arabica and Robusta beans. Freshly roasted and delivered across India.",

  keywords: [
    "Cuppoi",
    "Kerala Coffee",
    "Premium Coffee",
    "Arabica Coffee",
    "Robusta Coffee",
    "Filter Coffee",
    "South Indian Coffee",
    "Specialty Coffee",
  ],

  authors: [
    {
      name: "Cuppoi",
    },
  ],

  alternates: {
    canonical:
      "https://cuppoi-website.vercel.app",
  },

  openGraph: {
    title: "Cuppoi | Premium Kerala Coffee",

    description:
      "Freshly roasted Kerala coffee crafted for unforgettable moments.",

    url: "https://cuppoi-website.vercel.app",

    siteName: "Cuppoi",

    type: "website",

    images: [
      {
        url: "https://cuppoi-website.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cuppoi Premium Kerala Coffee",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cuppoi | Premium Kerala Coffee",

    description:
      "Freshly roasted Kerala coffee crafted for unforgettable moments.",

    images: [
      "https://cuppoi-website.vercel.app/images/og-image.jpg",
    ],
  },

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}