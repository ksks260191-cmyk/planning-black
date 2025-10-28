import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Briefcase, Headphones, Database, Shield, Zap, Globe, Calendar, Building2, TrendingUp, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const handleLearnMore = () => {
    const phoneNumber = '+918076536172';
  const message = encodeURIComponent('Hello Planning Pros & Consultant!!, I would like a custom quote for your IT services.');
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const services = [
    {
      icon: Code,
  title: "Software Developers",
      description: "Full-stack developers, mobile app specialists, and DevOps engineers ready to accelerate your projects.",
      features: ["Frontend & Backend", "Mobile Development", "DevOps & Cloud", "Quality Assurance"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
  title: "Data Engineers",
      description: "Data scientists, analysts, and engineers to transform your data into actionable business insights.",
      features: ["Data Science", "Business Intelligence", "Machine Learning", "Database Management"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "SAP / Oracle / ERP Experts",
      description: "Skilled consultants and engineers specializing in SAP, Oracle, and ERP solutions to streamline business operations and drive digital transformation.",
      features: ["SAP Modules (ECC, S/4HANA, FICO, MM, SD, HR, ABAP)", "Oracle ERP Cloud & E-Business Suite Implementation", "ERP Integration, Customization, and Migration", "Business Process Automation & Workflow Optimization", "BI, Analytics, and Enterprise Reporting"],
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Calendar,
      title: "Corporate Events & Conferences",
      description: "We handle everything from corporate townhalls, leadership summits, AGMs, to product launches and press conferences. Our team ensures a seamless blend of logistics, creative design, and technical excellence for high-impact delivery.",
      features: ["Corporate Townhalls", "Leadership Summits", "Product Launches", "Press Conferences"],
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Building2,
      title: "Exhibitions & Trade Shows",
      description: "Planning Pros manages full-scale participation and stall execution for brands at expos, industry exhibitions, and trade fairs. We also provide trained exhibition staff, hostesses, and international models to elevate brand presence.",
      features: ["Expo Participation", "Stall Execution", "Exhibition Staff", "Brand Presence"],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Market Research & BTL Activations",
      description: "We power brands with on-ground research, lead generation campaigns, and BTL activities. We combine data intelligence with executional muscle to deliver measurable marketing impact.",
      features: ["Door-to-door & Field Surveys", "Mall Promotions", "Sampling at Petrol Pumps", "Human Banners & Street Marketing"],
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
  <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Expert Talent</span> <span className="text-white">for Every Need</span>
          </h2>
          <p className="text-[11px] md:text-sm text-slate-600 max-w-xl mx-auto leading-tight">
            <span className="text-slate-200">From cutting-edge technology roles to essential business functions, we provide pre-vetted professionals who integrate seamlessly with your team.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="service-card p-4 md:p-5 rounded-lg group bg-gradient-to-br from-white via-slate-100 to-slate-200 shadow-xl border border-slate-200"
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-5 h-5 text-white" />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-3 leading-snug text-xs md:text-sm">{service.description}</p>
              
              <ul className="space-y-1.5 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-slate-700">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                    <span className="text-xs md:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="glass-effect p-5 md:p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold gradient-text mb-2">One-Time Fee Model</h3>
            <p className="text-xs md:text-sm text-slate-600 mb-4 leading-snug">
              No recurring charges, no hidden fees. Pay once and get access to our entire network of pre-vetted professionals for your specific project needs.
            </p>
            <Button
              onClick={handleLearnMore}
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-5 py-2.5 text-xs md:text-sm"
            >
              Get Custom Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;