import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Hitesh Khurana",
      role: "CEO & Founder",
  image: "/team/hitesh.jpg"
    },
    {
      name: "Karan Gogia",
      role: "Managing Director",
  image: "/team/karan.jpg"
    },
    {
      name: "Seema Gupta",
      role: "IT Lead Manager",
  image: "/team/seema.jpg"
    },
    {
      name: "Prashant Sah",
      role: "Senior Accounts Manager",
  image: "/team/prashant.jpg"
    },
    {
      name: "Shweta Pandey",
      role: "Talent Acquisition Manager",
  image: "/team/shweta.jpg"
    },
    {
      name: "Kamal Chhabra",
      role: "Accounts Manager",
  image: "/team/kamal.jpg"
    }
  ];

  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);

  const handlePointerDown = () => setPaused(true);
  const handlePointerUp = () => setPaused(false);
  const handlePointerLeave = () => setPaused(false);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300, // Scroll left by 300px
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: 'smooth'
      });
    }
  };

  return (
  <section className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-900">Meet Our Team</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
            The <span className="gradient-text">People Behind</span> Planning Pros & Consultant
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-slate-200 max-w-2xl mx-auto leading-snug">
            Our dedicated team of experts is committed to connecting you with the best
            talent and ensuring your staffing success.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative group overflow-x-auto no-scrollbar"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerLeave}
        >
          <div className="inline-flex w-max gap-6 pb-4 whitespace-nowrap [will-change:transform]">
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="flex-none w-52 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-4 rounded-xl text-center shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover object-center border-2 border-white shadow-md"
                />
                <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 leading-tight break-words">{member.name}</h3>
                <p className="text-xs md:text-sm text-blue-600 font-medium leading-snug break-words">{member.role}</p>
                <div className="flex items-center justify-center mt-2 text-yellow-500 gap-0.5">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll buttons */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
