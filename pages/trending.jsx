import React, { useState } from "react";
import TabNav from "../components/ui/tabs/tab-nav";
import TabPanel from "../components/ui/tabs/tab-panel";
import Withdraw from "../components/Withdraw";
import Deposit from "../components/Deposit";
const tabs = ["Deposit", "Withdraw"];
export default () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div className="min-h-[100vh] container justify-center mx-auto mt-4">
      <span className="text-[20px] font-semibold text-[#FFF] ">
        TRANSFER FUNDS
      </span>
      <div className="bg-[#26272F] rounded-lg mt-4 p-5 w-full ">
        <div className="flex gap-10 border-b border-[#36363F]">
          {tabs.map((item, index) => (
            <TabNav
              key={`tab-nav-${index}`}
              text={item}
              isActive={activeTabIndex === index}
              click={() => {
                setActiveTabIndex(index);
              }}
            />
          ))}
        </div>
        <div className="overflow-hidden pl-5">
          <TabPanel isActive={activeTabIndex === 0}>
            <Deposit />
          </TabPanel>
          <TabPanel isActive={activeTabIndex === 1}>
            <Withdraw />
          </TabPanel>
        </div>
      </div>
    </div>
  );
};
