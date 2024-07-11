import { GrLinkNext } from "react-icons/gr";
import { IoIosCopy } from "react-icons/io";
import moonpay from '../public/images/moonpay.svg'
import Image from "next/image";
import apppay from '../public/images/apppay.webp';
import goopay from '../public/images/goopay.webp';
import cipay from '../public/images/cipay.webp';
import visa from '../public/images/visa.webp';
import paypal from '../public/images/paypal.webp';

const Withdraw = () => {
    
    const formatAddress = (addr) => {
        return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
    };

    return (
        <div className="w-full py-4 text-[white]">
            <div className="flex flex-col mb-4">
                <span className="text-[16px] text-[#b5b7da]">Withdraw from Photon trading wallet to your selected wallet.</span>
                <div className="flex flex-col flex-wrap mt-4 lg:space-x-4 lg:flex-row ">
                    <div className="flex flex-col justify-between mb-2">
                        <div className="flex flex-col space-y-2">
                            <span className="text-[13px]">WITHDRAW FROM</span>
                            <div
                                className="flex flex-row px-4 py-2 bg-transparent placeholder-[#36363F] border border-[#36363F] rounded-full lg:w-[auto] w-full hover:border-white focus:border-white"
                            >
                                {formatAddress('GgYUUUpzEPTtP9Q3F6teMEhhtTFvoASRXPuSfwKZanC9')}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between mb-2">
                        <div className="flex flex-col space-y-2">
                            <span className="text-[13px]">SOL AMOUNT</span>
                            <input
                                className="lg:w-[200px] w-full px-4 py-2 bg-transparent placeholder-[#b5b7da] border border-[#36363F] rounded-full hover:border-white focus:border-white"
                                placeholder="Input amount"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col hidden mb-2 lg:block">
                        <div className="p-3 rounded-full mt-7" style={{border: '1px solid #36363F'}} >
                            <GrLinkNext />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between ">
                        <div className="flex flex-col space-y-2">
                            <span className="text-[13px]">WITHDRAW TO</span>
                            <div
                                className="flex bg-[#454549] flex-row px-4 py-2 bg-transparent rounded-full hover:border-white focus:border-white"
                            >
                                CGNsRtbKJZT5bv97ugDrtX6jucFBajS82DxgykxKdihn
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <button className="px-8 py-2 rounded-full mt-7" style={{backgroundColor: 'rgb(108,97,235)'}} >
                            Withdraw
                        </button>
                    </div>
                    <div className="flex flex-col justify-between ">
                        <div className="flex flex-col space-y-2">
                            <span className="text-[13px]">PRIORITY FEE</span>
                            <input
                                className="lg:w-[100px] w-full flex flex-row px-4 py-2 bg-transparent placeholder-[#b5b7da] border border-[#36363F] rounded-full hover:border-white focus:border-white"
                                value={"0.0001"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-4" style={{borderTop: '1px solid #36363F'}}>
                <span className="text-[13px]">HISTORY</span>
                <span className="text-[#b5b7da] mx-auto my-10">There are currently no transactions yet.</span>
            </div>
        </div>
    )
}

export default Withdraw;