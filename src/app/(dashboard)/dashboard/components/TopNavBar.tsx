"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { Bell } from "lucide-react";

import ThemeSwitch from "@/components/betterFinance/ThemeSwitch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const TopNavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const userName = Cookies.get("user_name");

  const getRouteName = (path: string) => {
    const parts = path.split("/").filter(Boolean);
    if (parts.length === 1) return "Dashboard"; // Special case for /dashboard

    const lastPart = parts[parts.length - 1];
    // Capitalize the first letter of the last part
    return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
  };

  const signOut = () => {
    Cookies.remove("api_token");
    router.push("/sign-in");
  };

  const currentPage = getRouteName(pathname);

  return (
    <nav className="grid grid-cols-4 items-start gap-x-4 mb-8">
      <h1 className="capitalize text-2xl xl:text-3xl font-bold tracking-tight text-betterFinance-primary dark:text-betterFinance-background">
        {currentPage}
      </h1>
      <div></div>
      <div className="flex w-full max-w-sm items-start space-x-2">
        <Input type="text" placeholder="Search" />
        <Button type="submit">Search</Button>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex gap-4 items-center">
          <ThemeSwitch />
          <button className="p-2 transition-colors text-betterFinance-tertiary duration-200 bg-betterFinance-background hover:bg-betterFinance-tertiary/50 rounded-full">
            <Bell />
          </button>
        </div>
        <div className="flex gap-4 items-start">
          <h1 className="capitalize scroll-m-20 text-xl xl:text-2xl font-bold tracking-tight text-betterFinance-primary dark:text-betterFinance-background">
            {userName}
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button>
                <Avatar>
                  <AvatarImage src="images/user-placeholder-icon.png" />
                  <AvatarFallback>Photo of user</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel className="text-betterFinance-primary dark:text-betterFinance-background">
                Manage Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Link href="/dashboard/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={signOut}>
                <p>Sign Out</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
