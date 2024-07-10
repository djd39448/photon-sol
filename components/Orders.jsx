import React, { useState } from "react";
import { FaFilter } from "react-icons/fa"; // Import a filter icon
import { BiChevronDown } from "react-icons/bi"; // Import a down arrow icon
import FilterButtonholding from './shared/FilterButtonholding'
const Orders = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => setEnabled(!enabled);
  return (
    <div>
      <div className="flex flex-row flex-wrap mt-5">
        <FilterButtonholding/>

        <div className="flex items-center ml-6">
          <button
            onClick={toggleSwitch}
            className={`relative inline-flex  items-center h-3 rounded-full w-9 transition-colors duration-300 ${
              enabled ? "bg-gray-600" : "bg-gray-400"
            }`}
            style={{ backgroundColor: enabled ? "#6a60e8" : "#b5b7da" }}
          >
            <span
              className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-300 ${
                enabled ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
          <span className="ml-3 text-gray-400">Show orders for LUCY only</span>
        </div>
      </div>
      <div className="w-full text-center text-[#8d93b7] py-[100px]">
        No Data
      </div>
    </div>
  );
};
export default Orders;