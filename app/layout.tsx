import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niyati Sharma — Statistician & Data Analyst",
  description:
    "Portfolio of Niyati Sharma, M.Sc Statistics (Pondicherry University). Data analysis, statistical modelling, machine learning, geospatial analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col grain bg-ivory text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
