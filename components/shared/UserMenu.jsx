import { useState, useEffect, useRef } from "react";
import { BiSolidUserCircle } from "react-icons/bi";

export default function Menu() {
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
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  const menuItems = [
    { label: 'TRADE WITH ETH', src: '/images/ethtrade.svg', alt: 'ETH' },
    { label: 'REFERAL TRACKING', src: '/images/referral.svg', alt: 'REFERAL' },
    { label: 'TRANSFER FUNDS', src: '/images/transfer.svg', alt: 'TRANSFER' },
    { label: 'SETTINGS', src: '/images/settings.svg', alt: 'SETTINGS' },
    { label: 'DOCUMENTATION', src: '/images/docu.svg', alt: 'DOCUMENTATION' },
    { label: 'LANGUAGE', src: '/images/lang.svg', alt: 'LANGUAGE' },
    { label: 'SWITCH NETWORK', src: '/images/switch.svg', alt: 'SWITCH' },
    { label: 'LOGOUT', src: '/images/logout.svg', alt: 'LOGOUT' },
  ];

  return (
    <div 
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={dropdownRef}
    >
      <div className="flex items-center cursor-pointer">
        {/* <BiSolidUserCircle style={{ height: "35px", width: "auto" }} /> */}
        <img src="/images/usericon.svg" style={{ height: "35px", width: "auto", background: '#555' }} className="rounded-full"/>
      </div>
      {isOpen && (
                <div className="absolute right-0 w-72 bg-[#171821] border border-gray-600 rounded-lg shadow-lg z-10">
                    <div className="flex flex-col p-2">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={closeDropdown}
                                className="flex items-center px-4 py-3 space-x-2 rounded cursor-pointer hover:bg-[#23242a]"
                            >
                                <img className="w-[20px] mr-2" src={item.src} alt={item.alt} />
                                <span className="text-[#b5b7da] font-bold">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
        )}
    </div>
  );
}
