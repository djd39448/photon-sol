import { useState, useRef, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button 
        className="flex items-center px-3 py-2 mr-4 space-x-2 text-white rounded-full hover:bg-gray-700 focus:outline-none"
        style={{ border: '1px solid #333' }}
        onClick={handleToggle}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          style={{ color: '#b5b7da' }}
        >
          <path d="M14.2 5.05333H10.48C10.22 5.05333 10.0133 4.84666 10.0133 4.58666C10.0133 4.32666 10.22 4.12 10.48 4.12H14.2C14.46 4.12 14.6666 4.32666 14.6666 4.58666C14.6666 4.84666 14.46 5.05333 14.2 5.05333Z" fill="currentColor"/>
          <path d="M4.27998 5.05333H1.79998C1.53998 5.05333 1.33331 4.84666 1.33331 4.58666C1.33331 4.32666 1.53998 4.12 1.79998 4.12H4.27998C4.53998 4.12 4.74665 4.32666 4.74665 4.58666C4.74665 4.84666 4.53331 5.05333 4.27998 5.05333Z" fill="currentColor"/>
          <path d="M6.75998 7.22004C8.21433 7.22004 9.39331 6.04105 9.39331 4.5867C9.39331 3.13235 8.21433 1.95337 6.75998 1.95337C5.30563 1.95337 4.12665 3.13235 4.12665 4.5867C4.12665 6.04105 5.30563 7.22004 6.75998 7.22004Z" fill="currentColor"/>
          <path d="M14.2 11.8733H11.72C11.46 11.8733 11.2534 11.6666 11.2534 11.4066C11.2534 11.1466 11.46 10.9399 11.72 10.9399H14.2C14.46 10.9399 14.6667 11.1466 14.6667 11.4066C14.6667 11.6666 14.46 11.8733 14.2 11.8733Z" fill="currentColor"/>
          <path d="M5.51998 11.8733H1.79998C1.53998 11.8733 1.33331 11.6666 1.33331 11.4066C1.33331 11.1466 1.53998 10.9399 1.79998 10.9399H5.51998C5.77998 10.9399 5.98665 11.1466 5.98665 11.4066C5.98665 11.6666 5.77331 11.8733 5.51998 11.8733Z" fill="currentColor"/>
          <path d="M9.24002 14.0467C10.6944 14.0467 11.8734 12.8677 11.8734 11.4134C11.8734 9.95901 10.6944 8.78003 9.24002 8.78003C7.78567 8.78003 6.60669 9.95901 6.60669 11.4134C6.60669 12.8677 7.78567 14.0467 9.24002 14.0467Z" fill="currentColor"/>
        </svg>
        <span className="text-[white] text-[13px]">Filter</span>
        <BiChevronDown className="text-gray-50" />
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-60 bg-[#171821] rounded-lg shadow-lg z-10" style={{border: "1px solid #333"}}>
          <div className="px-6 py-6">
            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2 text-gray-300">
                <input 
                  type="checkbox" 
                  className="rounded-sm border-gray-600 text-[#6C61EB] checked:bg-[#6C61EB] focus:ring-0 focus:ring-offset-0" 
                />
                <b className='text-[14px]'>With remaining tokens</b>
              </label>
            </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
