"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { useSignUp } from "@/hooks/api/auth/useSignUp";
import { useToast } from "@/hooks/use-toast";

const SignUpSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    }),
  agree: z
    .boolean()
    .optional()
    .refine((value) => value === true, {
      message: "You must agree to the terms and conditions",
    }),
});

export type SignUpFormFields = z.infer<typeof SignUpSchema>;

const SignUpPage = () => {
  const signUpMutation = useSignUp();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<SignUpFormFields>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormFields> = (data) => {
    signUpMutation.mutate(data, {
      onSuccess: () => {
        toast({
          variant: "success",
          title: "Welcome Aboard",
          description: "Sign up successful, please login with the credentials.",
        });
        router.push("/sign-in");
      },
      onError: (error) => {
        if (error.response?.status === 422) {
          form.setError("email", {
            type: "manual",
            message: "Email is already taken",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }
      },
    });
  };

  return (
    <Form {...form}>
      <form
        className="py-10 px-6 space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="text-betterFinance-primary text-xl font-semibold">
          Sign Up
        </h2>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
          name="agree"
          render={({ field }) => (
            <div>
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-neutral-500 dark:text-neutral-400">
                    I agree to the User Agreement and Privacy Policy
                  </FormLabel>
                </div>
              </FormItem>
              <FormMessage />
            </div>
          )}
        />

        <Button className="w-full" disabled={signUpMutation.isPending}>Sign Up</Button>

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

export default SignUpPage;
