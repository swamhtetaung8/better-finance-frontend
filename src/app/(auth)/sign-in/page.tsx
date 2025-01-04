"use client";

import React from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty("Required"),
  remember: z.boolean().optional(),
});

type SignInFormFields = z.infer<typeof SignInSchema>;

const SignInPage = () => {
  const form = useForm<SignInFormFields>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<SignInFormFields> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="py-10 px-6 space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="text-betterFinance-primary text-xl font-semibold">
          Sign In
        </h2>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="remember"
          render={({ field }) => (
            <div className="flex items-center justify-between">
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-neutral-500 dark:text-neutral-400">
                    Remember me
                  </FormLabel>
                </div>
              </FormItem>
              <Link
                href="forgot-password"
                className="text-betterFinance-tertiary text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          )}
        />

        <Button className="w-full">Sign In</Button>

        <div className="space-x-1 flex items-center">
          <span className="text-sm">Don&apos;t have an account?</span>
          <Link
            href="sign-up"
            className="text-sm text-betterFinance-tertiary hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignInPage;
