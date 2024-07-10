import React from "react";
import * as cn from "classnames";

const TabNav = ({ text, isActive, click }) => {
  return (
    <button
      className={cn({
        "relative py-4 font-bold text-[#b5b7da] text-opacity-70 hover:text-opacity-100 transition-all": true,
        "after:absolute after:after-content after:h-0.5 after:w-full after:bg-[white] after:bottom-0 after:left-0 after:rounded-full text-[#FFF]": isActive,
      })}
      onClick={() => click()}
    >
      {text}
    </button>
  );
};

export default TabNav;
