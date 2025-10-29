import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star } from 'lucide-react';

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
            The <span className="gradient-text">People Behind</span> Planning Pros & Consultants
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-slate-200 max-w-2xl mx-auto leading-snug">
            Our dedicated team of experts is committed to connecting you with the best
            talent and ensuring your staffing success.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 pb-4 justify-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="flex-none w-36 md:w-40 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-3 rounded-xl text-center shadow-2xl border border-yellow-300/30"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-2 object-cover object-center border-2 border-yellow-400 ring-2 ring-yellow-300 ring-offset-2 ring-offset-slate-200 shadow-md"
                />
                <h3 className="text-xs md:text-sm font-bold text-slate-900 mb-1 leading-tight break-words">{member.name}</h3>
                <p className="text-xs text-blue-600 font-medium leading-snug break-words">{member.role}</p>
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
        </div>
      </div>
    </section>
  );
};

export default Team;
