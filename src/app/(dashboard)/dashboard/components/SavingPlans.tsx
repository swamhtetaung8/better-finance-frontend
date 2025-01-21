import { Progress } from "@/components/ui/progress";
import MoneyFormatter from "@/hooks/money-formatter";
import { Plus } from "lucide-react";
import React from "react";

const SavingPlans = () => {
  const savingPlans = [
    {
      id: 1,
      name: "Emergency Fund",
      goal: 10000,
      current: 4500,
    },
    {
      id: 2,
      name: "Vacation Fund",
      goal: 5000,
      current: 2500,
    },
    {
      id: 3,
      name: "New Computer",
      goal: 2000,
      current: 1800,
    },
  ];

  return (
    <div
      className={
        "h-full border rounded-3xl p-4 space-y-1 dark:border-betterFinance-primary"
      }
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-betterFinance-primary dark:text-betterFinance-background text-xl">
          Saving Plans
        </h1>
        <button className="flex items-center gap-x-1 text-betterFinance-primary dark:text-betterFinance-background">
          <Plus size={15} />
          <span>Add Plans</span>
        </button>
      </div>

      <div className="divide-y-[1px]">
        <div className="space-y-1 py-2">
          <p className="text-sm">Total Savings</p>
          <h1 className="font-semibold text-betterFinance-primary dark:text-betterFinance-background text-3xl">
            $8,800
          </h1>
        </div>
        <div className="space-y-2 divide-y-[1px] 2xl:max-h-[240px] 2xl:overflow-y-auto">
          {savingPlans.map((savingPlan) => (
            <div className="space-y-2 py-2" key={savingPlan.id}>
              <h2 className="text-betterFinance-primary font-medium dark:text-betterFinance-background">
                {savingPlan.name}
              </h2>
              <Progress value={(savingPlan.current/savingPlan.goal) * 100} className="h-3" />
              <div className="flex justify-between items-center">
                <p>
                  <span className="text-betterFinance-primary dark:text-betterFinance-background font-medium">
                    $<MoneyFormatter amount={savingPlan.current}/>
                  </span>{" "}
                  / <span className="text-neutral-500 dark:text-neutral-400">$<MoneyFormatter amount={savingPlan.goal}/></span>
                </p>
                <p className="text-betterFinance-primary dark:text-betterFinance-background">{(savingPlan.current/savingPlan.goal) * 100}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavingPlans;
