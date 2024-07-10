import React, { useState } from "react";
import { FaFilter } from "react-icons/fa"; // Import a filter icon
import { BiChevronDown } from "react-icons/bi"; // Import a down arrow icon
const MyHoldings = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => setEnabled(!enabled);
  return (
    <div>
      <div className="flex flex-row flex-wrap mt-5">
        <button className="flex items-center border-[#36363F] border-2 px-3 py-2 mr-4 space-x-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none">
          <FaFilter className="text-gray-400" />
          <span className="text-[white] text-[13px]">Filter</span>
          <BiChevronDown className="text-gray-50" />
        </button>

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
          <span className="ml-3 text-gray-400">Show hidden</span>
        </div>
      </div>
      <div className="w-full text-[#8d93b7] text-center py-[100px]">
        You currently do not have any token holdings in your Photon trading
        wallet.
      </div>
    </div>
  );
};
export default MyHoldings;