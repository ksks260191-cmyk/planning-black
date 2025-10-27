import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, UserCheck, Rocket, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "We discuss your specific needs, project requirements, timeline, and cultural preferences to understand exactly what you're looking for.",
      color: "from-blue-500 to-cyan-500",
      step: "01"
    },
    {
      icon: Search,
      title: "Talent Matching",
      description: "Our AI-powered matching system and expert recruiters identify the perfect candidates from our pre-vetted talent pool.",
      color: "from-purple-500 to-pink-500",
      step: "02"
    },
    {
      icon: UserCheck,
      title: "Candidate Presentation",
      description: "We present 3-5 top candidates with detailed profiles, portfolios, and recommendations within 24-48 hours.",
      color: "from-green-500 to-teal-500",
      step: "03"
    },
    {
      icon: Rocket,
      title: "Quick Integration",
      description: "Once you select your preferred candidate, we handle all onboarding logistics and ensure smooth team integration.",
      color: "from-orange-500 to-red-500",
      step: "04"
    }
  ];

  return (
  <section id="process" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1.5 rounded-full mb-3">
            <Rocket className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs md:text-sm font-medium text-slate-900">Our Process</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Simple & Efficient</span> Process
          </h2>
          <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-snug">
            From initial consultation to successful integration, our streamlined 4-step process ensures you get the right talent quickly and efficiently.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Process Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center gap-4 mb-12">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex flex-col items-center text-center max-w-[14rem]"
                  >
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-blue-100 via-purple-100 to-slate-100 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                        <span className="text-xs font-bold text-blue-700">{step.step}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-200 leading-snug">{step.description}</p>
                  </motion.div>
                  
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.25 }}
                      className="flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Process Flow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="relative flex-shrink-0">
                  <div className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-[10px] font-bold text-slate-700">{step.step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-10 bg-slate-200"></div>
                  )}
                </div>
                <div className="flex-1 pt-1.5">
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-200 leading-snug">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-6 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-2 drop-shadow">Average Timeline: 3-5 Days</h3>
            <p className="text-sm text-slate-800 mb-5 font-normal">
              From initial contact to candidate selection, our efficient process typically takes just 3-5 business days.<br />
              <span className="text-slate-600">Rush projects can be accommodated within 24-48 hours.</span>
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-lg font-bold text-blue-600 mb-1">Day 1</div>
                <div className="text-sm text-slate-900 font-medium">Consultation & Requirements</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-600 mb-1">Day 2-3</div>
                <div className="text-sm text-slate-900 font-medium">Talent Matching & Vetting</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-600 mb-1">Day 4-5</div>
                <div className="text-sm text-slate-900 font-medium">Presentation & Selection</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;