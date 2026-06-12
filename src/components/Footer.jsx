import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube,FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-primary text-gray-400 overflow-hidden">

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-1.5 flex">
        <div className="flex-1 bg-primary"></div>
        <div className="flex-1 bg-secondary shadow-[0_0_20px_rgba(200,32,47,0.5)]"></div>
        <div className="flex-1 bg-accent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-5 pt-12 pb-6">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-white text-2xl font-black font-serif italic border-l-4 border-accent pl-4">
                Vidya Bharati
              </h3>
              <p className="text-accent font-bold uppercase text-[10px] tracking-[0.3em] pl-5 underline decoration-secondary">
                English School & Jr. College
              </p>
            </div>

            <p className="text-sm font-medium leading-relaxed italic opacity-80">
              "Providing a world-class foundation rooted in traditional values since 2011."
            </p>

            {/* 🔥 Social Icons */}
            <div className="flex gap-4 pt-2">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vidyabhartienglishschool?utm_source=qr&igsh=MnhsdmprMDl6dnhv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 hover:bg-pink-500 transition-all duration-300"
              >
                <FaInstagram className="text-lg text-white" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@vidyabhartiprimaryenglishschoo?si=Kiw3vBQxutqRW_dC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 hover:bg-red-600 transition-all duration-300"
              >
                <FaYoutube className="text-lg text-white" />
              </a>

               {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1JMnMDkLW1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 hover:bg-blue-600 transition-all duration-300"
              >
                <FaFacebook className="text-lg text-white" />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase text-sm tracking-[0.2em] relative inline-block">
              Quick Navigation
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary rounded-full"></div>
            </h4>
            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest">
              <li><Link to="/about/history" className="hover:text-accent">About</Link></li>
              <li><Link to="/calendar" className="hover:text-accent">Calendar</Link></li>
              <li><Link to="/achievements" className="hover:text-accent">Achievements</Link></li>

            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase text-sm tracking-[0.2em] relative inline-block">
              Resources
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></div>
            </h4>
            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest">

              <li><Link to="/guidelines" className="hover:text-accent">Guidelines</Link></li>
            </ul>
          </div>

          {/* Office */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase text-sm tracking-[0.2em] relative inline-block">
              Office Hours
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary rounded-full"></div>
            </h4>

            <div className="space-y-4 text-sm font-medium">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Summer:</span>
                <span className="text-accent font-bold">7:30 AM - 1:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Winter:</span>
                <span className="text-accent font-bold">8:30 AM - 2:30 PM</span>
              </div>
              <p className="text-[10px] uppercase font-black text-white/40 italic">
                Sunday Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

          <p className="text-[11px] uppercase font-black tracking-widest">
            © 2026 All Rights Reserved Vidya Bharati Public School
          </p>

          <p className="text-[11px] font-bold text-accent">
            Developed by Softtronix Solutions Pvt Ltd
          </p>

          <Link to="/admin" className="text-[11px] font-black text-accent hover:text-white">
            Admin Login
          </Link>

        </div>

      </div>
    </footer>
  );
};

export default Footer;