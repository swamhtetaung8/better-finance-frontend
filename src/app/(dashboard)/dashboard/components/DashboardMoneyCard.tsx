import { CircleDollarSign, MoveDown, MoveUp } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import React from 'react'
import MoneyFormatter from '@/hooks/money-formatter'

interface DashboardMoneyCardProps {
  type: 'Income' | 'Expense' | 'Savings' | 'Investment',
  percentage: number,
  isPercentagePositive: boolean,
  total: number,
  lastWeekComparison: number,
  isLastWeekComparisonPositive: boolean,
}

const DashboardMoneyCard = ({ type, percentage, isPercentagePositive, total, lastWeekComparison, isLastWeekComparisonPositive } : DashboardMoneyCardProps) => {
  return (
    <div className='border rounded-3xl p-4 space-y-2 dark:border-betterFinance-primary'>

      {/* Top Label and Percentage display */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className='p-2 bg-betterFinance-background rounded-full'>
            <CircleDollarSign size={15} className='dark:text-betterFinance-primary' />
          </span>
          <span className='text-lg'>{type}</span>
        </div>

        {isPercentagePositive ? (
          <Badge variant="success" className='flex items-center gap-2'>
            <MoveUp size={15} className='text-green-900' /> <span className='font-semibold text-green-900'>{percentage}%</span>
          </Badge>
        ) : (
          <Badge variant="destructive" className='flex items-center gap-2'>
            <MoveDown size={15} className='text-red-900' /> <span className='font-semibold text-red-900'>{percentage}%</span>
          </Badge>
        )}
      </div>

      {/* Total Money and Comparison with last month */}
      <div className="flex justify-between items-center">
        <p className="text-3xl text-betterFinance-primary dark:text-betterFinance-background font-semibold">
          $<MoneyFormatter amount={total} />
        </p>
        <p>
          <span className='text-betterFinance-primary dark:text-betterFinance-background font-semibold'> {isLastWeekComparisonPositive ? '+' : '-'} {lastWeekComparison} </span>
          <span className='font-thin'>than last month</span>
        </p>
      </div>

    </div>
  )
}

export default DashboardMoneyCard
