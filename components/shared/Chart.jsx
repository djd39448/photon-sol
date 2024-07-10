import { BiVolume } from "react-icons/bi";
import { HiMiniInformationCircle } from "react-icons/hi2";
import LinkButton from "./ButtonLink";
import Image from "next/image";
import ava1 from '../../public/images/ava1.jpg';
import ava2 from '../../public/images/ava2.webp';
import ava3 from '../../public/images/ava3.webp';
import ava4 from '../../public/images/ava4.webp';
import ava5 from '../../public/images/ava5.jpg';
import ava6 from '../../public/images/ava6.webp';
import ava7 from '../../public/images/ava7.jpg';
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosCopy } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import solanapng from '../../public/images/solana.png';
import { FaRegCircleCheck } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";

const Chart = () => {
  const data = [
    {
      name: '$MEOW',
      ava: ava1,
      addr: '4WPxFy8tS3G7Ak7RA6ZYvetAGn7Z1AuEj6z2An49pCe8',
      social: '2',
      created: '1d 6h',
      liquidity:'451K',
      total: '$64M',
      pro: '+1.55%',
      liquidity1: '8.2M',
      total1: '$1.1B',
      cap: '$26.16M',
      subcap: '$0.0261',
      txns: '44',
      txremain: '56',
      txtotal: '100',
      volume: '$2.1K',
      audit1: 1,
      audit2: 1,
      audit3: 0,
      audit4: 0,
    },
    {
      name: '$PEPU',
      ava: ava2,
      addr: 'C63jk4qXXVoJgefvbv1d2nj9xonroQwHgpFA8Bn8vT48',
      social: '2',
      created: '1d 18h',
      liquidity:'15K',
      total: '$25M',
      pro: '+1.16%',
      liquidity1: '305K',
      total1: '$42M',
      cap: '$51.00M',
      subcap: '$0.0242',
      txns: '41',
      txremain: '13',
      txtotal: '54',
      volume: '$173K',
      audit1: 1,
      audit2: 0,
      audit3: 1,
      audit4: 1,
    },
    {
      name: '$CROSS',
      ava: ava3,
      addr: 'HhPhURTqLgc3ME6X1sLyyUWHRfZEdVxAfa9kSjbn6szy',
      social: '2',
      created: '15h 48m',
      liquidity:'271K',
      total: '$39M',
      pro: '0%',
      liquidity1: '271K',
      total1: '$39M',
      cap: '$42.46M',
      subcap: '$0.0193',
      txns: '119',
      txremain: '22',
      txtotal: '141',
      volume: '$404K',
      audit1: 1,
      audit2: 0,
      audit3: 1,
      audit4: 0,
    },
    {
      name: '$DAWGZ',
      ava: ava4,
      addr: '8Z4XGjq97FdJSLSYU3NEx39sowGrk171hAmsJ13oHV8V',
      social: '2',
      created: '1d 4h',
      liquidity:'2.4K',
      total: '$347K',
      pro: '-26.41%',
      liquidity1: '3.5K',
      total1: '$442K',
      cap: '$47.67K',
      subcap: '$0.0129',
      txns: '6593',
      txremain: '3834',
      txtotal: '10K',
      volume: '$6.2M',
      audit1: 1,
      audit2: 1,
      audit3: 1,
      audit4: 0,
    },
    {
      name: '$$BoyClub',
      ava: ava5,
      addr: 'FaQj5WonnG9sTh3JehRuMm89JaYdjJQnsvrYcrvUxJ8o',
      social: '2',
      created: '1d 11h',
      liquidity:'15K',
      total: '$2.2M',
      pro: '+27.54%',
      liquidity1: '12K',
      total1: '$1.7M',
      cap: '$1.30M',
      subcap: '$0.0130',
      txns: '28464',
      txremain: '15773',
      txtotal: '44K',
      volume: '$14M',
      audit1: 1,
      audit2: 0,
      audit3: 0,
      audit4: 0,
    },
    {
      name: '$CAM',
      ava: ava6,
      addr: '3pFrySeAePHktR33UKbD9cAJbcVbn2gs4chWji9oZEDJ',
      social: '2',
      created: '21h 13m',
      liquidity:'16K',
      total: '$2.1M',
      pro: '+31.4%',
      liquidity1: '12K',
      total1: '$1.7M',
      cap: '$1.41M',
      subcap: '$0.0141',
      txns: '30140',
      txremain: '6905',
      txtotal: '37K',
      volume: '$8M',
      audit1: 1,
      audit2: 1,
      audit3: 1,
      audit4: 1,
    },
    {
      name: '$MEOW',
      ava: ava1,
      addr: '4WPxFy8tS3G7Ak7RA6ZYvetAGn7Z1AuEj6z2An49pCe8',
      social: '2',
      created: '1d 6h',
      liquidity:'451K',
      total: '$64M',
      pro: '+1.55%',
      liquidity1: '8.2M',
      total1: '$1.1B',
      cap: '$26.16M',
      subcap: '$0.0261',
      txns: '44',
      txremain: '56',
      txtotal: '100',
      volume: '$2.1K',
      audit1: 1,
      audit2: 1,
      audit3: 0,
      audit4: 0,
    },
    {
      name: '$PEPU',
      ava: ava2,
      addr: 'C63jk4qXXVoJgefvbv1d2nj9xonroQwHgpFA8Bn8vT48',
      social: '2',
      created: '1d 18h',
      liquidity:'15K',
      total: '$25M',
      pro: '+1.16%',
      liquidity1: '305K',
      total1: '$42M',
      cap: '$51.00M',
      subcap: '$0.0242',
      txns: '41',
      txremain: '13',
      txtotal: '54',
      volume: '$173K',
      audit1: 1,
      audit2: 0,
      audit3: 1,
      audit4: 1,
    },
    {
      name: '$CROSS',
      ava: ava3,
      addr: 'HhPhURTqLgc3ME6X1sLyyUWHRfZEdVxAfa9kSjbn6szy',
      social: '2',
      created: '15h 48m',
      liquidity:'271K',
      total: '$39M',
      pro: '0%',
      liquidity1: '271K',
      total1: '$39M',
      cap: '$42.46M',
      subcap: '$0.0193',
      txns: '119',
      txremain: '22',
      txtotal: '141',
      volume: '$404K',
      audit1: 1,
      audit2: 0,
      audit3: 1,
      audit4: 0,
    },
    {
      name: '$DAWGZ',
      ava: ava4,
      addr: '8Z4XGjq97FdJSLSYU3NEx39sowGrk171hAmsJ13oHV8V',
      social: '2',
      created: '1d 4h',
      liquidity:'2.4K',
      total: '$347K',
      pro: '-26.41%',
      liquidity1: '3.5K',
      total1: '$442K',
      cap: '$47.67K',
      subcap: '$0.0129',
      txns: '6593',
      txremain: '3834',
      txtotal: '10K',
      volume: '$6.2M',
      audit1: 1,
      audit2: 1,
      audit3: 1,
      audit4: 0,
    },
    {
      name: '$$BoyClub',
      ava: ava5,
      addr: 'FaQj5WonnG9sTh3JehRuMm89JaYdjJQnsvrYcrvUxJ8o',
      social: '2',
      created: '1d 11h',
      liquidity:'15K',
      total: '$2.2M',
      pro: '+27.54%',
      liquidity1: '12K',
      total1: '$1.7M',
      cap: '$1.30M',
      subcap: '$0.0130',
      txns: '28464',
      txremain: '15773',
      txtotal: '44K',
      volume: '$14M',
      audit1: 1,
      audit2: 0,
      audit3: 0,
      audit4: 0,
    },
    {
      name: '$CAM',
      ava: ava6,
      addr: '3pFrySeAePHktR33UKbD9cAJbcVbn2gs4chWji9oZEDJ',
      social: '2',
      created: '21h 13m',
      liquidity:'16K',
      total: '$2.1M',
      pro: '+31.4%',
      liquidity1: '12K',
      total1: '$1.7M',
      cap: '$1.41M',
      subcap: '$0.0141',
      txns: '30140',
      txremain: '6905',
      txtotal: '37K',
      volume: '$8M',
      audit1: 1,
      audit2: 1,
      audit3: 1,
      audit4: 1,
    },
    {
      name: '$MEOW',
      ava: ava1,
      addr: '4WPxFy8tS3G7Ak7RA6ZYvetAGn7Z1AuEj6z2An49pCe8',
      social: '2',
      created: '1d 6h',
      liquidity:'451K',
      total: '$64M',
      pro: '+1.55%',
      liquidity1: '8.2M',
      total1: '$1.1B',
      cap: '$26.16M',
      subcap: '$0.0261',
      txns: '44',
      txremain: '56',
      txtotal: '100',
      volume: '$2.1K',
      audit1: 1,
      audit2: 1,
      audit3: 0,
      audit4: 0,
    },
    {
      name: '$PEPU',
      ava: ava2,
      addr: 'C63jk4qXXVoJgefvbv1d2nj9xonroQwHgpFA8Bn8vT48',
      social: '2',
      created: '1d 18h',
      liquidity:'15K',
      total: '$25M',
      pro: '+1.16%',
      liquidity1: '305K',
      total1: '$42M',
      cap: '$51.00M',
      subcap: '$0.0242',
      txns: '41',
      txremain: '13',
      txtotal: '54',
      volume: '$173K',
      audit1: 1,
      audit2: 0,
      audit3: 1,
      audit4: 1,
    },
    {
      name: '$CROSS',
      ava: ava3,
      addr: 'HhPhURTqLgc3ME6X1sLyyUWHRfZEdVxAfa9kSjbn6szy',
      social: '2',
      created: '15h 48m',
      liquidity:'271K',
      total: '$39M',
      pro: '0%',
      liquidity1: '271K',
      total1: '$39M',
      cap: '$42.46M',
      subcap: '$0.0193',
      txns: '119',
      txremain: '22',
      txtotal: '141',
      volume: '$404K',
      audit1: 1,
      audit2: 0,
      audit3: 1,
      audit4: 0,
    },
    {
      name: '$DAWGZ',
      ava: ava4,
      addr: '8Z4XGjq97FdJSLSYU3NEx39sowGrk171hAmsJ13oHV8V',
      social: '2',
      created: '1d 4h',
      liquidity:'2.4K',
      total: '$347K',
      pro: '-26.41%',
      liquidity1: '3.5K',
      total1: '$442K',
      cap: '$47.67K',
      subcap: '$0.0129',
      txns: '6593',
      txremain: '3834',
      txtotal: '10K',
      volume: '$6.2M',
      audit1: 1,
      audit2: 1,
      audit3: 1,
      audit4: 0,
    },
    {
      name: '$$BoyClub',
      ava: ava5,
      addr: 'FaQj5WonnG9sTh3JehRuMm89JaYdjJQnsvrYcrvUxJ8o',
      social: '2',
      created: '1d 11h',
      liquidity:'15K',
      total: '$2.2M',
      pro: '+27.54%',
      liquidity1: '12K',
      total1: '$1.7M',
      cap: '$1.30M',
      subcap: '$0.0130',
      txns: '28464',
      txremain: '15773',
      txtotal: '44K',
      volume: '$14M',
      audit1: 1,
      audit2: 0,
      audit3: 0,
      audit4: 0,
    },
    {
      name: '$CAM',
      ava: ava6,
      addr: '3pFrySeAePHktR33UKbD9cAJbcVbn2gs4chWji9oZEDJ',
      social: '2',
      created: '21h 13m',
      liquidity:'16K',
      total: '$2.1M',
      pro: '+31.4%',
      liquidity1: '12K',
      total1: '$1.7M',
      cap: '$1.41M',
      subcap: '$0.0141',
      txns: '30140',
      txremain: '6905',
      txtotal: '37K',
      volume: '$8M',
      audit1: 1,
      audit2: 1,
      audit3: 1,
      audit4: 1,
    },
    {
      name: '$PEPU',
      ava: ava2,
      addr: 'C63jk4qXXVoJgefvbv1d2nj9xonroQwHgpFA8Bn8vT48',
      social: '2',
      created: '1d 18h',
      liquidity:'15K',
      total: '$25M',
      pro: '+1.16%',
      liquidity1: '305K',
      total1: '$42M',
      cap: '$51.00M',
      subcap: '$0.0242',
      txns: '41',
      txremain: '13',
      txtotal: '54',
      volume: '$173K',
      audit1: 1,
      audit2: 0,
      audit3: 1,
      audit4: 1,
    },
    {
      name: '$CROSS',
      ava: ava3,
      addr: 'HhPhURTqLgc3ME6X1sLyyUWHRfZEdVxAfa9kSjbn6szy',
      social: '2',
      created: '15h 48m',
      liquidity:'271K',
      total: '$39M',
      pro: '0%',
      liquidity1: '271K',
      total1: '$39M',
      cap: '$42.46M',
      subcap: '$0.0193',
      txns: '119',
      txremain: '22',
      txtotal: '141',
      volume: '$404K',
      audit1: 1,
      audit2: 0,
      audit3: 1,
      audit4: 0,
    },
    {
      name: '$DAWGZ',
      ava: ava4,
      addr: '8Z4XGjq97FdJSLSYU3NEx39sowGrk171hAmsJ13oHV8V',
      social: '2',
      created: '1d 4h',
      liquidity:'2.4K',
      total: '$347K',
      pro: '-26.41%',
      liquidity1: '3.5K',
      total1: '$442K',
      cap: '$47.67K',
      subcap: '$0.0129',
      txns: '6593',
      txremain: '3834',
      txtotal: '10K',
      volume: '$6.2M',
      audit1: 1,
      audit2: 1,
      audit3: 1,
      audit4: 0,
    },
    {
      name: '$$BoyClub',
      ava: ava5,
      addr: 'FaQj5WonnG9sTh3JehRuMm89JaYdjJQnsvrYcrvUxJ8o',
      social: '2',
      created: '1d 11h',
      liquidity:'15K',
      total: '$2.2M',
      pro: '+27.54%',
      liquidity1: '12K',
      total1: '$1.7M',
      cap: '$1.30M',
      subcap: '$0.0130',
      txns: '28464',
      txremain: '15773',
      txtotal: '44K',
      volume: '$14M',
      audit1: 1,
      audit2: 0,
      audit3: 0,
      audit4: 0,
    },
    {
      name: '$CAM',
      ava: ava6,
      addr: '3pFrySeAePHktR33UKbD9cAJbcVbn2gs4chWji9oZEDJ',
      social: '2',
      created: '21h 13m',
      liquidity:'16K',
      total: '$2.1M',
      pro: '+31.4%',
      liquidity1: '12K',
      total1: '$1.7M',
      cap: '$1.41M',
      subcap: '$0.0141',
      txns: '30140',
      txremain: '6905',
      txtotal: '37K',
      volume: '$8M',
      audit1: 1,
      audit2: 1,
      audit3: 1,
      audit4: 1,
    },
    // Add more data objects as needed
  ];

  const formatAddress = (addr) => {
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  return (
    <section className="mx-auto mt-4">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-4 lg:-mx-4">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-6">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y text-[13px]">
                <thead className="border-t border-b border-gray-600 text-[#b5b7da]">
                  <tr>
                    <th scope="col" className="px-4 py-2 font-bold text-left" style={{ width: '20%' }}>
                      <div className="flex items-center gap-x-3">
                        <button className="flex items-center gap-x-2">
                          <span>PAIR INFO</span>
                          <HiMiniInformationCircle />
                        </button>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-2 font-bold text-left" style={{ width: '10%' }}>
                      CREATED
                    </th>
                    <th scope="col" className="px-4 py-2 font-bold text-left" style={{ width: '15%' }}>
                      LIQUIDITY
                    </th>
                    <th scope="col" className="px-4 py-2 font-bold text-left" style={{ width: '15%' }}>
                      INITIAL LIQUIDITY
                    </th>
                    <th scope="col" className="px-4 py-2 font-bold text-left" style={{ width: '10%' }}>
                      <div className="flex items-center gap-x-3">
                        <button className="flex items-center gap-x-2">
                          <span>MKT CAP</span>
                          <HiMiniInformationCircle style={{width: '20px', height: 'auto'}}/>
                        </button>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-2 font-bold text-left" style={{ width: '10%' }}>
                      TXNS
                    </th>
                    <th scope="col" className="px-4 py-2 font-bold text-left" style={{ width: '10%' }}>
                      VOLUME
                    </th>
                    <th scope="col" className="px-4 py-2 font-bold text-left" style={{ width: '10%' }}>
                      AUDIT RESULTS
                    </th>
                    <th scope="col" className="px-4 py-2 font-bold text-right" style={{ width: '10%' }}>
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id}
                    className={`${
                      index % 2 === 0 ? "bg-[rgb(25,26,33)]" : "bg-[rgb(20,21,29)]"
                    } hover:bg-[rgb(35,37,56)]`}>
                      <td className="inline-flex px-4 py-4 text-sm font-medium whitespace-nowrap" style={{ width: '30%' }}>
                        <div className="flex flex-row justify-between">
                          <div style={{width: '50px'}}>
                            <Image src={item.ava} style={{ width: '32px', height: 'auto' }} className="rounded-full" alt="avatar" />
                          </div>
                          <div className="ml-1" style={{ marginTop: "-2px" }}>
                            <div className="inline-flex items-center gap-x-1">
                              <span className="text-[14px]">{item.name}</span>
                              <span className="text-[14px] text -[#b5b7da]">/</span>
                              <span className="text-[11px] text-[#b5b7da]">SOL</span>
                            </div>
                            <div className="flex flex-row">
                              <span className="text-[12px]">{formatAddress(item.addr)}</span>
                              <IoIosCopy className="self-center ml-1" style={{ width: '11px', height: '11px' }} />
                            </div>
                            <div className="flex flex-row gap-1">
                              <FaTelegramPlane style={{ width: '12px', height: '12px' }} />
                              <FaXTwitter style={{ width: '12px', height: '12px' }} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap" style={{ width: '10%' }}>
                        <div className="flex flex-row items-center gap-1">
                          <IoMdTime style={{ color: '#b5b7da' }} /> {item.created}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap" style={{ width: '15%' }}>
                        <div className="flex flex-col">
                          <div className="flex flex-row items-center gap-1">
                            <Image src={solanapng} style={{ width: '14px', height: '14px' }} />
                            <span className="text-[13px]">{item.liquidity}</span>
                            <span className="text-[#b5b7da]">/ {item.total}</span>
                          </div>
                          <div>
                            <span
                              className="text-[12px]"
                              style={{
                                color: item.pro.startsWith('+')
                                  ? '#3ed6cc'
                                  : '#ff4b92'
                              }}
                            >
                              {item.pro}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap" style={{ width: '15%' }}>
                        <div className="flex flex-row items-center gap-1">
                          <Image src={solanapng} style={{ width: '14px', height: '14px' }} />
                          <span className="text-[13px]">{item.liquidity1}</span>
                          <span className="text-[#b5b7da]">/ {item.total1}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap" style={{ width: '10%' }}>
                        <div className="flex flex-col my-auto">
                          <span className="text-[14px]">{item.cap}</span>
                          <span className="text-[12px] text-[#b5b7da]">{item.subcap}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap" style={{ width: '10%' }}>
                        <div className="flex flex-col gap-1">
                          <span className="text-[14px]">{item.txtotal}</span>
                          <div className="flex flex-row space-x-1">
                            <span className="text-[12px] text-[#3ed6cc]">{item.txns}</span>
                            <span className="text-[12px]">/</span>
                            <span className="text-[12px] text-[#ff4b92]">{item.txremain}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap" style={{ width: '10%' }}>
                        <span className="text-[14px]">{item.volume}</span>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap" style={{ width: '10%' }}>
                        <div className="flex flex-row space-x-5">
                          <div className="flex flex-col">
                            {item.audit1 == 1 ? <FaRegCircleCheck style={{ width: '14px', height: '14px', color: '#3ed6cc' }} /> : <ImCancelCircle style={{ width: '14px', height: '14px', color: '#ff4b92' }} />}
                            <span className="text-[11px] mt-1">Mint Auth</span><span className="text-[11px]" style={{ marginTop: '-6px' }}>Disabled</span>
                          </div>
                          <div className="flex flex-col">
                            {item.audit2 == 1 ? <FaRegCircleCheck style={{ width: '14px', height: '14px', color: '#3ed6cc' }} /> : <ImCancelCircle style={{ width: '14px', height: '14px', color: '#ff4b92' }} />}
                            <span className="text-[11px] mt-1">Freeze Auth</span><span className="text-[11px]" style={{ marginTop: '-6px' }}>Disabled</span>
                          </div>
                          <div className="flex flex-col">
                            {item.audit3 == 1 ? <FaRegCircleCheck style={{ width: '14px', height: '14px', color: '#3ed6cc' }} /> : <ImCancelCircle style={{ width: '14px', height: '14px', color: '#ff4b92' }} />}
                            <span className="text-[11px] mt-1">Mint Auth</span><span className="text-[11px]" style={{ marginTop: '-6px' }}>Disabled</span>
                          </div>
                          <div className="flex flex-col">
                            {item.audit4 == 1 ? <FaRegCircleCheck style={{ width: '14px', height: '14px', color: '#3ed6cc' }} /> : <ImCancelCircle style={{ width: '14px', height: '14px', color: '#ff4b92' }} />}
                            <span className="text-[11px] mt-1">Top 10</span><span className="text-[11px]" style={{ marginTop: '-6px' }}>Holders</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap" style={{ width: '10%' }}>
                        <button className="py-3 mx-auto rounded-full px-7" style={{ backgroundColor: 'rgb(39,39,46)' }}>
                          <span className="text-[13px]">Quick Buy</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
