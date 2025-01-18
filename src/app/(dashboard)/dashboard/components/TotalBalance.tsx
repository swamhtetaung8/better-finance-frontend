import { CreditCard, Ellipsis } from "lucide-react";
import React from "react";

const TotalBalance = () => {
  return (
    <div
      className={
        "flex-1 border rounded-3xl p-4 space-y-2 dark:border-betterFinance-primary flex flex-col justify-between"
      }
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-betterFinance-primary dark:text-betterFinance-background text-xl">
          Balance
        </h1>
        <button>
          <Ellipsis className="text-neutral-700 dark:text-neutral-300" size={20} />
        </button>
      </div>

      <div className="space-y-1">
        <p className="text-sm">Total Balance</p>
        <div className="rounded-lg overflow-hidden bg-slate-200 pt-4">
          <div className="flex gap-x-4">
            <div className="bg-betterFinance-primary p-4 rounded-tr-xl">
              <CreditCard className="text-betterFinance-background" />
            </div>
            <div className="space-y-2 pb-8">
              <h1 className="font-semibold text-betterFinance-primary text-3xl pt-2">
                $13,000
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
