import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import NewsTicker from './components/NewsTicker';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';

// Main Pages
import Home from './pages/Home';
import SportsGallery from './pages/gallery/SportsGallery';
import AnnualGallery from './pages/gallery/AnnualGallery';
import CampusGallery from './pages/gallery/CampusGallery';
import PrePrimary from './pages/courses/PrePrimary';
import PrimarySecondary from './pages/courses/PrimarySecondary';
import JuniorCollege from './pages/courses/JuniorCollege';
import Achievements from './pages/Achievements';
import AdmissionForm from './pages/AdmissionForm';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import GuidelinesPage from './pages/GuidelinesPage';
// import FacilitiesPage from './pages/FacilitiesPage';
import HolidayCalendar from './pages/HolidayCalendar';

// About Us Pages
import History from './pages/about-us/History';
import MissionVision from './pages/about-us/MissionVision';
import PrincipalMessage from './pages/about-us/PrincipalMessage';

// Faculty Pages
import SchoolStaff from './pages/faculty/SchoolStaff';
import AdminStaff from './pages/faculty/AdminStaff';

// Facility Sub-Pages
import Laboratories from './pages/facilities/Laboratories';
import Classrooms from './pages/facilities/Classrooms';
import AcademicBlock from './pages/facilities/AcademicBlock';
import SportsGround from './pages/facilities/SportsGround';
import DigitalClass from './pages/facilities/DigitalClass';
import Transport from './pages/facilities/Transport';
import Library from './pages/facilities/Library';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-sans text-gray-800 bg-[#fafafa]">

        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <NewsTicker />

        <main id="main-content">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/gallery/sports" element={<SportsGallery />} />
            <Route path="/gallery/annual" element={<AnnualGallery />} />
            <Route path="/gallery/campus" element={<CampusGallery />} />
            <Route path="/courses/pre-primary" element={<PrePrimary />} />
            <Route path="/courses/primary-secondary" element={<PrimarySecondary />} />
            <Route path="/courses/junior-college" element={<JuniorCollege />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/admission-form" element={<AdmissionForm />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/guidelines" element={<GuidelinesPage />} />
            {/* <Route path="/facilities" element={<FacilitiesPage />} /> */}
            <Route path="/calendar" element={<HolidayCalendar />} />

            {/* About Us Routes */}
            <Route path="/about/history" element={<History />} />
            <Route path="/about/mission" element={<MissionVision />} />
            <Route path="/about/principal" element={<PrincipalMessage />} />

            {/* Faculty Routes */}
            <Route path="/faculty/school-staff" element={<SchoolStaff />} />
                     <Route path="/faculty/admin-staff" element={<AdminStaff />} />
            {/* Facility Sub-Pages */}
            <Route path="/facilities/lab" element={<Laboratories />} />
            <Route path="/facilities/classroom" element={<Classrooms />} />
            <Route path="/facilities/academic-block" element={<AcademicBlock />} />
            <Route path="/facilities/sports" element={<SportsGround />} />
            <Route path="/facilities/digital" element={<DigitalClass />} />
            <Route path="/facilities/transport" element={<Transport />} />
            <Route path="/facilities/library" element={<Library />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
