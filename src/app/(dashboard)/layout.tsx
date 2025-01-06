import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/app/globals.css";

import TopNavBar from "@/app/(dashboard)/dashboard/components/TopNavBar";
import LeftSideBar from "@/app/(dashboard)/dashboard/components/LeftSideBar";
import { ThemeProvider } from "next-themes";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          <main className="flex bg-slate-200 dark:bg-gray-800 min-h-screen">
            <LeftSideBar />
            <div className="rounded-l-[40px] p-8 bg-white dark:bg-gray-900 w-5/6">
              <TopNavBar />
              <section>{children}</section>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
