import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm font-sans flex flex-col relative z-50">
      {/* Header Info Section - Tall & Premium */}
      <div className="max-w-[1400px] mx-auto w-full px-4 py-4 md:py-8 flex flex-col items-center justify-between gap-6">
        
        {/* Mobile Header Row (Logo + Toggle) */}
        <div className="flex items-center justify-between w-full lg:hidden">
          <div className="shrink-0 flex items-center justify-center border-2 border-primary/20 p-1.5 rounded-lg bg-gray-50 shadow-inner w-[90px] h-[90px]">
            <img 
              src="/Logo.png" 
              alt="School Logo" 
              className="w-[75px] h-[75px] object-contain mix-blend-multiply" 
            />
          </div>
          
          <div className="flex flex-col items-end gap-1">
             <button 
                className="flex flex-col justify-center items-center gap-[5px] focus:outline-none w-12 h-12 border-2 border-primary/20 rounded-xl bg-white shadow-sm"
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <div className="relative w-6 h-6">
                    <span className="absolute top-1/2 left-0 w-6 h-[3px] bg-primary rotate-45 rounded-full"></span>
                    <span className="absolute top-1/2 left-0 w-6 h-[3px] bg-primary -rotate-45 rounded-full"></span>
                  </div>
                ) : (
                  <>
                    <span className="w-7 h-[3px] bg-primary block rounded-full"></span>
                    <span className="w-7 h-[3px] bg-primary block rounded-full"></span>
                    <span className="w-7 h-[3px] bg-primary block rounded-full"></span>
                  </>
                )}
              </button>
              <span className="font-bold text-primary text-[10px] tracking-[0.2em] uppercase">MENU</span>
          </div>
        </div>

        {/* Desktop Header Layout */}
        <div className="hidden lg:flex w-full items-start justify-between gap-8">
          {/* Left Logo */}
          <div className="shrink-0 flex items-center justify-center border-2 border-primary/20 p-2 rounded-lg bg-gray-50 shadow-inner w-[140px] h-[140px]">
            <img 
              src="/Logo.png" 
              alt="School Logo" 
              className="w-[120px] h-[120px] object-contain mix-blend-multiply" 
            />
          </div>

          {/* Center Content - BIG & BOLD */}
          <div className="flex-1 text-center flex flex-col items-center justify-center gap-1.5">
            <p className="text-secondary font-black text-[1.2rem] uppercase tracking-[0.1em]">
              VIDYA BHARATI Shaikshanik Mandal Amravati's
            </p>
            <h1 className="text-[2.6rem] xl:text-[3.2rem] font-bold text-primary leading-tight font-header drop-shadow-sm">
              VIDYA BHARATI ENGLISH SCHOOL & <br /> JR. COLLEGE, AMRAVATI
            </h1>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-1 mt-4 text-gray-500 text-[0.95rem] font-bold">
              <p><span className="text-primary">U-Dise No.</span> 27071502111</p>
              <p><span className="text-secondary">Board Index No.</span> 02.01.165 (Sch)</p>
              <p><span className="text-secondary">Board Index No.</span> 02.01.094 (Jr)</p>
            </div>
          </div>

          {/* Right Side Photos */}
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center text-center max-w-[160px]">
              <div className="running-border-box w-[130px] h-[130px] flex items-center justify-center">
                <img src="/Devsingh.jpeg" alt="Founder" className="w-[110px] h-[110px] object-cover object-top rounded relative z-10" />
              </div>
              <p className="mt-2 text-[12px] font-bold text-gray-800 leading-tight">Late Dr. Devisingh Shekhawat Saheb</p>
              <p className="text-[11px] text-gray-600 font-medium">Founder President</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[160px]">
              <div className="running-border-box w-[130px] h-[130px] flex items-center justify-center">
                <img src="/raosaheb.jpeg" alt="President" className="w-[110px] h-[110px] object-cover object-top rounded relative z-10" />
              </div>
              <p className="mt-2 text-[12px] font-bold text-gray-800 leading-tight">Mr. Raosaheb Shekhawat</p>
              <p className="text-[11px] text-gray-600 font-medium">President</p>
            </div>
          </div>
        </div>

        {/* Mobile Branding (Stacked) */}
        <div className="lg:hidden flex flex-col items-center text-center gap-1.5 w-full mt-2">
          <p className="text-secondary font-black text-[0.85rem] uppercase tracking-wider">
            VIDYA BHARATI Shaikshanik Mandal Amravati's
          </p>
         <h1 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-primary leading-[1.1] font-header px-2 uppercase">
  VIDYA BHARATI ENGLISH SCHOOL & <br /> JR. COLLEGE, AMRAVATI
