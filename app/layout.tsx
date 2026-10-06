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

const description =
  "Clear communications, from strategy to delivery. Senior advice, hands-on support and practical systems for organisations, based in Tairāwhiti, Gisborne.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eruwest.com"),
  title: {
    default: "Eru West · Strategy & Communications · Tairāwhiti",
    template: "%s · Eru West",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Eru West · Strategy & Communications",
    description,
    url: "/",
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
