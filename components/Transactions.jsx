import { useState } from "react";
import { MetaData } from "../data/projectsData";
const TransactionTable = () => {
  const [date_t, setDate_t] = useState(1);
  return (
    <section class="mx-auto">
      <div class="flex flex-col">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 px-4 text-sm font-normal text-left w-1/10"
                    >
                      <div class="flex items-center ">
                        <button
                          onClick={() => setDate_t(1)}
                          className={`border-2 border-[#36363F] px-3 py-1 rounded-l-full text-[#8d93b7] ${
                            date_t === 1 ? "bg-[#36373F] text-[white]" : null
                          }`}
                        >
                          DATE
                        </button>
                        <button
                          onClick={() => setDate_t(2)}
                          className={`border-2 border-[#36363F] px-3 py-1 rounded-r-full mr-2 text-[#8d93b7] ${
                            date_t === 2 ? "bg-[#36373F] text-[white]" : null
                          }`}
                        >
                          AGE
                        </button>
                        <button class="flex items-center gap-x-2">
                          <svg
                            class="h-3"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.1"
                            />
                            <path
                              d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.1"
                            />
                            <path
                              d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.3"
                            />
                          </svg>
                        </button>
                      </div>
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      TYPE
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      PRICE USD
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      TOTAL USD
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      PRICE SOL
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      AMOUNT
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      TOTAL SOL
                    </th>
                    <th
                      scope="col"
                      class="  px-4 py-3.5 text-left rtl:text-right font-semibold text-[#8d93b7] text-[14px] w-1/10"
                    >
                      <div className="flex items-center">
                      MAKERS <img
                            className="w-[20px] ml-1 fixed-size"
                            src={"/images/Filter.svg"}
                          />
                          </div>
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-left rtl:text-right font-semibold text-[#24252e] text-[14px] w-1/10"
                    >
                      asdfasdfa
                    </th>
                  </tr>
                </thead>
                <tbody class=" divide-y divide-[#36363F]">
                  {MetaData.map((val, index) => (
                    <tr key= {index}>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <span className={`text-[14px] ${val.type == 'Sell' ? "text-[#ffcad6]" : "text-[#bafffa]"}`}>
                            {date_t == 1 ? val.date : val.age}
                          </span>
                        </div>
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
                        <span className={`text-[14px] ${val.type == 'Sell' ? "text-[#ffcad6]" : "text-[#bafffa]"}`}>
                          {val.type}
                        </span>
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <span className={`text-[14px] ${val.type == 'Sell' ? "text-[#ffcad6]" : "text-[#bafffa]"}`}>
                          {val.priceUSD}
                        </span>
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
                        <span className={`text-[14px] ${val.type == 'Sell' ? "text-[#ffcad6]" : "text-[#bafffa]"}`}>
                          {val.totalUSD}
                        </span>
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap flex items-center">
                        <div className="flex items-center">
                          {
                            val.priceSOL === '-' ? null: <img
                            className="w-[15px] mr-1"
                            src={"/images/solana.png"}
                          />
                          }
                          
                          <span className={`text-[14px] ${val.type == 'Sell' ? "text-[#ffcad6]" : "text-[#bafffa]"}`}>
                            {val.priceSOL}
                          </span>
                        </div>
                      </td>

                      <td class="px-4 py-4 whitespace-nowrap">
                        <span className={`text-[14px] ${val.type == 'Sell' ? "text-[#ffcad6]" : "text-[#bafffa]"}`}>
                          {val.amount}
                        </span>
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="w-[15px] mr-1"
                            src={"/images/solana.png"}
                          />
                          <span className={`text-[14px] ${val.type == 'Sell' ? "text-[#ffcad6]" : "text-[#bafffa]"}`}>
                            {val.totalSol}
                          </span>
                        </div>
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
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
                      <td class="px-4 py-4 whitespace-nowrap ">
                        <div className="flex items-center justify-end ">
                          
                          <img
                            className="w-[20px] mr-1 fixed-size"
                            src={"/images/Filter.svg"}
                          />
                          <img
                            className="w-[20px] mr-1 fixed-size"
                            src={"/images/solscan.png"}
                          />
                          <img
                            className="w-[20px] mr-1 fixed-size"
                            src={"/images/solscan_1.png"}
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

export default TransactionTable;
