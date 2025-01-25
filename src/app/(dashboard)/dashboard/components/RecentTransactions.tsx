import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TransactionTypeBadge from "./TransactionTypeBadge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
  {
    transactionName: "Binance",
    date: "2024-12-26",
    isPositive: true,
    type: "investment_returns",
    totalAmount: 100,
  },
  {
    transactionName: "New Watch",
    date: "2024-12-25",
    isPositive: false,
    type: "shopping",
    totalAmount: 100,
  },
];

const RecentTransactions = () => {
  return (
    <div className="border rounded-3xl p-4 space-y-2 dark:border-betterFinance-primary h-full overflow-hidden">
      {/* Top Header and month select box */}
      <h1 className="text-lg mb-8 text-betterFinance-primary dark:text-betterFinance-background font-bold">
        Recent Transactions
      </h1>

      <ScrollArea className="h-[508px] 2xl:h-[440px]" disableScrollbar>
        <Table>
          <TableHeader>
            <TableRow className="sticky top-0 bg-white hover:bg-white dark:bg-gray-900 dark:hover:bg-gray-900">
              <TableHead className="w-[250px]">Transaction Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <tr>
              <td>
                <ScrollBar className="pt-[calc(3rem+4px)]" />
              </td>
            </tr>
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
                    <span className="text-betterFinance-primary dark:text-betterFinance-background">
                      +{transaction.totalAmount}
                    </span>
                  ) : (
                    <span className="text-red-500">
                      -{transaction.totalAmount}
                    </span>
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
      </ScrollArea>
    </div>
  );
};

export default RecentTransactions;
