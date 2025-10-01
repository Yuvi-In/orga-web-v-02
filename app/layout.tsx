import "@/styles/globals.css";

import { cn } from "@/styles/utils";

import type { Metadata, Viewport } from "next";

import Footer from "@/components/footer";

import Header from "@/components/header";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orgalaser Group of Companies",
  description:
    "Pioneer of Production based Laser Cutting, CNC & Manufacturing Hologram Labels in Sri Lanka",
  creator: "Yuvindu Induwara",
  keywords: [
    "Orgalaser",
    "Orgalaser Group of Companies",
    "Laser Cutting",
    "CNC",
    "Hologram Labels",
    "Manufacturing",
    "Sri Lanka",
    "Industrial Solutions",
    "Precision Engineering",
    "Custom Fabrication",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  colorScheme: "only light",
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className)}suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
