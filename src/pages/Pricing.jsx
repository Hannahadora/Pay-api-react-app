import React from "react";
import FreePlan from "../components/Pricing/FreePlan";
import BasicPlan from "../components/Pricing/BasicPlan";
import PremiumPlan from "../components/Pricing/PremiumPlan";

const Pricing = () => {
  return (
    <div className="app-container mt-[50px]">
      <h1 className="text-[48px] font-bold">Pricing</h1>
      <div className="mt-[50px] flex flex-row lg:flex-nowrap flex-wrap items-start justify-between">
        <div className="mr-[32px]">
          <FreePlan />
        </div>
        <div className="mr-[32px]">
          <BasicPlan />
        </div>
        <div>
          <PremiumPlan />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
