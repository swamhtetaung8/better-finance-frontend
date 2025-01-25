"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const TransactionCreateSchema = z.object({
  name: z.string(),
  type: z.enum(["income", "expense"]),
  amount: z.string().min(0.1),
  date: z.date(),
  category: z.string(),
});

type TransactionCreateFormFields = z.infer<typeof TransactionCreateSchema>;

const TransactionCreatePage = () => {
  const form = useForm<TransactionCreateFormFields>({
    resolver: zodResolver(TransactionCreateSchema),
  });

  const { control } = form;
  const transactionType = useWatch({ control, name: "type" });

  function onSubmit(data: z.infer<typeof TransactionCreateSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="capitalize text-2xl xl:text-3xl font-extrabold tracking-tight text-betterFinance-primary dark:text-betterFinance-background">
          Add New Transaction
        </h1>
        <Link href="/dashboard/transactions">
          <Button variant="outline" className="uppercase">
            Cancel
          </Button>
        </Link>
      </div>

      {/* Form */}
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Corrected Select for transactionType */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      {" "}
                      {/* Use field for binding */}
                      <SelectTrigger>
                        <SelectValue placeholder="Income or Expense" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="income">Income</SelectItem>
                          <SelectItem value="expense">Expense</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input type="number" min={0} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal w-full flex items-center",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>

          {/* Conditionally render the category field when transactionType is "income" */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {" "}
                    {/* Correct binding */}
                    <SelectTrigger>
                      <SelectValue placeholder="Choose one of the following categories." />
                    </SelectTrigger>
                    <SelectContent>
                      {transactionType === "income" && (
                        <SelectGroup>
                          <SelectItem value="salary">Salary</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                          <SelectItem value="investment_returns">
                            Investment Returns
                          </SelectItem>
                        </SelectGroup>
                      )}
                      {transactionType === "expense" && (
                        <SelectGroup>
                          <SelectItem value="food_and_drinks">
                            Food and Drinks
                          </SelectItem>
                          <SelectItem value="transportation">
                            Transportation
                          </SelectItem>
                          <SelectItem value="utility">Utility</SelectItem>
                          <SelectItem value="shopping">Shopping</SelectItem>
                          <SelectItem value="medical">Medical</SelectItem>
                        </SelectGroup>
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full flex items-center gap-2 uppercase py-5">
            <PlusIcon />
            <span>Add Transaction</span>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TransactionCreatePage;
