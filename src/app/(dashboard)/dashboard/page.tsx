import React from "react";
import DashboardMoneyCard from "@/app/(dashboard)/dashboard/components/DashboardMoneyCard";
import RecentTransactions from "@/app/(dashboard)/dashboard/components/RecentTransactions";
import FinanceScore from "@/app/(dashboard)/dashboard/components/FinanceScore";
import BalancePieChart from "@/app/(dashboard)/dashboard/components/BalancePieChart";
import TotalBalance from "@/app/(dashboard)/dashboard/components/TotalBalance";
import SavingPlans from "./components/SavingPlans";

const DashboardPage = () => {
  return (
    <div className="h-full flex gap-4">
      {/* Left Half of the Dashboard */}
      <div className="h-full w-1/2">
        <div className="space-y-4 h-full">
          {/* Cards stating amount of money */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <DashboardMoneyCard
                type="Income"
                total={8000}
                percentage={3.5}
                isPercentagePositive={true}
                lastWeekComparison={200}
                isLastWeekComparisonPositive={true}
              />
              <DashboardMoneyCard
                type="Expense"
                total={6000}
                percentage={5.5}
                isPercentagePositive={false}
                lastWeekComparison={550}
                isLastWeekComparisonPositive={false}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <DashboardMoneyCard
                type="Savings"
                total={2000}
                percentage={5.5}
                isPercentagePositive={true}
                lastWeekComparison={200}
                isLastWeekComparisonPositive={true}
              />
              <DashboardMoneyCard
                type="Investment"
                total={3500}
                percentage={5}
                isPercentagePositive={true}
                lastWeekComparison={350}
                isLastWeekComparisonPositive={true}
              />
            </div>
          </div>

          {/* Recent Transactions Card */}
          <div className="grid grid-cols-1 gap-4 h-[calc(100%-250px)]">
            <RecentTransactions />
          </div>
        </div>
      </div>

      {/* Right Half of the Dashboard */}
      <div className="h-full w-1/2">
        <div className="flex gap-4 items-start h-full">
          <BalancePieChart />
          <div className="space-y-4 flex-1 flex flex-col h-full">
            <div className="flex flex-col space-y-4 h-1/2">
              <FinanceScore />
              <TotalBalance />
            </div>
            <div className="h-1/2">
              <SavingPlans />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
