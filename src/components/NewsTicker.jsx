import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Admission from './Admission';

const NewsTicker = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get('https://admin.vidyabharatischool.education/api/notice/updates');
        if (response.data.success) {
          setUpdates(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching ticker updates:', error);
      }
    };
    fetchUpdates();
  }, []);

  return (
    <div className="bg-[#FFFBEB] border-b border-[#FCD34D] py-2 text-[0.85rem] md:text-[0.95rem] overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="bg-secondary text-white px-3 py-1 font-black mr-3 md:mr-4 rounded-sm whitespace-nowrap z-10 shadow-sm text-[10px] md:text-xs uppercase">
          Updates
        </div>
        
        <div className="flex-1 overflow-hidden relative">
          <marquee behavior="scroll" direction="left" onMouseOver={(e) => e.currentTarget.stop()} onMouseOut={(e) => e.currentTarget.start()} className="block w-full pt-1">
            {updates.length > 0 ? (
              updates.map((update, index) => (
                <div key={index} className="flex items-center mx-4 group shrink-0 inline-block">
                  <span className={`mr-3 text-lg ${update.isHot ? 'animate-pulse' : 'text-red-500 animate-pulse'}`}>
                    {update.isHot ? '⭐' : '●'}
                  </span>
                  {update.link ? (
                    <a href={update.link} target="_blank" rel="noopener noreferrer" className="text-gray-700 font-bold text-sm tracking-wide group-hover:text-primary transition-colors cursor-pointer hover:underline">
                      {update.title}
                    </a>
                  ) : (
                    <span className="text-gray-700 font-bold text-sm tracking-wide group-hover:text-primary transition-colors cursor-default">
                      {update.title}
                    </span>
                  )}
                  {index < updates.length - 1 && <span className="mx-8 text-gray-300 font-bold">||</span>}
                </div>
              ))
            ) : (
              <Admission variant="ticker" />
            )}
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
