import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('https://admin.vidyabharatischool.education/api/notice/notice');
        if (response.data.success) {
          setNotices(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching notices:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);
  return (
    <section id="about" className="py-[100px] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-start">

        {/* School Intro with Premium Mixed Colors */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>

          <h3 className="text-4xl md:text-5xl font-black font-header mb-8 text-primary leading-tight">
            About Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Institution</span>
          </h3>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
            <p>
              <span className="text-secondary font-bold">Vidya Bharati English School & Jr. College</span> is more than just a place of learning; it's a launchpad for dreams. Established in 2011, we follow a legacy of excellence under the Vidya Bharati Shaikshanik Mandal.
            </p>
            <p>
              Our philosophy integrates <span className="text-primary font-bold underline decoration-accent decoration-2 underline-offset-4">modern technological prowess</span> with traditional Indian values. We believe in providing a safe, vibrant, and intellectually stimulating environment for every scholar.
            </p>
          </div>

          <div className="mt-12 group">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary to-secondary/90 text-white shadow-2xl transition-all duration-500 hover:shadow-primary/20">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <svg className="w-20 h-20 fill-white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
              </div>
              <h4 className="text-xl font-bold font-title mb-3 text-accent tracking-widest uppercase">Our Vision</h4>
              <p className="text-white/90 font-medium italic text-lg leading-relaxed">
                "To be a global center of excellence in education, where we nurture compassionate leaders and innovators who define the future."
              </p>
            </div>
          </div>
        </div>

        {/* Notice Board with Vibrant Mix Design */}
        <div className="relative group">
          {/* Decorative frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-secondary to-primary rounded-[2.5rem] rotate-1 blur-sm opacity-20 group-hover:rotate-0 transition-transform duration-500"></div>

          <div className="relative bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-full ring-8 ring-white">
            <div className="bg-gradient-to-r from-secondary to-primary p-8 text-white relative">
              <div className="absolute top-4 right-6 text-4xl animate-bounce">🔔</div>
              <h4 className="text-2xl font-black font-title italic m-0 pr-2">Campus Updates</h4>
              <p className="text-white/70 text-sm font-bold uppercase tracking-widest mt-1">Real-time Bulletin</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2">
              <ul className="h-[350px] divide-y divide-gray-100">
                {loading ? (
                  <div className="flex justify-center items-center h-full">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : notices.length > 0 ? (
                  notices.map((notice) => (
                    <li key={notice._id} className="py-5 px-3 flex gap-4 items-start hover:bg-gray-50 transition-all rounded-2xl group/item">
                      <div className="bg-white border-2 border-secondary/20 p-2 text-center rounded-xl min-w-[65px] shadow-sm transform group-hover/item:scale-110 transition-transform">
                        <span className="block text-[1.1rem] font-black text-secondary leading-none">{new Date(notice.date).getDate()}</span>
                        <span className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-tighter">
                          {new Date(notice.date).toLocaleString('default', { month: 'short' })} {new Date(notice.date).getFullYear()}
                        </span>
                      </div>
                      <div className="flex-1">
                        {notice.link ? (
                          <a href={notice.link} target="_blank" rel="noopener noreferrer" className="font-bold text-[1.05rem] text-primary hover:text-secondary transition-colors block leading-tight hover:underline cursor-pointer">
                            {notice.title}
                          </a>
                        ) : (
                          <p className="font-bold text-[1.05rem] text-primary transition-colors block leading-tight cursor-default">{notice.title}</p>
                        )}
                        {notice.isHot && <span className="inline-flex mt-2 items-center px-2 py-0.5 rounded text-[0.6rem] font-bold bg-secondary text-white uppercase animate-pulse">Hot News</span>}
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-full opacity-30 italic font-bold">
                    <span>📋</span>
                    <span>No notices available</span>
                  </div>
                )}
              </ul>
            </div>


          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
