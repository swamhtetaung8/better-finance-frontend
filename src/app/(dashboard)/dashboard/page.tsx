import React from "react";
import DashboardMoneyCard from "@/app/(dashboard)/dashboard/components/DashboardMoneyCard";
import RecentTransactions from "@/app/(dashboard)/dashboard/components/RecentTransactions";

const DashboardPage = () => {
  return (
    <div className="space-y-4">

      {/* Cards stating amount of money */}
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-4">
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
        <div className="grid grid-cols-4 gap-4">
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
      <div className="grid grid-cols-2 gap-4">
        <RecentTransactions />
      </div>

    </div>
  );
};

export default DashboardPage;
