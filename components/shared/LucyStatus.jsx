import React, { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { RiShieldKeyholeFill } from "react-icons/ri";
import Image from "next/image";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="mt-1" ref={dropdownRef}>
      <button onMouseOver={toggleDropdown} onMouseLeave={toggleDropdown}>
        <RiShieldKeyholeFill className="text-[#8d93b7]" />
      </button>

      {isOpen && (
        <div className=" text-[12px] absolute right-10 mt-1 w-56 bg-[#171821]  rounded-lg shadow-lg z-10">
          <div className="flex flex-col p-2">
            <div className="flex w-full justify-between py-1">
              <div className="flex items-center text-[#b5b7da]">
                Mint Authority
              </div>
              <div className="text-[#3ed6cc] font-semibold">Disabled</div>
            </div>
            <div className="flex w-full justify-between py-1">
              <div className="flex items-center text-[#b5b7da]">
                Freeze Authority
              </div>
              <div className="text-[#3ed6cc] font-semibold">Disabled</div>
            </div>
            <div className="flex w-full justify-between py-1">
              <div className="flex items-center text-[#b5b7da]">
                LP Burned
              </div>
              <div className="text-[#3ed6cc] font-semibold">100%</div>
            </div>
            <div className="flex w-full justify-between py-1">
              <div className="flex items-center text-[#b5b7da]">
                Top 10 Holders
              </div>
              <div className="text-[#3ed6cc] font-semibold">2.74%</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
