import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eru West · Strategy & Communications · Tairāwhiti",
  description:
    "Communications that cut through, without the agency overhead. Senior strategy and hands-on delivery for organisations with complex, evolving communications needs.",
  openGraph: {
    title: "Eru West · Strategy & Communications",
    description:
      "Communications that cut through, without the agency overhead. Senior strategy and hands-on delivery, based in Tairāwhiti, Gisborne.",
    type: "website",
    locale: "en_NZ",
    siteName: "Eru West · Strategy & Communications",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
