import React from 'react';

const GuidelinesPage = () => {
  return (
    <div className="pt-20 pb-8 min-h-screen bg-[#fff5f7]">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="bg-secondary text-white px-12 py-3 rounded-full font-black text-2xl uppercase tracking-widest shadow-lg">
              General Guidelines
            </span>
          </div>
          <p className="mt-4 text-gray-500 font-bold tracking-widest uppercase text-xs italic">Vidya Bharati English School & Jr. College</p>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          
          {/* General Guidelines List */}
          <div className="relative">
            <div className="space-y-8 text-gray-800 font-bold leading-relaxed text-lg">
              <ol className="space-y-6">
                <li className="flex gap-6 items-start">
                  <span className="text-secondary font-black text-xl min-w-[25px]">1.</span>
                  <p>Admission shall be granted in an age-appropriate way purely on the basis of availability of seats. The school reserves the right to grant admission to the deserving students.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-secondary font-black text-xl min-w-[25px]">2.</span>
                  <p>Age criteria for admission to various grades shall be as prescribed by the State Education Department.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-secondary font-black text-xl min-w-[25px]">3.</span>
                  <p>For mid-term admissions, fees for the entire academic year needs to be paid.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-secondary font-black text-xl min-w-[25px]">4.</span>
                  <p>Admission for all other classes i.e. from Grade II onwards shall be treated as provisional admission until the Submission of receipt of original Leaving Certificate/ Transfer Certificate from the previous school attended.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-secondary font-black text-xl min-w-[25px]">5.</span>
                  <p>Students transferring from another state must submit the school leaving certificate countersigned by the Education Officer of that state.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-secondary font-black text-xl min-w-[25px]">6.</span>
                  <p>School fee(s) once paid shall be non-refundable and non-transferable.</p>
                </li>
              </ol>

              <div className="mt-12 py-6 border-y-2 border-secondary/10 text-center">
                <h3 className="text-primary font-black uppercase text-sm tracking-widest mb-3">ASSESSMENTS AND PROMOTION</h3>
                <p className="text-gray-700">
                  Assessments and promotions shall be according to the <span className="text-secondary font-black">STATE BOARD</span> norms.
                  More emphasis shall be given to Competency Based Assessments.
                </p>
              </div>
            </div>
          </div>

          {/* Withdrawal Section */}
            <div className="text-center pt-4">
            <div className="inline-block mb-6">
              <span className="bg-secondary text-white px-12 py-3 rounded-full font-black text-2xl uppercase tracking-widest shadow-lg">
                Withdrawal
              </span>
            </div>
            
            <ul className="space-y-3 text-gray-800 font-bold leading-relaxed text-lg text-left max-w-3xl mx-auto">
              {[
                "Parents need to submit a written application in this regard to the school authorities at least one month in advance.",
                "For the withdrawal of a student from school during an academic year, parents need to pay the fee for that ongoing quarter/ term.",
                "Fees once paid shall be non-adjustable and non-refundable.",
                "A leaving certificate will be issued only after the school dues (fees/ library) are cleared.",
                "Tuition fee needs to be paid even if the child remains absent in the term.",
                "TC will be issued after seven working days of making a request."
              ].map((item, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <span className="text-secondary text-2xl leading-none mt-1 shrink-0">◆</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Decorative Caps (Optional, mimicking image footer) */}
        <div className="mt-24 flex justify-center gap-12 opacity-10">
          <span className="text-4xl">🎓</span>
          <span className="text-4xl">🎓</span>
          <span className="text-4xl">🎓</span>
          <span className="text-4xl">🎓</span>
        </div>

        {/* Note Footer */}
        <div className="mt-12 text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
          Official Guidelines Document • Amravati
        </div>
      </div>
    </div>
  );
};

export default GuidelinesPage;
