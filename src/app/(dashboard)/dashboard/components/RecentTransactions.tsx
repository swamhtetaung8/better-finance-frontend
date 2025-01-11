import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TransactionTypeBadge from "./TransactionTypeBadge";

const transactions = [
  {
    transactionName: "Dinner at McDonald's",
    date: "2024-12-30",
    isPositive: false,
    type: "food_and_drinks",
    totalAmount: 25,
  },
  {
    transactionName: "Monthly Salary",
    date: "2024-12-29",
    isPositive: true,
    type: "salary",
    totalAmount: 2450,
  },
  {
    transactionName: "Shopping",
    date: "2024-12-28",
    isPositive: false,
    type: "shopping",
    totalAmount: 245,
  },
  {
    transactionName: "Eat out",
    date: "2024-12-28",
    isPositive: false,
    type: "food_and_drinks",
    totalAmount: 35,
  },
  {
    transactionName: "Client John's Payment",
    date: "2024-12-27",
    isPositive: true,
    type: "freelance",
    totalAmount: 245,
  },
  {
    transactionName: "Uber",
    date: "2024-12-26",
    isPositive: false,
    type: "transportation",
    totalAmount: 15,
  },
  {
    transactionName: "S&P 500",
    date: "2024-12-26",
    isPositive: true,
    type: "investment_returns",
    totalAmount: 200,
  },
];

const RecentTransactions = () => {
  return (
    <div className="border rounded-3xl p-4 space-y-2 dark:border-betterFinance-primary h-[540px]">
      {/* Top Header and month select box */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-lg text-betterFinance-primary dark:text-betterFinance-background font-bold">
          Recent Transactions
        </h1>

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
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Transaction Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions?.map((transaction) => (
            <TableRow key={transaction.transactionName}>
              <TableCell className="font-medium">
                {transaction.transactionName}
              </TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>
                <TransactionTypeBadge
                  isPositive={transaction.isPositive}
                  type={transaction.type}
                />
              </TableCell>
              <TableCell className="text-right font-medium">
                {transaction.isPositive ? (
                  <span className="text-betterFinance-primary dark:text-betterFinance-background">+{transaction.totalAmount}</span>
                ) : (
                  <span className="text-red-500">-{transaction.totalAmount}</span>
                )}
              </TableCell>
            </TableRow>
          ))}

          {transactions.length == 0 && (
            <TableRow className="text-center hover:bg-white text-gray-500 h-[400px]">
              <TableCell colSpan={4}>No data is available yet.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentTransactions;
