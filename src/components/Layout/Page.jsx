import React from "react";

const Page = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center h-[665px] w-[390px] bg-black">
      {children}
    </div>
  );
};

export default Page;
