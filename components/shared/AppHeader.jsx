import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiX, FiMenu } from "react-icons/fi";
import logoLight from "../../public/images/logo-light.svg";
import logosmall from "../../public/images/logo-small.svg";
import LinkButton from "./ButtonLink";
import { IoWalletOutline } from "react-icons/io5";
import { TbCurrencySolana } from "react-icons/tb";
import { TbDeviceMobileFilled } from "react-icons/tb";
import { BiSolidUserCircle } from "react-icons/bi";
import solanapng from "../../public/images/solana.png";

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      style={{ backgroundColor: "rgb(24, 25, 33)" }}
    >
      <div
        className="z-10 block w-full px-6 lg:flex sm:items-center"
        style={{ backgroundColor: "rgb(24, 25, 33)" }}
      >
        <div className="flex items-center py-3 sm:px-0">
          <div className={`flex ${showMenu ? "justify-center w-full" : ""}`}>
            <Link href="/">
              {/* Update the Image component to use intrinsic dimensions */}
              <Image
                src={showMenu ? logosmall : logoLight}
                alt="Logo"
                width={showMenu ? 150 : 30}
                height={30}
                className="inline cursor-pointer fixed-size"
              />
            </Link>
          </div>

          <div className="self-end ml-auto lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                style={{ color: "#b5b7da" }}
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="items-center justify-between hidden w-full ml-4 space-x-4 lg:flex">
          <div className="flex flex-row items-center">
            <LinkButton linkname={"/"} title={"NEW PAIRS"} />
            <LinkButton linkname={"/trending"} title={"TRENDING"} />
            <LinkButton linkname={"/memescope"} title={"MEMESCOPE"} />
            <LinkButton linkname={""} title={"HOLDINGS"} />
            <LinkButton linkname={""} title={"LEADERBOARD"} />
          </div>
          <div className="self-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full sm:w-2/3 md:w-3/4 lg:w-full text-sm text-[#b5b7da] rounded-xl border-none"
                placeholder="Search by token or LP contract"
                required
                style={{
                  backgroundColor: "rgb(38, 38, 46)",
                  borderRadius: "50px",
                  height: "40px",
                }}
              />
            </div>
          </div>
          <div
            className="items-center my-auto h-[100%] flex flex-row"
            style={{ color: "#b5b7da" }}
          >
            <IoWalletOutline
              style={{ height: "25px", width: "auto", marginRight: "5px" }}
            />
            <div className="flex flex-col mr-7">
              <div className="flex flex-row">
                <Image
                  src={solanapng}
                  className="items-center my-auto mr-1"
                  style={{ height: "10px", width: "auto" }}
                />
                {"0"}
              </div>
              <div className="text-[12px]">SOL</div>
            </div>
            <div className="flex flex-col items-center justify-center my-auto mr-7">
              <TbDeviceMobileFilled style={{ height: "20px", width: "auto" }} />
              <span>Mobile</span>
            </div>
            <div className="items-center my-auto">
              <BiSolidUserCircle style={{ height: "35px", width: "auto" }} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          showMenu
            ? "block m-0 sm:ml-4 sm:mt-3 lg:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
            : "hidden"
        }
      >
        {/* Small screen menu items */}
        {[
          "NEW PAIRS",
          "TRENDING",
          "MEMESCOPE",
          "HOLDINGS",
          "TRADE WITH ETH",
          "REFERRAL TRACKING",
          "TRANSFER FUNDS",
          "LEADERBOARD",
          "SETTINGS",
          "LANGUAGE",
          "SWITCH NETWORK",
          "LOGOUT",
        ].map((item, index) => (
          <div
            key={index}
            className="font-Chillax-Variable flex items-center justify-between pt-3 mb-2 text-lg text-left justify-items-stretch text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            style={{
              fontWeight: 500,
              fontSize: "12px",
              color: "#b5b7da",
              lineHeight: "20px",
            }}
          >
            <Link href="" aria-label={item} className="self-start">
              {item}
            </Link>
            <Link href="" className="self-end px-5">
              {">"}
            </Link>
          </div>
        ))}
      </div>
    </motion.nav>
  );
}

export default AppHeader;
