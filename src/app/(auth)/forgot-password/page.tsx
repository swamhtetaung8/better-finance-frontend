import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SignUpPage = () => {
  return (
    <div className="py-10 px-6 space-y-6">
      <h2 className="text-betterFinance-primary text-xl font-semibold">
        Reset Password
      </h2>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" />
      </div>

      <Button className="w-full">Submit</Button>

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

export default SignUpPage;
