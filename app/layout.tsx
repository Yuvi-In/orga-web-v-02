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
  colorScheme: "light",
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css"
        />
      </head>
      {/* 
        suppressHydrationWarning is intentionally set on <body> to prevent hydration mismatch warnings 
        due to differences between server and client rendering (e.g., dynamic font loading or theming).
      */}
      <body className={cn(poppins.className)} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );

}
