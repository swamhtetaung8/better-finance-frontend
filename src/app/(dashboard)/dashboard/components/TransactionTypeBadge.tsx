import React from 'react'
import IncomeTransactionTypeBadge, { IncomeType } from '@/app/(dashboard)/dashboard/components/IncomeTransactionTypeBadge'
import ExpenseTransactionTypeBadge, { ExpenseType } from '@/app/(dashboard)/dashboard/components/ExpenseTransactionTypeBadge'

export const formatTransactionType = (transactionType: IncomeType | ExpenseType) => {
  return transactionType
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

interface TransactionTypeBadgeProps {
  isPositive: boolean,
  type: IncomeType | ExpenseType
}

const TransactionTypeBadge = ({isPositive, type} : TransactionTypeBadgeProps) => {
  if (isPositive) {
    return <IncomeTransactionTypeBadge incomeType={type as IncomeType} />
  } else {
    return <ExpenseTransactionTypeBadge expenseType={type as ExpenseType} />
  }
}

export default TransactionTypeBadge
