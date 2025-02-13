"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircle, PlusIcon, TriangleAlert } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TransactionTypeBadge from "../components/TransactionTypeBadge";
import Link from "next/link";
import { useGetTransactions } from "@/hooks/api/transactions/useGetTransactions";
import { format } from "date-fns";

const TransactionsPage = () => {
  const {
    data: transactions = [],
    isLoading,
    isError,
    isSuccess,
  } = useGetTransactions();

  return (
    <div className="h-full">
      {/* Header bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="capitalize text-2xl xl:text-3xl font-extrabold tracking-tight text-betterFinance-primary dark:text-betterFinance-background">
          Transactions
        </h1>
        <div className="flex gap-2 items-center">
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Current Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Months</SelectLabel>
                <SelectItem value="current">Current Month</SelectItem>
                <SelectItem value="december-2024">December 2024</SelectItem>
                <SelectItem value="november-2024">November 2024</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Link href={`/dashboard/transactions/create`}>
            <Button className="uppercase">
              <PlusIcon />
              <span>Add Transaction</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Transaction List */}
      <div className="border rounded-3xl p-4 space-y-2 dark:border-betterFinance-primary h-[calc(100%-60px)] overflow-hidden">
        <ScrollArea className="h-full" disableScrollbar>
          <Table>
            <TableHeader>
              <TableRow className="sticky top-0 bg-white hover:bg-white dark:bg-gray-900 dark:hover:bg-gray-900">
                <TableHead className="w-[550px]">Transaction Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <tr>
                <td>
                  <ScrollBar className="pt-[calc(3rem+4px)]" />
                </td>
              </tr>

              {isLoading && (
                <TableRow className="text-center hover:bg-white text-gray-500 h-[400px]">
                  <TableCell colSpan={4}>
                    <span className="space-x-2">
                      <span>
                        <LoaderCircle className="animate-spin inline-block" />
                      </span>
                      <span>Loading</span>
                    </span>
                  </TableCell>
                </TableRow>
              )}

              {isError && (
                <TableRow className="text-center hover:bg-white text-gray-500 h-[400px]">
                  <TableCell colSpan={4}>
                    <span className="space-x-2 text-red-500">
                      <span>
                        <TriangleAlert className="inline-block" />
                      </span>
                      <span>An unexpected error occured. The data cannot be fetched.</span>
                    </span>
                  </TableCell>
                </TableRow>
              )}

              {isSuccess &&
                transactions.data.map((transaction) => (
                  <TableRow key={transaction.description}>
                    <TableCell className="font-medium">
                      {transaction.description}
                    </TableCell>
                    <TableCell>
                      {format(new Date(transaction.transaction_date), "PP")}
                    </TableCell>
                    <TableCell>
                      <TransactionTypeBadge
                        isPositive={transaction.type === "income"}
                        type={transaction.category}
                      />
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {transaction.type === "income" ? (
                        <span className="text-betterFinance-primary dark:text-betterFinance-background">
                          +{transaction.amount}
                        </span>
                      ) : (
                        <span className="text-red-500">
                          -{transaction.amount}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}

              {isSuccess && transactions.data.length == 0 && (
                <TableRow className="text-center hover:bg-white text-gray-500 h-[400px]">
                  <TableCell colSpan={4}>No data is available yet.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
};

export default TransactionsPage;
