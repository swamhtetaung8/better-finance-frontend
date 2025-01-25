import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
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

const transactions = [
  {
    transactionName: "Snack at Swensens",
    date: "2025-01-20",
    isPositive: false,
    type: "food_and_drinks",
    totalAmount: 8,
  },
  {
    transactionName: "Uber to work",
    date: "2025-01-18",
    isPositive: false,
    type: "transportation",
    totalAmount: 12,
  },
  {
    transactionName: "Medical Checkup",
    date: "2024-01-02",
    isPositive: false,
    type: "medical",
    totalAmount: 55,
  },
  {
    transactionName: "Eat out",
    date: "2024-01-10",
    isPositive: false,
    type: "food_and_drinks",
    totalAmount: 25,
  },
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

const TransactionsPage = () => {
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
          <Button className="uppercase">
            <PlusIcon />
            <span>Add Transaction</span>
          </Button>
        </div>
      </div>

      {/* Transaction List */}
      <div className="border rounded-3xl p-4 space-y-2 dark:border-betterFinance-primary h-[calc(100%-60px)] overflow-hidden">
        <ScrollArea className="h-full" disableScrollbar>
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
    </div>
  );
};

export default TransactionsPage;
