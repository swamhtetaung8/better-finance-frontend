import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const SignUpPage = () => {
  return (
    <div className="py-10 px-6 space-y-6">
      <h2 className="text-betterFinance-primary text-xl font-semibold">
        Sign In
      </h2>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember-me" />
          <Label htmlFor="remember-me">Remember me</Label>
        </div>

        <Link
          href="forgot-password"
          className="text-sm text-betterFinance-tertiary hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      <Button className="w-full">Sign In</Button>

      <div className="space-x-1 flex items-center">
        <span className="text-sm">Don't have an account?</span>
        <Link
          href="sign-up"
          className="text-sm text-betterFinance-tertiary hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
