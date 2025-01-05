import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

import TopNavBar from "@/app/(dashboard)/dashboard/components/TopNavBar";
import LeftSideBar from "@/app/(dashboard)/dashboard/components/LeftSideBar";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better Finance Dashboard",
  description: "Admin dashboard for managing your financial life.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          <main className="flex bg-betterFinance-background dark:bg-betterFinance-tertiary min-h-screen">
            <LeftSideBar />
            <div className="rounded-l-[40px] p-8 bg-white dark:bg-black/80 w-5/6">
              <TopNavBar />
              <section>{children}</section>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
