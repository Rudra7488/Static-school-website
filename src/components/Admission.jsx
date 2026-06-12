import React from 'react';
import { Link } from 'react-router-dom';

const Admission = ({ variant = 'default' }) => {

  if (variant === 'ticker') {
    return (
      <Link 
        to="/admission-form" 
        className="inline-flex items-center gap-2 font-black text-secondary uppercase tracking-widest text-sm animate-text-glow"
      >
        ADMISSION NOWW ✨

        <style jsx>{`
          @keyframes text-glow {
            0%, 100% {
              opacity: 1;
              text-shadow: 0 0 5px rgba(200,32,47,0.5),
                           0 0 10px rgba(200,32,47,0.4);
            }
            50% {
              opacity: 0.7;
              text-shadow: 0 0 15px rgba(200,32,47,0.9),
                           0 0 25px rgba(200,32,47,0.7);
            }
          }

          .animate-text-glow {
            animation: text-glow 1.2s ease-in-out infinite;
          }
        `}</style>
      </Link>
    );
  }

  const buttonClasses = `
    group relative inline-flex items-center justify-center px-10 py-4 
    bg-secondary text-white font-black text-lg rounded-full 
    overflow-hidden transition-all duration-300 
    shadow-[0_12px_35px_rgba(200,32,47,0.4)] 
    hover:shadow-[0_20px_60px_rgba(200,32,47,0.7)] 
    active:scale-95 animate-button-pulse
  `;

  return (
    <Link to="/admission-form" className={buttonClasses}>
      
      {/* Text */}
      <span className="relative z-10 flex items-center gap-4 tracking-widest uppercase animate-text-glow">
        ADMISSION NOW

        <svg 
          className="w-7 h-7 transform transition-transform duration-300 group-hover:translate-x-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={3} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </span>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

      {/* Ripple Effect */}
      <div className="absolute inset-0 scale-0 rounded-full bg-white/20 group-hover:scale-150 transition-transform duration-700 ease-out"></div>

      <style jsx>{`
        /* Button breathing glow */
        @keyframes button-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 15px 40px rgba(200,32,47,0.5);
          }
          50% {
            transform: scale(1.06);
            box-shadow: 0 25px 70px rgba(200,32,47,0.9);
            background-color: #d62828;
          }
        }

        .animate-button-pulse {
          animation: button-pulse 1.8s ease-in-out infinite;
        }

        /* Text glow blink */
        @keyframes text-glow {
          0%, 100% {
            opacity: 1;
            text-shadow: 0 0 5px rgba(255,255,255,0.6),
                         0 0 10px rgba(255,255,255,0.4);
          }
          50% {
            opacity: 0.8;
            text-shadow: 0 0 20px rgba(255,255,255,1),
                         0 0 30px rgba(255,255,255,0.8);
          }
        }

        .animate-text-glow {
          animation: text-glow 1.2s ease-in-out infinite;
        }
      `}</style>
    </Link>
  );
};

export default Admission;
