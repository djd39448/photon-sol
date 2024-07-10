import { useState } from "react";
import { holders } from "../data/projectsData";
const Holders = () => {
  return (
    <section className="mx-auto">
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto">
          <div className="inline-block min-w-full py-2 ">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr>
  
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
                      % OWNED
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      AMOUNT
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      VALUE
                    </th>
                    
                    <th
                      scope="col"
                      className="  px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-[#36363F]">
                  {holders.map((val, index) => (
                    <tr key = {index}>
                      
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          
                          <span className="text-[#8e9dff] text-[14px]">
                            {val.wallet}
                          </span>
                          <div className="w-[60px] ml-2">
                            {
                              val.dev === true ? <span className="text-[#e7b587] bg-[#303038] px-2 py-1 rounded-full text-[10px]">Dev</span>: null
                            }
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                        <span className={`text-[15px] text-[#fff]`}>
                          {val.owned}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                      <span className={`text-[15px] text-[#fff]`}>
                          {val.amount}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                      <span className={`text-[15px] text-[#fff]`}>
                          {val.value}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap ">
                        <div className="flex items-center justify-end">
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

export default Holders;
