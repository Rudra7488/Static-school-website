import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-primary text-white text-sm py-2 hidden md:block">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <div className="flex gap-5">
          <a href="tel:+919011372155" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            +91 90113 72155
          </a>
          <a href="mailto:principal@vidyabharatischool.education" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            principal@vidyabharatischool.education
          </a>
        </div>
        <div>
          <span className="bg-secondary px-2.5 py-0.5 rounded font-bold text-xs uppercase tracking-wider">
            Affiliated to CBSE, Mumbai
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
