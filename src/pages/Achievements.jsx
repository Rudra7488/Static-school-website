import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Achievements = () => {
  const [achievementImages, setAchievementImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://admin.vidyabharatischool.education/api/gallery/achievements');
        if (response.data.success) {
          setAchievementImages(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching achievement images:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const achievementsList = [
    {
      title: "100% Board Results",
      year: "2024-25",
      desc: "Proud moment for VB School as our Class X and XII students achieved 100% passing results with 45+ students scoring above 90%.",
      icon: "🏆",
    },
    {
      title: "State Level Athletics Gold",
      year: "2023",
      desc: "Our students dominated the Inter-School State Athletics Meet, winning 5 Gold and 3 Silver medals in track events.",
      icon: "🥇",
    },
    {
      title: "Science Olympiad Winners",
      year: "2024",
      desc: "Ranked among the top 10 schools nationwide in the National Science Olympiad with 3 International Rank holders.",
      icon: "🔬",
    },
    {
      title: "Cultural Excellence Award",
      year: "2023-24",
      desc: "Recognized as the 'Most Vibrant Cultural Campus' for our annual mega-events.",
      icon: "🎭",
    }
  ];

  return (
    <div className="pt-5 pb-8 min-h-screen bg-[#fffcfd] relative overflow-hidden">

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ✅ HEADER FIXED */}
        <div className="text-center mb-8 pt-1">

          {/* 🔥 Badge (UPPER POSITION FIXED) */}
          <span className="bg-gradient-to-r from-accent to-[#ffeb3b] text-primary px-8 py-2 rounded-full font-black text-sm inline-block mb-10 uppercase tracking-widest shadow-md">
            Pride Of VB School
          </span>

           <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Our Achievements</h1>

          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* IMAGE GRID */}
        {!loading && achievementImages.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {achievementImages.map((img) => (
                <div
                  key={img._id}
                  className="group flex flex-col overflow-hidden rounded-2xl shadow-lg border bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={
                        img.imageUrl?.startsWith('/uploads')
                          ? `https://admin.vidyabharatischool.education${img.imageUrl}`
                          : img.imageUrl
                      }
                      alt={img.title || 'Achievement'}
                      className="w-full h-full  group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {img.title && (
                    <div className="bg-white p-5 border-t border-gray-100 text-center">
                      <p className="text-primary text-lg font-bold tracking-wide">
                        {img.title}
                      </p>
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        )}

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsList.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <span className="text-xs font-bold text-gray-400 uppercase">
                {item.year}
              </span>

              <h3 className="text-lg font-bold text-primary mt-1">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 italic">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Achievements;