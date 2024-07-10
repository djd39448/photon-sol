import React, { useState, useRef, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Image from 'next/image';

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
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItems = [
        { label: 'ETH', src: '/images/eth.svg', alt: 'ETH' },
        { label: 'SOL', src: '/images/solana.png', alt: 'SOL' },
        { label: 'BLAST', src: '/images/blast.svg', alt: 'BLAST' },
        { label: 'BASE', src: '/images/base.svg', alt: 'BASE' }
    ];

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="ml-4 py-1 text-left px-4 border-2 rounded-full border-[#36363F] flex items-center w-[100px]"
            >
                <img className="w-[15px]" src={"/images/solana.png"} alt="Solana" />
                &nbsp;SOL
                <BiChevronDown className="text-gray-50" style={{ width: '24px', height: '24px' }} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-1 w-72 bg-[#171821] border border-gray-600 rounded-lg shadow-lg z-10">
                    <div className="flex flex-col p-2">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={closeDropdown}
                                className="flex items-center px-4 py-3 rounded cursor-pointer hover:bg-gray-700"
                            >
                                <img className="w-[15px] mr-2" src={item.src} alt={item.alt} />
                                <span className="text-white">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
