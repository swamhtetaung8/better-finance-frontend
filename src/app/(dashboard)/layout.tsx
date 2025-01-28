import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/app/globals.css";

import { ThemeProvider } from "next-themes";
import TopNavBar from "@/app/(dashboard)/dashboard/components/TopNavBar";
import LeftSideBar from "@/app/(dashboard)/dashboard/components/LeftSideBar";
import ReactQueryProvider from "@/app/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";

const manRopeSans = Manrope({
  variable: "--font-manrope-sans",
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
      <body className={`${manRopeSans.className} antialiased`}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
          >
            <main className="flex bg-slate-200 dark:bg-gray-800 min-h-screen">
              <LeftSideBar />
              <div className="rounded-l-[40px] p-7 bg-white dark:bg-gray-900 w-5/6">
                <TopNavBar />
                <section className="h-[calc(100vh-140px)]">{children}</section>
              </div>
            </main>
            <Toaster />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
