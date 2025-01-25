"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { Bell, User2 } from "lucide-react";

import ThemeSwitch from "@/components/betterFinance/ThemeSwitch";
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
  const router = useRouter();
  const userName = Cookies.get("user_name");

  const signOut = () => {
    Cookies.remove("api_token");
    router.push("/sign-in");
  };

  return (
    <nav className="grid grid-cols-4 items-start gap-x-4 mb-5">
      <h1 className="capitalize col-span-3 text-2xl font-semibold tracking-tight text-betterFinance-primary dark:text-betterFinance-background">
        <span>Good day, {userName}</span>
        <br />
        <span className="text-lg font-normal text-neutral-500">
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </h1>
      <div className="flex items-end justify-end">
        <div className="flex gap-4 items-center">
          <ThemeSwitch />
          <button className="p-3 transition-colors text-betterFinance-tertiary duration-200 bg-betterFinance-background/50 dark:bg-betterFinance-tertiary/20 dark:hover:bg-betterFinance-tertiary/40 hover:bg-betterFinance-tertiary/50 rounded-full">
            <Bell />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="p-3 transition-colors text-betterFinance-tertiary duration-200 bg-betterFinance-background/50 dark:bg-betterFinance-tertiary/20 dark:hover:bg-betterFinance-tertiary/40 hover:bg-betterFinance-tertiary/50 rounded-full">
                <User2 />
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
