import { useState } from "react";
import { topTrader } from "../data/projectsData";
const TopTradersTable = () => {
  const [date_t, setDate_t] = useState(1);
  return (
    <section className="mx-auto">
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto ">
          <div className="inline-block min-w-full py-2 ">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-left font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      RANK
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      MAKER
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      INVESTED
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      SOLD
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      P&L
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                     REMAINING
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      BALANCE
                    </th>
                    <th
                      scope="col"
                      className="  px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      TXNS
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-[#36363F]">
                  {topTrader.map((val, index) => (
                    <tr key = {index}>
                      <td className="px-4 py-4 text-sm font-medium  dark:text-gray-200 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <span className={"text-[14px] text-[#b5b7da]"}>
                            #{index+1}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="w-[20px] mr-1"
                            src={
                              val.makersId == 1
                                ? "https://photon-sol.tinyastro.io/assets/icons/shrimp-b79f667af43f1a8d9a9d829fcb46265ac34820bf2587ff2fe83741b9f3e28030.svg"
                                : "https://photon-sol.tinyastro.io/assets/icons/fish-red-434fd628eaa83ca431f54dd1a95a23b93f3ba6acfe3aa92338bc13d6d876a705.svg"
                            }
                          />
                          <span className="text-[#bafffa] text-[14px]">
                            {val.makers}
                          </span>
                          <div className="w-[60px] ml-2">
                            {
                              val.dev === true ? <span className="text-[#e7b587] bg-[#303038] px-2 py-1 rounded-full text-[10px]">Dev</span>: null
                            }
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                        <span className={`text-[15px] text-[#ff4b92]`}>
                          {val.invested}
                        </span><br/>
                        <span className={`text-[14px] text-[#b5b7da]`}>
                        {val.invested_1}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                        <span className={`text-[15px] text-[#3ed6cc]`}>
                          {val.sold}
                        </span><br/>
                        <span className={`text-[14px] text-[#b5b7da]`}>
                        {val.sold_1}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                        <span className={`text-[15px] text-[#3ed6cc]`}>
                          {val.PL}
                        </span>  
                      </td>
                      <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                            {val.remaining}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                        <span className={`text-[15px]`}>
                          {val.balance_1}
                        </span> <spna className = "text-[#8d93b7]">of</spna> <span>{val.balance_2}</span><br/>
                        <div className={`text-[14px] w-[200px] rounded-full h-1 bg-[#303038] mt-2`}>
                            <div className={` h-1 rounded-full bg-[#898eff] ${val.percent == '200px' ? "w-[200px]" : "w-[0px]"}`}></div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap ">
                        <div className="flex items-center justify-center">
                          
                          <img
                            className="w-[20px] mr-1 fixed-size"
                            src={"/images/Filter.svg"}
                          />
                        </div>
                      </td> 
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTradersTable;
