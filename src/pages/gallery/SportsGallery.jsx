import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SportsGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://admin.vidyabharatischool.education/api/gallery/sports');
        if (response.data.success) {
          setImages(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching sports images:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="pt-10 pb-8 min-h-screen bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-8">
         <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Sports Meet</h1>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-6 font-bold tracking-wide">
            Glimpses of our vibrant annual sports meet, showcasing athleticism and team spirit.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <div key={img._id} className="group relative aspect-[4/3] mb-6">
                <div className="absolute -inset-3 bg-gradient-to-tr from-secondary via-accent to-primary rounded-[2.5rem] opacity-20 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 blur-md"></div>
                <div className="absolute inset-0 bg-white rounded-[2rem] p-1 shadow-2xl z-10">
                  <div className="w-full h-full relative overflow-hidden rounded-[1.8rem] bg-gray-50 border border-gray-50">
                    <img 
                      src={img.imageUrl?.startsWith('/uploads') ? `https://admin.vidyabharatischool.education${img.imageUrl}` : img.imageUrl} 
                      alt={img.title || 'Sports Meet'} 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <p className="text-white font-black text-sm uppercase tracking-widest">{img.title || 'Sports Day'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem] shadow-xl border border-gray-50">
            <div className="text-6xl mb-6">🏆</div>
            <h3 className="text-xl font-black text-primary font-serif italic">No images yet</h3>
            <p className="text-gray-400 font-bold mt-2">Sports event highlights will appear here after the admin uploads them.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportsGallery;
