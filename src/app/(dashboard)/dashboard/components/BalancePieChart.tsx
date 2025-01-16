"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { expenseType: "foodAndDrinks", amount: 2000, fill: "#f97316" },
  { expenseType: "transportation", amount: 300, fill: "#71717a" },
  { expenseType: "shopping", amount: 1500, fill: "#f43f5e" },
  { expenseType: "utilities", amount: 500, fill: "#eab308" },
]

const chartConfig = {
  expenses: {
    label: "Expenses",
  },
  foodAndDrinks: {
    label: "Food And Drinks",
  },
  transportation: {
    label: "Transportation",
  },
  shopping: {
    label: "Shopping",
  },
  utilities: {
    label: "Utilities",
  },
} satisfies ChartConfig

export default function BalancePieChart() {
  const totalExpenses = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0)
  }, [])

  return (
    <div className="border rounded-3xl space-y-2 flex-1 dark:border-betterFinance-primary">
      <CardHeader className="items-center pb-0">
        <CardTitle>Expense Breakdown</CardTitle>
        <CardDescription>January 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="expenseType"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className=" fill-betterFinance-primary dark:fill-betterFinance-background text-3xl font-bold"
                        > 
                          {totalExpenses.toLocaleString()}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Increase by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing expense breakdowns by types
        </div>
      </CardFooter>
    </div>
  )
}
