import { useState } from 'react';
import { FaFilter } from 'react-icons/fa'; // Import a filter icon
import { BiChevronDown } from 'react-icons/bi'; // Import a down arrow icon
import { AiFillSetting } from "react-icons/ai";
import Chart from '../components/shared/Chart';

const NewPairs = () => {
    
    const [enabled, setEnabled] = useState(false);

    const toggleSwitch = () => setEnabled(!enabled);

    return (
        <div style={{color: 'white'}} className='px-4'>
            <div className='flex flex-row items-center justify-between px-2'>
                <h1 style={{fontWeight: 'bold'}}>NEW PAIRS</h1>
                <button className="ml-4 py-1 text-left px-4 border-2 rounded-full border-[#36363F] flex items-center w-[100px]">
                    <img className="w-[15px]" src={"/images/solana.png"} />
                    &nbsp;SOL
                    <BiChevronDown className="text-gray-50" style={{ width: '24px', height: '24px' }} />
                </button>
            </div>            
            <span className="text-[14px] text-[#b5b7da] px-2">New token pairs in the last 24-hours updated in real-time.</span>
            <div className='flex flex-row flex-wrap justify-between px-2 mt-2'>
                <div className='flex justify-between w-full lg:w-2/5 '>
                    <button className="flex items-center px-3 py-2 mr-4 space-x-2 text-white rounded-full hover:bg-gray-700 focus:outline-none" style={{border: '1px solid #333'}}>
                        <FaFilter className="text-gray-400" />
                        <span className="text-[white] text-[13px]">Filter</span>
                        <BiChevronDown className="text-gray-50" />
                    </button>

                    <button className="flex items-center px-3 py-2 space-x-2 text-white rounded-full hover:bg-gray-700 focus:outline-none" style={{border: '1px solid #333'}}>
                        <FaFilter className="text-gray-400" />
                        <span className="text-[white] text-[13px]">Dexes</span>
                        <span className="text-[#b5b7da] text-[13px]">4</span>
                        <BiChevronDown className="text-gray-50" style={{marginLeft: '0px'}} />
                    </button>

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
                        <input style={{color: 'white', backgroundColor: 'transparent', border: 'none', width: '50px', outline: 'none'}} value={"0.0"} disabled={!enabled} />
                    </button>
                </div>
                <div>
                    <button className='flex flex-row items-center px-3 py-1 space-x-2 rounded-full' style={{backgroundColor: 'rgb(39,39,46)'}}>
                        <AiFillSetting style={{width: '16px', height: '16px'}} />
                        <span className='text-[14px]'>Settings</span>
                    </button>
                </div>
            </div>
            <Chart />
        </div>
    )
}

export default NewPairs;