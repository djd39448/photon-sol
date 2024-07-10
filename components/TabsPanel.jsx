import React, { useState } from "react";
import TabNav from "./ui/tabs/tab-nav";
import TabPanel from "./ui/tabs/tab-panel";
import {
  TouteslessData,
  Touteslesscolumns,
  TouteslessTableStyle,
} from "../data/library";
import DataTable from "react-data-table-component";
import Transactions from './Transactions';
import MyHoldings from "./MyHoldings";
import TopTraders from "../components/TopTraders";
import Holders from "./Holders";
import Orders from "./Orders";
const tabs = [
  "Transactions",
  "My Holdings",
  "Top Traders",
  "Holders(6)",
  "Orders",
];

const TabsPanel = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div >
      <div className="flex gap-10 border-b border-[#36363F] pl-8">
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
            <Transactions/>
        </TabPanel>
        <TabPanel isActive={activeTabIndex === 1}>
          <MyHoldings/>
        </TabPanel>
        <TabPanel isActive={activeTabIndex === 2}>
          <TopTraders/>
        </TabPanel>
        <TabPanel isActive={activeTabIndex === 3}>
          <Holders/>
        </TabPanel>
        <TabPanel isActive={activeTabIndex === 4}>
          <Orders/>
        </TabPanel>
      </div>
    </div>
  );
};

export default TabsPanel;
