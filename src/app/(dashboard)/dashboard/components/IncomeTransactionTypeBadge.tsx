import React from "react";

import { Badge } from "@/components/ui/badge";
import { formatTransactionType } from '@/app/(dashboard)/dashboard/components/TransactionTypeBadge';

export enum IncomeType {
  Salary = "salary",
  Freelance = "freelance",
  InvestmentReturns = "investment_returns",
}

interface IncomeTransactionTypeBadgeProps {
  incomeType: IncomeType;
}

const IncomeTransactionTypeBadge = ({
  incomeType,
}: IncomeTransactionTypeBadgeProps) => {
  const formattedIncomeType = formatTransactionType(incomeType);
  
  switch(incomeType) {
    case IncomeType.Salary:
      return <Badge className="bg-emerald-500 rounded-full hover:bg-emerald-600">{formattedIncomeType}</Badge>
    case IncomeType.Freelance:
      return <Badge className="bg-indigo-500 rounded-full hover:bg-indigo-600">{formattedIncomeType}</Badge>
    case IncomeType.InvestmentReturns:
      return <Badge className="bg-sky-500 rounded-full hover:bg-sky-600">{formattedIncomeType}</Badge>
  };
};

export default IncomeTransactionTypeBadge;
