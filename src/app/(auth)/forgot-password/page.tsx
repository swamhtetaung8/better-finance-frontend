"use client";

import React from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

type ForgotPasswordFormFields = z.infer<typeof ForgotPasswordSchema>;

const ForgotPasswordPage = () => {
  const form = useForm<ForgotPasswordFormFields>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordFormFields> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="py-10 px-6 space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="text-betterFinance-primary text-xl font-semibold">
          Reset Password
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
      </form>
    </Form>
  );
};

export default ForgotPasswordPage;