</h1>
          
          {/* Photos for Mobile */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex flex-col items-center text-center max-w-[120px]">
              <div className="running-border-box w-[90px] h-[90px] flex items-center justify-center">
                <img src="/Devsingh.jpeg" alt="Founder" className="w-[75px] h-[75px] object-cover object-top rounded relative z-10" />
              </div>
              <p className="mt-1.5 text-[9px] font-bold text-gray-800 leading-tight">Late Dr. Devisingh Shekhawat</p>
              <p className="text-[8px] text-gray-600 font-bold uppercase tracking-tighter">Founder President</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[120px]">
              <div className="running-border-box w-[90px] h-[90px] flex items-center justify-center">
                <img src="/raosaheb.jpeg" alt="President" className="w-[75px] h-[75px] object-cover object-top rounded relative z-10" />
              </div>
              <p className="mt-1.5 text-[9px] font-bold text-gray-800 leading-tight">Mr. Raosaheb Shekhawat</p>
              <p className="text-[8px] text-gray-600 font-bold uppercase tracking-tighter">President</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 mt-4 text-gray-500 text-[12px] font-bold">
            <p className="bg-gray-100 px-3 py-1 rounded-full"><span className="text-primary">U-Dise:</span> 27071502111</p>
            <div className="flex gap-4 mt-1">
              <p><span className="text-secondary">Sch:</span> 02.01.165</p>
              <p><span className="text-secondary">Jr:</span> 02.01.094</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bar */}
      <div className="text-center bg-gray-50 py-2 text-[11px] md:text-[13px] text-gray-400 border-t border-b border-gray-100 tracking-[0.3em] font-black uppercase px-4">
        ESTABLISHED IN 2011 | DEDICATED TO EDUCATIONAL EXCELLENCE
      </div>

      {/* Navigation (Desktop) */}
      <nav className="hidden lg:block bg-[#a8d5e5] border-b border-gray-300 w-full sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 flex justify-center items-center h-[60px]">
          <ul className="flex items-center justify-center gap-8 xl:gap-12 w-full text-[15px] font-black text-gray-700 tracking-wider">
            <li className="hover:text-primary transition-colors cursor-pointer"><Link to="/">HOME</Link></li>
            <DesktopNavItem title="About Us" links={[
              { to: "/about/history", label: "SCHOOL HISTORY" },
              { to: "/about/mission", label: "MISSION & VISION" },
              { to: "/about/principal", label: "PRINCIPAL'S MESSAGE" }
            ]} />
            <DesktopNavItem title="Courses" links={[
              { to: "/courses/pre-primary", label: "PRE-PRIMARY" },
              { to: "/courses/primary-secondary", label: "PRIMARY & MIDDLE" },
              { to: "/courses/junior-college", label: "Jr. COLLEGE LEVEL" }
            ]} />
            <DesktopNavItem title="Faculty" links={[
              { to: "/faculty/school-staff", label: "SCHOOL STAFF" },
              { to: "/faculty/admin-staff", label: "ADMINISTRATION STAFF" }
            ]} />
            <DesktopNavItem title="Facilities" links={[
              { to: "/facilities/lab", label: "LABORATORIES" },
              { to: "/facilities/classroom", label: "CLASSROOMS" },
              { to: "/facilities/academic-block", label: "ACADEMIC BLOCK" },
              { to: "/facilities/sports", label: "SPORTS GROUND" },
              { to: "/facilities/digital", label: "DIGITAL CLASS" },
              { to: "/facilities/transport", label: "BUS / TRANSPORT" },
              { to: "/facilities/library", label: "LIBRARY" }
            ]} />
            <DesktopNavItem title="Gallery" links={[
              { to: "/gallery/campus", label: "CAMPUS TOUR" },
              { to: "/gallery/annual", label: "ANNUAL FUNCTIONS" },
              { to: "/gallery/sports", label: "SPORTS MEET" }
            ]} />
            <li className="hover:text-primary transition-colors cursor-pointer"><Link to="/achievements">ACHIEVEMENTS</Link></li>
            <li className="hover:text-primary transition-colors cursor-pointer"><Link to="/contact">CONTACT US</Link></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black/60 z-[1000] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={`absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#a8d5e5]">
            <span className="font-black text-primary tracking-widest">NAVIGATION</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm text-primary font-bold">✕</button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-8 py-4 border-b border-gray-50 text-[18px] font-black text-gray-800 hover:bg-gray-50">HOME</Link>
            <MobileAccordion title="About Us" links={[
              { to: "/about/history", label: "SCHOOL HISTORY" },
              { to: "/about/mission", label: "MISSION & VISION" },
              { to: "/about/principal", label: "PRINCIPAL'S MESSAGE" }
            ]} onClose={() => setIsMobileMenuOpen(false)} />
            <MobileAccordion title="Courses" links={[
              { to: "/courses/pre-primary", label: "PRE-PRIMARY" },
              { to: "/courses/primary-secondary", label: "PRIMARY & MIDDLE" },
              { to: "/courses/junior-college", label: "SR. COLLEGE LEVEL" }
            ]} onClose={() => setIsMobileMenuOpen(false)} />
            <MobileAccordion title="Faculty" links={[
              { to: "/faculty/school-staff", label: "SCHOOL STAFF" },
              { to: "/faculty/admin-staff", label: "ADMINISTRATION STAFF" }
            ]} onClose={() => setIsMobileMenuOpen(false)} />
            <MobileAccordion title="Facilities" links={[
              { to: "/facilities/lab", label: "LABORATORIES" },
              { to: "/facilities/classroom", label: "CLASSROOMS" },
              { to: "/facilities/academic-block", label: "ACADEMIC BLOCK" },
              { to: "/facilities/sports", label: "SPORTS GROUND" },
              { to: "/facilities/digital", label: "DIGITAL CLASS" },
              { to: "/facilities/transport", label: "BUS / TRANSPORT" },
              { to: "/facilities/library", label: "LIBRARY" }
            ]} onClose={() => setIsMobileMenuOpen(false)} />
            <MobileAccordion title="Gallery" links={[
              { to: "/gallery/campus", label: "CAMPUS TOUR" },
              { to: "/gallery/annual", label: "ANNUAL FUNCTIONS" },
              { to: "/gallery/sports", label: "SPORTS MEET" }
            ]} onClose={() => setIsMobileMenuOpen(false)} />
            <Link to="/achievements" onClick={() => setIsMobileMenuOpen(false)} className="block px-8 py-4 border-b border-gray-50 text-[18px] font-black text-gray-800 uppercase">ACHIEVEMENTS</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-8 py-4 text-[18px] font-black text-gray-800 uppercase">CONTACT US</Link>
          </div>
          
          <div className="p-8 bg-gray-50 text-center">
            <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em]">ESTD. 2011</p>
          </div>
        </div>
      </div>
    </header>
  );
};

// Helpers
const DesktopNavItem = ({ title, links }) => (
  <li className="relative group flex items-center h-full hover:text-primary transition-colors cursor-pointer">
    <span className="flex items-center gap-1.5 uppercase">{title} <span className="text-[9px] translate-y-[1px]">▼</span></span>
    <ul className="absolute top-[60px] left-0 w-[250px] bg-white border-t-4 border-primary shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link to={link.to} className="block px-6 py-4 hover:bg-gray-50 text-gray-700 hover:text-primary font-bold border-b border-gray-100 transition-all text-[13px]">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

const MobileAccordion = ({ title, links, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-50">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-8 py-4 flex justify-between items-center text-[18px] font-black text-gray-800 hover:bg-gray-50 uppercase">
        <span>{title}</span>
        <span className={`text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] py-2' : 'max-h-0'}`}>
        {links.map((link, idx) => (
          <Link key={idx} to={link.to} onClick={onClose} className="block px-12 py-3.5 text-base font-bold text-gray-600 hover:text-primary">{link.label}</Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
