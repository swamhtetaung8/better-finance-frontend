"use client";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Goal,
  Wallet,
  UserRound,
  Cog,
  Banknote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Sidebar links for admin dashboard
const links = [
  {
    name: "Dashboard",
    uri: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Transactions",
    uri: "/dashboard/transactions",
    icon: <Banknote />,
  },
  {
    name: "Goals",
    uri: "/dashboard/goals",
    icon: <Goal />,
  },
  {
    name: "Budgets",
    uri: "/dashboard/budgets",
    icon: <Wallet />,
  },
  {
    name: "Profile",
    uri: "/dashboard/profile",
    icon: <UserRound />,
  },
  {
    name: "Settings",
    uri: "/dashboard/settings",
    icon: <Cog />,
  },
];

const LeftSideBar = () => {
  const pathName = usePathname();
  return (
    <div className="w-1/6 p-8 space-y-8">
      {/* <h1 className="text-2xl xl:text-3xl font-bold tracking-tight text-betterFinance-primary dark:text-betterFinance-background">
        Better Finance
      </h1> */}

      {/* Logo */}
      <div className='relative h-[100px]'>
        <Image src="/images/logo.png" className="object-contain" fill alt="Logo of better finance brand" />
      </div>
      <div className="space-y-4">
        {links.map((link) => (
          <Link
            className={cn(
              "flex gap-4 p-3 rounded-3xl hover:bg-betterFinance-tertiary dark:hover:bg-betterFinance-background dark:hover:text-betterFinance-primary hover:text-white transition-colors duration-200", // Common classes
                {
                "bg-betterFinance-tertiary dark:bg-betterFinance-background dark:text-betterFinance-primary font-semibold text-white":
                  link.uri == "/dashboard" ? (pathName === link.uri) : (pathName === link.uri || pathName.startsWith(link.uri))
                }
              )}
              href={link.uri}
              key={link.name}
              >
              {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
