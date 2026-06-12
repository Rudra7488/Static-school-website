import React from 'react';
import { Link } from 'react-router-dom';
import Admission from '../../components/Admission';

const JuniorCollege = () => {
  const subjects = [
    {
      stream: "Computer Science",
      list: ["English", "Physics", "Chemistry", "Maths", "Computer Science"],
      color: "bg-blue-50 border-blue-200",
      icon: "💻"
    },
    {
      stream: "General Science",
      list: ["English", "Marathi/Hindi", "Physics", "Chemistry", "Maths", "Biology"],
      color: "bg-green-50 border-green-200",
      icon: "🧪"
    },
    {
      stream: "Commerce",
      list: ["English", "Marathi/Hindi", "Book keeping & Accountancy", "Organization of commerce", "Secretarial Practices/Maths", "Economics"],
      color: "bg-orange-50 border-orange-200",
      icon: "📊"
    },
    {
      stream: "Arts",
      list: ["English", "Marathi/Hindi", "Political Science", "Co Operation", "Sociology", "Geography"],
      color: "bg-purple-50 border-purple-200",
      icon: "🎨"
    }
  ];

  const fees = [
    { class: <>11<sup>th</sup> & 12<sup>th</sup></>, stream: "Computer Science", amount: "20000/-" },
    { class: <>11<sup>th</sup> & 12<sup>th</sup></>, stream: "General Science", amount: "10000/-" },
    { class: <>11<sup>th</sup> & 12<sup>th</sup></>, stream: "Commerce", amount: "8000/-" },
    { class: <>11<sup>th</sup> & 12<sup>th</sup></>, stream: "Arts", amount: "5000/-" }
  ];

  const certificates = [
    { type: "Candidates not availing any reservation", docs: [<>Std. 10<sup>th</sup> or equivalent Marks Statement</>, "Last School Leaving Certificate"] },
    { type: "For candidates who want to avail reservation", docs: [<>Std. 10<sup>th</sup> or equivalent Marks Statement</>, "Last School Leaving Certificate", "Domicile Certificate/Maharashtra Resident Certificate", "Relevant Reservation Certificate"] },
    { type: "SC, ST category students", docs: ["Caste Certificate"] },
    { type: "VJ/NT, OBC-SBC, SEB students", docs: ["Caste Certificate + Non-Creamy Layer Certificate"] },
    { type: "EWS category students", docs: ["EWS eligibility certificate"] },
    { type: "Divyang Disabled category", docs: ["UDID Card/ Disability Certificate of Civil Surgeon"] },
    { type: "Project affected/ Earthquake affected", docs: ["Collector's certificate"] },
    { type: "Transferred Employees", docs: ["Parent's Transfer order and Joining report"] },
    { type: "Defence Servicemen / Ex-Servicemen", docs: ["Service Certificate or District Sainik Board Certificate"] },
    { type: "Freedom Fighters Children", docs: ["Collector's Certificate"] },
    { type: "Student Sports person", docs: ["Certificate issued by district sports officer"] },
    { type: "Orphan applicants", docs: ["Certificate by women and family welfare department"] }
  ];

  return (
    <div className="pt-5 pb-8 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Header Section */}
        <div className="text-center mb-11 pt-2">
          <div className="inline-block mb-8">
            <span className="bg-gradient-to-r from-accent to-[#ffeb3b] text-primary px-10 py-2 rounded-full font-black text-lg shadow-md uppercase tracking-widest border-b-4 border-orange-400/30 transition-transform hover:scale-105 inline-block">
              Our Domain
            </span>
          </div>

          <div className="bg-secondary py-5 px-8 rounded-2xl shadow-xl border-b-8 border-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>

            <h1 className="text-white text-2xl md:text-4xl font-black font-header m-0 uppercase italic drop-shadow-lg tracking-wider">
              Junior college
            </h1>
          </div>
        </div>

        {/* Intro Text */}
        <div className="relative bg-white p-8 rounded-[3rem] shadow-xl border-t-8 border-secondary mb-10 text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-header font-medium italic">
            "Our Higher secondary School builds on the solid early childhood and middle School foundation. A carefully nurtured tree can finally yield the best fruits when equipped a strong foundation. Higher school allows our pupil to grow into confident global citizens while pursuing their dreams through academic and co-curricular achievements. Vidya Bharati English School allows students to explore various choices to discover who they want to be."
          </p>
        </div>

        {/* Subjects Offered */}
        <div className="mb-12">
          <h2 className="text-2xl font-black text-primary text-center mb-8 uppercase tracking-widest border-b-4 border-accent inline-block pb-2">Subject Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subjects.map((s, idx) => (
              <div key={idx} className={`p-8 rounded-[2.5rem] border-2 ${s.color} shadow-lg hover:shadow-xl transition-all`}>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-black text-primary mb-6 border-b-2 border-primary/10 pb-2">{s.stream}</h3>
                <ul className="space-y-3">
                  {s.list.map((sub, i) => (
                    <li key={i} className="text-gray-600 font-bold text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <div className="mb-12">
          <h2 className="text-2xl font-black text-primary mb-6 uppercase tracking-widest border-l-8 border-secondary pl-6">Fee Structure</h2>
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
            <table className="w-full text-center border-collapse">
              <thead className="bg-primary text-white font-bold uppercase tracking-widest">
                <tr>
                  <th className="py-6 px-4">Class</th>
                  <th className="py-6 px-4">Stream</th>
                  <th className="py-6 px-4">Fees (Per Year)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-bold text-gray-700">
                {fees.map((f, idx) => (
                  <tr key={idx} className="hover:bg-accent/5 transition-colors">
                    <td className="py-6 px-4 text-[1.1rem]">{f.class}</td>
                    <td className="py-6 px-4 text-primary text-[1.1rem]">{f.stream}</td>
                    <td className="py-6 px-4 text-secondary font-black text-2xl">₹ {f.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Redesigned Admission Procedure Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-widest border-b-4 border-secondary inline-block pb-2">B. Ways to get admission (Class 11<sup>th</sup>)</h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            
            {/* Row 1: The Two Ways */}
            <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
              <div className="md:w-1/4 bg-primary p-8 flex items-center justify-center text-center">
                <h4 className="text-white font-black uppercase tracking-wider text-sm">02 Ways to get admission</h4>
              </div>
              <div className="md:w-3/4 p-8 bg-blue-50/30">
                <p className="text-gray-700 font-bold leading-relaxed">
                  There will be two ways for students to gain admission to junior colleges:
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl border-2 border-primary/10 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-black text-xs">1</span>
                    <span className="font-black text-primary">CAP Seats</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border-2 border-secondary/10 flex items-center gap-3">
                    <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xs">2</span>
                    <span className="font-black text-secondary">Quota Seats</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Important Note */}
            <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
              <div className="md:w-1/4 bg-secondary p-8 flex items-center justify-center text-center">
                <h4 className="text-white font-black uppercase tracking-wider text-sm">Important Note</h4>
              </div>
              <div className="md:w-3/4 p-8 bg-red-50/30 space-y-3">
                <p className="text-gray-700 font-bold leading-relaxed">
                  • For admission through any route, students are required to fill the <span className="text-secondary underline">online application form Part-1 and Part-2</span>.
                </p>
                <p className="text-gray-700 font-bold leading-relaxed">
                  • All admissions will be recorded on the online portal at that time.
                </p>
                <p className="text-gray-700 font-bold leading-relaxed">
                  • A student can apply for <span className="text-primary underline">both CAP Seats and Quota Seats</span>.
                </p>
              </div>
            </div>

            {/* Row 3: CAP Seats Detailed */}
            <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
              <div className="md:w-1/4 bg-primary p-8 flex flex-col items-center justify-center text-center gap-2">
                <h4 className="text-white font-black uppercase tracking-wider text-sm">CAP Seats</h4>
                <span className="bg-white/20 text-white text-[10px] py-1 px-3 rounded-full font-bold">Merit List by System</span>
              </div>
              <div className="md:w-3/4 p-8 space-y-4">
                <p className="text-gray-600 font-bold italic leading-relaxed border-l-4 border-primary pl-4">
                  "Allotment will be given to the schools selected in the CAP admission round according to the preference given by the students."
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✔</span> Students select schools in Part-2 of the form.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✔</span> Minimum 1 and maximum 10 schools can be selected.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✔</span> Selection is based on the order of preference.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✔</span> Students confirm admission by visiting the allotted school.
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 4: Quota Seats Detailed */}
            <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
              <div className="md:w-1/4 bg-secondary p-8 flex flex-col items-center justify-center text-center gap-2">
                <h4 className="text-white font-black uppercase tracking-wider text-sm">Quota Seats</h4>
                <span className="bg-white/20 text-white text-[10px] py-1 px-3 rounded-full font-bold">Merit List by Jr. College</span>
              </div>
              <div className="md:w-3/4 p-8 space-y-4">
                <p className="text-gray-600 font-bold italic leading-relaxed border-l-4 border-secondary pl-4">
                  "Students can be given Quota Choices for admission under Quota Seats."
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✔</span> Quota application list is visible online to the school.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✔</span> Schools prepare quota-wise merit and selection lists.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✔</span> Schools inform the students for admission confirmation.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✔</span> Qualified students confirm admission to the respective school.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Required Certificates */}
        <div className="mb-24">
          <h2 className="text-2xl font-black text-primary text-center mb-12 uppercase tracking-widest">Required Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((c, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-md border-l-8 border-primary hover:shadow-lg transition-all group">
                <h4 className="text-primary font-black text-lg mb-4 group-hover:text-secondary transition-colors">{c.type}</h4>
                <ul className="space-y-2">
                  {c.docs.map((doc, i) => (
                    <li key={i} className="text-gray-600 font-bold text-sm flex items-start gap-2 italic">
                      <span className="text-accent">✔</span> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Vibrant Call to Action - Enquiry Section */}
        <div className="max-w-4xl mx-auto flex justify-center">
            <Admission />
        </div>


      </div>
    </div>
  );
};

export default JuniorCollege;
