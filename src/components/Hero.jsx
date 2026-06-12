import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Admission from "./Admission";
import axios from "axios";

const Hero = () => {
  const currentRef = useRef(null);
  const nextRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
        const response = await axios.get("https://admin.vidyabharatischool.education/api/gallery/slider");
        if (response.data.success && response.data.data.length > 0) {
          const fetchedImages = response.data.data.map(img =>
            img.imageUrl?.startsWith('/uploads') ? `https://admin.vidyabharatischool.education${img.imageUrl}` : img.imageUrl
          );
          setImages(fetchedImages);
          setIndex(0);
        }
      } catch (error) {
        console.error("Error fetching slider images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSliderImages();
  }, []);

  useLayoutEffect(() => {
    if (images.length <= 1) return;

    // Reset positions instantly before the browser paints the new React state
    gsap.set(currentRef.current, { x: "0%", opacity: 1 });
    gsap.set(nextRef.current, { x: "100%", opacity: 1 });

    const interval = setInterval(() => {
      const nextIndex = (index + 1) % images.length;

      const tl = gsap.timeline();

      tl.to(currentRef.current, {
        x: "-100%",
        duration: 1.2,
        ease: "power3.inOut",
      });

      tl.to(
        nextRef.current,
        {
          x: "0%",
          duration: 1.2,
          ease: "power3.inOut",
        },
        "<"
      );

      tl.call(() => {
        setIndex(nextIndex);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [index, images]);

  return (
    <section className="relative h-[65vh] sm:h-[75vh] md:h-[85vh] min-h-[500px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.length > 0 ? (
          <>
            <img
              ref={currentRef}
              src={images[index]}
              alt="school background"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {images.length > 1 && (
              <img
                ref={nextRef}
                src={images[(index + 1) % images.length]}
                alt="school background"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            )}
          </>
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-[#1e293b] flex items-center justify-center">
            {!loading && (
              <span className="text-white/50 text-xs sm:text-sm font-bold tracking-widest uppercase">No Slider Images Uploaded</span>
            )}
          </div>
        )}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/20 flex items-end justify-center pb-6 sm:pb-10 md:pb-12">
        <div className="text-center w-full px-4 flex flex-col items-center justify-center">
          <div className="relative z-10 scale-90 sm:scale-95 md:scale-100 transform transition-transform duration-500">
            <Admission variant="hero" />
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-700 ${i === index ? "w-12 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" : "w-3 bg-white/30"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;