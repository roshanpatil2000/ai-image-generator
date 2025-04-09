import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pictoria AI",
  description: "Transform your photos with the power of AI! Artzen AI is your ultimate solution for creating/generating professional AI-generated photos, similar to the popular PhotoAI platform. Perfect for LinkedIn headshots, Instagram content, dating profile pictures, and professional portraits. Train AI model on your personal images and generate stunning, high-quality AI-generated photos within minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`
      }
      suppressHydrationWarning
      >
        {children}
        <Toaster richColors/>
        <Analytics />
      </body>
    </html>
  );
}
