import { Progress } from "@/components/ui/progress";
import { Ellipsis } from "lucide-react";
import React from "react";

const FinanceScore = () => {
  return (
    <div
      className={
        "flex-1 bg-slate-200 border rounded-3xl p-4 space-y-2 dark:border-betterFinance-primary flex flex-col justify-between"
      }
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-betterFinance-primary text-xl">
          Finance Score
        </h1>
        <button>
          <Ellipsis className="text-neutral-700" size={20} />
        </button>
      </div>

      <div className="space-y-1">
        <p className="text-sm text-neutral-500">Finance Quality</p>
        <div className="space-y-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-betterFinance-primary text-3xl">
              Excellent
            </h1>
            <h1 className="text-betterFinance-primary text-3xl">92%</h1>
          </div>
          <Progress className="h-8" value={92} />
        </div>
      </div>
    </div>
  );
};

export default FinanceScore;
