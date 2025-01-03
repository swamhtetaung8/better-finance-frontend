import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="py-10 px-6 space-y-6">
      <h2 className="text-betterFinance-primary text-xl font-semibold">
        Sign Up
      </h2>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Full Name</Label>
        <Input type="text" id="name" />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I certify that I am 18 years of age or older, and agree to the{" "}
            <span className="text-sm text-betterFinance-tertiary hover:underline">
              User Agreement
            </span>{" "}
            and{" "}
            <span className="text-sm text-betterFinance-tertiary hover:underline">
              Privacy Policy
            </span>
          </Label>
        </div>
      </div>

      <Button className="w-full">Sign Up</Button>

      <div className="space-x-1 flex items-center">
        <span className="text-sm">Already have an account?</span>
        <Link
          href="sign-in"
          className="text-sm text-betterFinance-tertiary hover:underline"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
