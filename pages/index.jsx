import { useState, useEffect, useRef } from 'react';
import { FaFilter } from 'react-icons/fa'; // Import a filter icon
import { BiChevronDown } from 'react-icons/bi'; // Import a down arrow icon
import { AiFillSetting } from "react-icons/ai";
import Chart from '../components/shared/Chart';
import CoinTypeMenu from '../components/shared/CoinTypeMenu';
import FilterButton from '../components/shared/FilterButton';
import DexesButton from '../components/shared/DexesButton';

const NewPairs = () => {
    
    const [enabled, setEnabled] = useState(true);
    const [searchsol, setSearchSol] = useState('0.0');

    const toggleSwitch = () => setEnabled(!enabled);
    
    return (
        <div style={{color: 'white'}} className='px-4'>
            <div className='flex flex-row items-center justify-between px-2'>
                <h1 style={{fontWeight: 'bold'}}>NEW PAIRS</h1>
                <CoinTypeMenu />
            </div>            
            <span className="text-[14px] text-[#b5b7da] px-2">New token pairs in the last 24-hours updated in real-time.</span>
            <div className='flex flex-row flex-wrap justify-between px-2 mt-2'>
                <div className='flex justify-between w-full lg:w-2/5 '>
                    <FilterButton />

                    <DexesButton />
                    {/* <button className="flex items-center px-3 py-2 space-x-2 text-white rounded-full hover:bg-gray-700 focus:outline-none" style={{border: '1px solid #333'}}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: '#b5b7da'}}>
                            <path d="M14.2 5.05333H10.48C10.22 5.05333 10.0133 4.84666 10.0133 4.58666C10.0133 4.32666 10.22 4.12 10.48 4.12H14.2C14.46 4.12 14.6666 4.32666 14.6666 4.58666C14.6666 4.84666 14.46 5.05333 14.2 5.05333Z" fill="currentColor"/>
                            <path d="M4.27998 5.05333H1.79998C1.53998 5.05333 1.33331 4.84666 1.33331 4.58666C1.33331 4.32666 1.53998 4.12 1.79998 4.12H4.27998C4.53998 4.12 4.74665 4.32666 4.74665 4.58666C4.74665 4.84666 4.53331 5.05333 4.27998 5.05333Z" fill="currentColor"/>
                            <path d="M6.75998 7.22004C8.21433 7.22004 9.39331 6.04105 9.39331 4.5867C9.39331 3.13235 8.21433 1.95337 6.75998 1.95337C5.30563 1.95337 4.12665 3.13235 4.12665 4.5867C4.12665 6.04105 5.30563 7.22004 6.75998 7.22004Z" fill="currentColor"/>
                            <path d="M14.2 11.8733H11.72C11.46 11.8733 11.2534 11.6666 11.2534 11.4066C11.2534 11.1466 11.46 10.9399 11.72 10.9399H14.2C14.46 10.9399 14.6667 11.1466 14.6667 11.4066C14.6667 11.6666 14.46 11.8733 14.2 11.8733Z" fill="currentColor"/>
                            <path d="M5.51998 11.8733H1.79998C1.53998 11.8733 1.33331 11.6666 1.33331 11.4066C1.33331 11.1466 1.53998 10.9399 1.79998 10.9399H5.51998C5.77998 10.9399 5.98665 11.1466 5.98665 11.4066C5.98665 11.6666 5.77331 11.8733 5.51998 11.8733Z" fill="currentColor"/>
                            <path d="M9.24002 14.0467C10.6944 14.0467 11.8734 12.8677 11.8734 11.4134C11.8734 9.95901 10.6944 8.78003 9.24002 8.78003C7.78567 8.78003 6.60669 9.95901 6.60669 11.4134C6.60669 12.8677 7.78567 14.0467 9.24002 14.0467Z" fill="currentColor"/>
                        </svg>
                        <span className="text-[white] text-[13px]">Dexes</span>
                        <span className="text-[#b5b7da] text-[13px]">4</span>
                        <BiChevronDown className="text-gray-50" style={{marginLeft: '0px'}} />
                    </button> */}

                    <div className="flex items-center ml-6">
                        <button
                            onClick={toggleSwitch}
                            className={`relative inline-flex items-center h-3 rounded-full w-9 transition-colors duration-300 ${
                            enabled ? 'bg-gray-600' : 'bg-gray-400'
                            }`}
                            style={{backgroundColor: enabled ? '#6a60e8' : '#b5b7da'}}
                        >
                            <span
                            className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-300 ${
                                enabled ? 'translate-x-4' : 'translate-x-0'
                            }`}
                            />
                        </button>
                        <span className="ml-3 text-gray-400">Quick Buy</span>
                    </div>
                    <button
                        className={`ml-4 py-1 text-left px-4 border-2 rounded-full border-[#36363F] flex items-center ${!enabled ? 'opacity-50' : ''}`}
                        disabled={!enabled}
                    >
                        <img className="w-[15px]" src={"/images/solana.png"} alt="solana" />
                        &nbsp;
                        <input style={{color: 'white', backgroundColor: 'transparent', border: 'none', width: '50px', outline: 'none'}} value={searchsol} onChange={(e) => {setSearchSol(e.target.value)}} disabled={!enabled} />
                    </button>
                </div>
                <div>
                    <button className='flex flex-row items-center px-3 py-1 space-x-2 rounded-full' style={{backgroundColor: 'rgb(39,39,46)'}}>
                        <AiFillSetting style={{width: '16px', height: '16px'}} />
                        <span className='text-[14px]'>Settings</span>
                    </button>
                </div>
            </div>
            <Chart status= {enabled}/>
        </div>
    )
}

export default NewPairs;