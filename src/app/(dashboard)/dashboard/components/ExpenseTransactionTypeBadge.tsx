import React from "react";

import { Badge } from "@/components/ui/badge";
import { formatTransactionType } from '@/app/(dashboard)/dashboard/components/TransactionTypeBadge';

export enum ExpenseType {
  FoodAndDrinks = "food_and_drinks",
  Transportation = "transportation",
  Utility = "utility",
  Shopping = "shopping",
  Saving = "saving",
}

interface ExpenseTransactionTypeBadgeProps {
  expenseType: ExpenseType;
}

const ExpenseTransactionTypeBadge = ({
  expenseType,
}: ExpenseTransactionTypeBadgeProps) => {
  const formattedExpenseType = formatTransactionType(expenseType);

  switch(expenseType) {
    case ExpenseType.FoodAndDrinks:
      return <Badge className="bg-orange-500 hover:bg-orange-600 rounded-full">{formattedExpenseType}</Badge>
    case ExpenseType.Transportation:
      return <Badge className="bg-zinc-500 hover:bg-zinc-600 rounded-full">{formattedExpenseType}</Badge>
    case ExpenseType.Shopping:
      return <Badge className="bg-rose-500 hover:bg-rose-600 rounded-full">{formattedExpenseType}</Badge>
    case ExpenseType.Utility:
      return <Badge className="bg-yellow-500 hover:bg-zinc-600 rounded-full">{formattedExpenseType}</Badge>
    case ExpenseType.Saving:
      return <Badge className="bg-amber-500 hover:bg-zinc-600 rounded-full">{formattedExpenseType}</Badge>
  };
};

export default ExpenseTransactionTypeBadge;
