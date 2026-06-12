import React from 'react';
import { Link } from 'react-router-dom';
import Admission from '../../components/Admission';

const PrePrimary = () => {
  return (
    <div className="pt-5 pb-8 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">

        {/* Animated Header Section with Mixed Logo Colors */}
        <div className="text-center mb-11 pt-2">
          <div className="inline-block mb-8">
            <span className="bg-gradient-to-r from-accent to-[#ffeb3b] text-primary px-10 py-2 rounded-full font-black text-lg shadow-md uppercase tracking-widest border-b-4 border-orange-400/30 transition-transform hover:scale-105 inline-block">
              Our Domain
            </span>
          </div>

          <div className="bg-secondary py-5 px-8 rounded-2xl shadow-xl border-b-8 border-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>

            <h1 className="text-white text-2xl md:text-4xl font-black font-header m-0 uppercase italic drop-shadow-lg tracking-wider">
              Pre-Primary School Kilbil centre
            </h1>
          </div>
        </div>
        {/* Intro Text with Premium Styling */}
        <div className="relative bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-t-8 border-secondary mb-8 group hover:shadow-card transition-all duration-500 overflow-hidden text-center">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent/5 rounded-full"></div>
          <p className="relative text-xl md:text-2xl text-gray-700 leading-relaxed font-serif font-medium italic z-10">
            "The first few years of a child in a preschool determine their lifetime. Our nursery program is designed to provide the foundation of every child's future academic, social and emotional well-being."
          </p>
          <div className="mt-6 flex justify-center gap-1">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Fee Structure Section */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            <div className="text-center">
              <span className="bg-primary text-white px-8 py-2 rounded-xl font-bold text-lg inline-block shadow-lg skew-x-[-12deg]">
                <span className="inline-block skew-x-[12deg]">Fee Structure</span>
              </span>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-2">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-t-2xl">
                    <th className="py-5 px-4 first:rounded-tl-2xl">Class</th>
                    <th className="py-5 px-4 last:rounded-tr-2xl">Fees (Annual)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-sans">
                  <tr className="hover:bg-accent/5 transition-colors group">
                    <td className="py-6 font-bold text-[1.1rem] text-primary group-hover:text-secondary px-4">Nursery To SR KG</td>
                    <td className="py-6 font-black text-secondary text-2xl px-4">₹ 9,000/-</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors group">
                    <td className="py-6 font-bold text-[1.1rem] text-primary group-hover:text-secondary px-4">1<sup>st</sup> Std & 2<sup>nd</sup> Std</td>
                    <td className="py-6 font-black text-secondary text-2xl px-4">₹ 11,000/-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Required Documents Section */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-l-[10px] border-accent relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <svg viewBox="0 0 24 24" className="w-20 h-20 fill-primary"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-secondary text-white rounded-lg flex items-center justify-center shadow-lg">📄</span>
                Required Documents
              </h3>
              <ul className="space-y-4">
                {[
                  "Birth certificate (for age proof)",
                  "Aadhaar card Photocopy (Both)",
                  "2 Passport-size photographs",
                  <span>Transfer Certificate (TC) - (1<sup>st</sup> & 2<sup>nd</sup> Std)</span>,
                  "Previous school report card",
                  "General Vaccination Card"
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-gray-700 font-bold text-sm group cursor-default">
                    <span className="w-2 h-2 rounded-full bg-secondary group-hover:scale-150 group-hover:bg-accent transition-all"></span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Age Eligibility Section - Larger Table */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-secondary to-[#e63946] p-8 text-center text-white relative">
                <div className="absolute top-2 right-2 opacity-20 text-3xl">🗓️</div>
                <h3 className="text-2xl font-black m-0 uppercase tracking-tight font-title italic">Eligibility Criteria</h3>
                <p className="text-white/80 text-sm mt-2 font-bold tracking-widest">NURSERY TO 2<sup>nd</sup> STANDARD</p>
              </div>

              <div className="p-4 md:p-8">
                <div className="space-y-4">
                  {[
                    { class: "Nursery", criteria: <>Born between Oct 2022 to Dec 31<sup>st</sup> 2023</>, color: "from-accent/20" },
                    { class: "Jr. KG", criteria: <>Born between Oct 2021 to Dec 31<sup>st</sup> 2022</>, color: "from-primary/5" },
                    { class: "Sr. KG", criteria: <>Born between Oct 2020 to Dec 31<sup>st</sup> 2021</>, color: "from-secondary/5" },
                    { class: "1st STD", criteria: <>Born between Oct 2019 to Dec 31<sup>st</sup> 2020</>, color: "from-primary/5" },
                    { class: "2nd STD", criteria: <>Born between Oct 2018 to Dec 31<sup>st</sup> 2019</>, color: "from-secondary/5" }
                  ].map((item, index) => (
                    <div key={index} className={`flex flex-col md:flex-row md:items-center justify-between p-5 bg-gradient-to-r ${item.color} to-white rounded-2xl border-l-[6px] border-secondary border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group`}>
                      <h5 className="text-[1.2rem] font-black text-primary group-hover:text-secondary mb-1 md:mb-0">
                        {item.class === "1st STD" ? <>1<sup>st</sup> STD</> : item.class === "2nd STD" ? <>2<sup>nd</sup> STD</> : item.class}
                      </h5>
                      <p className="text-gray-600 font-bold text-sm tracking-tight">{item.criteria}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-primary to-primary-dark text-white text-center rounded-b-[2rem]">
                <p className="font-header italic font-medium m-0 text-white/90">
                  "Investing in early education is the best legacy you can leave for your child."
                </p>
              </div>
            </div>

            {/* Vibrant Call to Action */}
            <div className="mt-10 flex justify-center">
              <Admission />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default PrePrimary;
