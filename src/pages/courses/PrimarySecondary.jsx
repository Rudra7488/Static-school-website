import React from 'react';
import { Link } from 'react-router-dom';
import Admission from '../../components/Admission';

const PrimarySecondary = () => {
  return (
    <div className="pt-5 pb-8 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Header Section - Matches Logo Mixed Colors */}
        <div className="text-center mb-10 pt-2">
          <div className="inline-block mb-8">
            <span className="bg-gradient-to-r from-accent to-[#ffeb3b] text-primary px-10 py-2 rounded-full font-black text-lg shadow-md uppercase tracking-widest border-b-4 border-orange-400/30 transition-transform hover:scale-105 inline-block">
              Our Domain
            </span>
          </div>
          
          <div className="bg-secondary py-5 px-8 rounded-2xl shadow-xl border-b-8 border-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
            
            <h1 className="text-white text-2xl md:text-4xl font-black font-header m-0 uppercase italic drop-shadow-lg tracking-wider">
              Primary & Secondary School
            </h1>
          </div>
        </div>

        {/* Intro Text Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-center">
          <div className="lg:col-span-12 space-y-5 bg-white p-8 md:p-10 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border-t-[12px] border-secondary relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
             
             <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-header font-medium italic text-center relative z-10 border-b pb-4 border-gray-100">
               "Academic and emotional development is our constant endeavors to direct each child to become a motivated lifelong learner by experiencing the joy of discovery and the ownership of results. Our curriculum has been structured to ensure that knowledge is important through a combination of resources and techniques."
             </p>
             
             <p className="text-lg text-gray-600 leading-relaxed font-medium text-center relative z-10">
               To contours of knowledge know no bounds <span className="text-primary font-bold">Vidya Bharti</span> endorses this belief and gives each student rigorous exposure to group activities, seminars, visual learning and project work. The aim is to promote and intensify performance and encourage students to be forerunners in all fields.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Fee Structure Column */}
          <div className="flex flex-col space-y-6">
            <div className="text-center">
               <span className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-2.5 rounded-2xl font-black text-xl shadow-xl inline-block cursor-default">
                 Fee Structure
               </span>
            </div>
            
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden h-full flex flex-col justify-center">
              <table className="w-full text-center">
                <thead>
                  <tr className="bg-secondary text-white font-bold">
                    <th className="py-6 px-4">Class Range</th>
                    <th className="py-6 px-4">Annual Fees</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 uppercase font-sans">
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="py-12 font-black text-primary text-[1.2rem] group-hover:text-secondary">3<sup>rd</sup> Std to 10<sup>th</sup></td>
                    <td className="py-12 font-black text-secondary text-3xl">₹ 11,000/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Required Documents Column */}
          <div className="flex flex-col space-y-6">
            <div className="text-center lg:opacity-0 lg:h-[52px]">
               {/* Invisible spacer on desktop to align the top of the cards */}
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 relative group overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-[0.03] -mr-10 -mt-10 rounded-full"></div>
               <h3 className="text-2xl font-black text-primary mb-8 flex items-center gap-4">
                 <span className="w-12 h-12 bg-accent text-primary rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">📂</span>
                 Required Documents
               </h3>
               
               <ul className="space-y-4">
                 {[
                   "Transfer Certificate (TC) / Birth Certificate",
                   "Previous school report card - Original",
                   "Aadhaar card Photocopy (Parents & Students)",
                   "2 Passport-size photographs of Student",
                   "General Vaccination Card with Child's Details"
                 ].map((doc, i) => (
                   <li key={i} className="flex items-center gap-4 text-gray-700 font-bold text-sm group/item cursor-default">
                     <span className="w-2.5 h-2.5 rounded-full bg-secondary group-hover/item:scale-150 group-hover/item:bg-accent transition-all shadow-md"></span>
                     {doc}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

        </div>

        {/* Vibrant Call to Action - Consistent with PrePrimary & JuniorCollege */}
        <div className="max-w-4xl mx-auto flex justify-center mb-10">
            <Admission />
        </div>

      </div>
    </div>
  );
};

export default PrimarySecondary;
