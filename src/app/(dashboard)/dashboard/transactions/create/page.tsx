"use client";

import { useRouter } from "next/navigation";
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
  SelectLabel,
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
import { useCreateTransaction } from "@/hooks/api/transactions/useCreateTransaction";

const CreateTransactionSchema = z.object({
  description: z.string(),
  type: z.enum(["income", "expense"]),
  amount: z.string().min(0.1),
  transaction_date: z.date(),
  category: z.string(),
});

export type CreateTransactionFormFields = z.infer<
  typeof CreateTransactionSchema
>;

const TransactionCreatePage = () => {
  const createTransactionMutation = useCreateTransaction();
  const router = useRouter();

  const form = useForm<CreateTransactionFormFields>({
    resolver: zodResolver(CreateTransactionSchema),
  });

  const { control } = form;
  const transactionType = useWatch({ control, name: "type" });

  function onSubmit(data: z.infer<typeof CreateTransactionSchema>) {
    createTransactionMutation.mutate(data, {
      onSuccess: () => {
        router.push("/dashboard/transactions");
        toast({
          variant: "success",
          title: "Success",
          description: "A new transaction is created.",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Opps, something went wrong. Please try again.",
        });
      },
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
              name="description"
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
              name="transaction_date"
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
                    value={field.value}
                  >
                    {" "}
                    {/* Correct binding */}
                    <SelectTrigger>
                      <SelectValue placeholder="Choose one of the following categories." />
                    </SelectTrigger>
                    <SelectContent>
                      {!transactionType && (
                        <SelectGroup>
                          <SelectLabel className="text-red-500 font-normal">
                            Please select a transaction type
                          </SelectLabel>
                        </SelectGroup>
                      )}
                      {transactionType === "income" && (
                        <SelectGroup>
                          <SelectItem value="salary">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-emerald-500 mr-2 rounded-full"></span>{" "}
                              Salary
                            </div>
                          </SelectItem>
                          <SelectItem value="freelance">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-indigo-500 mr-2 rounded-full"></span>{" "}
                              Freelance
                            </div>
                          </SelectItem>
                          <SelectItem value="investment_returns">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-sky-500 mr-2 rounded-full"></span>{" "}
                              Investment Returns
                            </div>{" "}
                          </SelectItem>
                        </SelectGroup>
                      )}
                      {transactionType === "expense" && (
                        <SelectGroup>
                          <SelectItem value="food_and_drinks">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-orange-500 mr-2 rounded-full"></span>{" "}
                              Food And Drinks
                            </div>
                          </SelectItem>
                          <SelectItem value="transportation">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-zinc-500 mr-2 rounded-full"></span>{" "}
                              Transportation
                            </div>
                          </SelectItem>
                          <SelectItem value="utility">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-yellow-500 mr-2 rounded-full"></span>{" "}
                              Utility
                            </div>
                          </SelectItem>
                          <SelectItem value="shopping">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-rose-500 mr-2 rounded-full"></span>{" "}
                              Shopping
                            </div>
                          </SelectItem>
                          <SelectItem value="medical">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-amber-500 mr-2 rounded-full"></span>{" "}
                              Medical
                            </div>
                          </SelectItem>
                        </SelectGroup>
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={createTransactionMutation.isPending}
            className="w-full flex items-center gap-2 uppercase py-5"
          >
            <PlusIcon />
            <span>Add Transaction</span>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TransactionCreatePage;
