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
  title: "Cuppoi | Kerala Specialty Coffee",
  description:
    "Premium Kerala coffee crafted from the finest Arabica and Robusta beans.",
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
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}