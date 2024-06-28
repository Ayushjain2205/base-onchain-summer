import React from "react";
import Page from "../components/Layout/Page";

const creator = () => {
  return (
    <Page>
      <div className="flex flex-col px-[10px] w-full items-center justify-center">
        <img className="size-[80px] rounded-full" src="/images/dp.png" alt="" />
        <p className="text-[20px] mt-[4px]">ayushi jain</p>
        <div className="flex gap-[20px] mt-[20px]">
          <div className="flex flex-col ">
            <span className="text-[24px]">$50</span>
            <span className="text-[12px]">clout</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[24px]">50K</span>
            <span className="text-[12px]">community</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[24px]">40%</span>
            <span className="text-[12px]">growth</span>
          </div>
        </div>
        <button className="w-full p-[12px] bg-[#F7FC0D] text-black mt-[16px] rounded-[20px] ">
          Subscribe
        </button>
      </div>
    </Page>
  );
};

export default creator;
