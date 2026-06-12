import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HolidayCalendar = () => {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await axios.get('https://admin.vidyabharatischool.education/api/holiday');
        if (response.data.success) {
          setHolidays(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching holidays:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHolidays();
  }, []);

  const academicPlans = [
    { month: "June", plan: "Admission/Registration process. School reopening ceremony, orientation, baseline assessments, syllabus introduction." },
    { month: "July-August", plan: "Core subject teaching, Parents meeting, First Unit test, co-curricular clubs start, Independence Day Celebration." },
    { month: "September", plan: "Remedial classes, Janmashtami, Ganesh Chaturthi Celebration and activities." },
    { month: "October", plan: "Field trips, project-based learning, First term exams" },
    { month: "November-December", plan: "Diwali break, Cultural / Historical Tour, Revision cycles, annual sports meet." },
    { month: "January", plan: <>Second Unit Test, Science exhibitions, cultural week, Republic Day celebrations. Preparation/Conduction of board Practical Examinations of 10<sup>th</sup> and 12<sup>th</sup> Std.</> },
    { month: "February", plan: <>Pre-final exams, Board Practical and theory Exam (for 10<sup>th</sup> and 12<sup>th</sup> Std.)</> },
    { month: "March-April", plan: "Final exams, result declaration, parent-teacher meetings, bridge courses" }
  ];

  const pedagogicalGoals = [
    "Skill Development: Critical thinking, communication, collaboration.",
    "Integration: Local culture, environmental awareness, and digital literacy.",
    "Assessment: Continuous and comprehensive evaluation (CCE) with formative and summative tests."
  ];

  const coCurricular = [
    "Monthly Themes: Environment, health, heritage, science, literature.",
    "Competitions: Debate, essay writing, art, music, sports tournaments.",
    "Community Engagement: Cleanliness drives, tree plantation, charity events."
  ];

  const teacherDev = [
    "Monthly training workshops.",
    "Peer observation and feedback sessions. Curriculum review meetings."
  ];

  // Get unique years from holidays for the heading
  const currentSessionYear = holidays.length > 0 ? holidays[0].year : "2026-2027";

  return (
    <div className="pt-20 pb-8 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="bg-primary py-4 px-10 rounded-full shadow-2xl border-b-8 border-secondary relative overflow-hidden inline-block mb-6">
             <h1 className="text-white text-2xl md:text-4xl font-black font-serif m-0 italic tracking-wider">
               Academic Monthly Calendar & Holidays
             </h1>
          </div>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Academic Calendar Section */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-widest border-b-4 border-accent inline-block pb-2 italic">Monthly Academic Plan</h2>
          </div>
          <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                  <th className="py-8 px-6 text-xl font-black font-serif italic border-r border-white/20 w-1/4 text-center">Month</th>
                  <th className="py-8 px-6 text-xl font-black font-serif italic text-center">Plan Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-100">
                {academicPlans.map((item, idx) => (
                  <tr key={idx} className="hover:bg-pink-50/30 transition-colors">
                    <td className="py-8 px-6 text-center font-black text-primary border-r border-pink-100 bg-pink-50/20">
                      {item.month}
                    </td>
                    <td className="py-8 px-8 text-gray-700 font-bold leading-relaxed italic">
                      {item.plan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
         {/* Academic Goals Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Pedagogical Goals */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-t-8 border-primary group hover:-translate-y-2 transition-all duration-500">
             <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl mb-6">📚</div>
             <h3 className="text-2xl font-black text-primary mb-6 italic">1. Pedagogical Goals</h3>
             <ul className="space-y-4">
                {pedagogicalGoals.map((goal, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 font-bold text-sm leading-relaxed">
                    <span className="text-secondary">★</span> {goal}
                  </li>
                ))}
             </ul>
          </div>

          {/* Co-Curricular */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-t-8 border-secondary group hover:-translate-y-2 transition-all duration-500">
             <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-2xl mb-6">🏆</div>
             <h3 className="text-2xl font-black text-secondary mb-6 italic">2. Co-Curricular Activities</h3>
             <ul className="space-y-4">
                {coCurricular.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 font-bold text-sm leading-relaxed">
                    <span className="text-primary">★</span> {item}
                  </li>
                ))}
             </ul>
          </div>

          {/* Teacher Development */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-t-8 border-accent group hover:-translate-y-2 transition-all duration-500">
             <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-2xl mb-6">👩‍🏫</div>
             <h3 className="text-2xl font-black text-accent-dark mb-6 italic">3. Teacher Development</h3>
             <ul className="space-y-4">
                {teacherDev.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 font-bold text-sm leading-relaxed">
                    <span className="text-secondary">★</span> {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>

        {/* Holiday List Section */}
        <div className="mt-5">
          <div className="text-center mb-1">
            <h2 className="text-2xl md:text-3xl font-black text-secondary uppercase tracking-widest border-b-4 border-primary inline-block pb-2 italic">Holiday {currentSessionYear}</h2>
          </div>
          <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-6 px-4 font-black border-r border-white/10 w-16 text-center">No.</th>
                  <th className="py-6 px-6 font-black border-r border-white/10 text-left">Holiday Name</th>
                  <th className="py-6 px-6 font-black border-r border-white/10 text-center">Day</th>
                  <th className="py-6 px-6 font-black text-center">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {holidays.length > 0 ? (
                  holidays.map((h, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                      <td className="py-5 px-4 text-center font-bold text-gray-400 border-r border-gray-100">{idx + 1}</td>
                      <td className="py-5 px-6 font-black text-primary border-r border-gray-100 group-hover:text-secondary transition-colors">{h.name}</td>
                      <td className="py-5 px-6 text-center font-bold text-gray-600 border-r border-gray-100 italic">{h.day}</td>
                      <td className="py-5 px-6 text-center font-black text-secondary">{h.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-20 text-center text-gray-400 font-bold uppercase tracking-widest italic">
                      {loading ? 'Loading holidays...' : 'No holidays scheduled yet.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

       

      </div>
    </div>
  );
};

export default HolidayCalendar;
