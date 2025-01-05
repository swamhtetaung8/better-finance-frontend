import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";
import AuthCardLeftPanel from "@/app/(auth)/components/AuthCardLeftPanel";
import Providers from "@/app/providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to Better Finance",
  description: "Take control of your finances with Better Finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <section className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col md:flex-row h-screen md:min-h-0 md:h-auto w-[700px] lg:w-[800px] overflow-hidden md:rounded-xl md:border md:shadow">
              {/* Image Panel */}
              <AuthCardLeftPanel />

              {/* Form Panel */}
              <div className="flex-1">{children}</div>
            </div>
          </section>
        </Providers>
      </body>
    </html>
  );
}
