import React from "react";
import servicesOffered from "../../helpers/services-offered";
import iconCheck from "../../assets/shared/desktop/icon-check.svg";
import ButtonComponent from "../ButtonComponent";

const FreePlan = () => {
  return (
    <div>
      <h3 className="text-[#ba4270] font-[600] text-[30px]">Free Plan</h3>
      <p className="my-[16px]">
        Build and test using our core set of products with up to 100 API
        requests
      </p>
      <h6 className="text-4xl text-[#36536b] pb-[10px] font-[600]">$0.00</h6>
      <div className="border-y border-[#36536b]">
        <ul className="my-[16px]">
          {servicesOffered?.map((service, i) => (
            <li key={i} className="flex items-center my-[8px]">
              <span className="w-[16px] mr-[16px]">
                {service.plans.includes("free") ? (
                  <img src={iconCheck} alt="icon-check" />
                ) : (
                  ""
                )}
              </span>
              <span
                className={`capitalize opacity-[50%] ${
                  service.plans.includes("free") &&
                  "font-semibold opacity-[100%]"
                }`}
              >
                {service.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-[40px] mt-[24px]">
        <ButtonComponent title={"Request Access"} tert={"tert-btn"} />
      </div>
    </div>
  );
};

export default FreePlan;
