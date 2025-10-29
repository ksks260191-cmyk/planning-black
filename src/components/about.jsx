import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Target, CheckCircle, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Professionals Placed", color: "from-blue-500 to-cyan-500" },
    { icon: Award, number: "98%", label: "Success Rate", color: "from-green-500 to-teal-500" },
    { icon: Clock, number: "24h", label: "Average Response", color: "from-purple-500 to-pink-500" },
    { icon: Target, number: "100+", label: "Happy Clients", color: "from-orange-500 to-red-500" }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "Every professional in our network undergoes rigorous vetting including technical assessments, background checks, and cultural fit evaluation."
    },
    {
      icon: TrendingUp,
      title: "Rapid Scaling",
      description: "Scale your team in weeks, not months. Our streamlined process ensures you get the right talent when you need it most."
    },
    {
      icon: Users,
      title: "Perfect Match",
      description: "We don't just match skills – we ensure cultural alignment and long-term success for both clients and professionals."
    }
  ];

  return (
  <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-base font-bold text-slate-900 drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>About Planning Pros & Consultants</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-5">
                Your Trusted Partner in
                <span className="gradient-text block">Staff Augmentation</span>
              </h2>
              <p className="text-base md:text-lg text-slate-200 leading-normal mb-6">
                Planning Pros & Consultants revolutionizes how companies access top-tier talent. Our innovative one-time fee model eliminates the complexity of traditional staffing, providing you with immediate access to pre-vetted IT and non-IT professionals who seamlessly integrate with your existing teams.
              </p>
            </div>

            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5">{value.title}</h3>
                    <p className="text-slate-200 leading-normal text-sm md:text-base">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <img 
                className="w-full h-auto rounded-2xl shadow-2xl"
                alt="IT professionals attending a meeting in a modern office"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=900&q=80" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">10+ Years</div>
                  <div className="text-xs md:text-sm text-slate-900">Industry Experience</div>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-gradient-to-br from-white via-slate-100 to-slate-200 p-4 rounded-xl text-center group shadow-2xl hover:shadow-2xl transition-shadow border border-slate-200"
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl font-bold gradient-text mb-1">{stat.number}</div>
                  <div className="text-xs md:text-sm text-slate-900">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;