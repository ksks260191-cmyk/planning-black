import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  {
    name: 'Libas',
    logo: '/clients/libas.png'
  },
  {
    name: 'DMI Finance',
    logo: '/clients/dmi-finance.png'
  },
  {
    name: 'Lakshita Fashions',
    logo: '/clients/lakshita-fashions.png'
  },
  {
    name: 'Dot One Solutions',
    logo: '/clients/dot-one-solutions.png'
  },
  {
    name: 'Donyati',
    logo: '/clients/donyati.png'
  },
  {
    name: 'Art Housing Finance',
    logo: '/clients/art-housing-finance.png'
  }
];

const Clients = () => {
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);

  const handlePointerDown = () => setPaused(true);
  const handlePointerUp = () => setPaused(false);
  const handlePointerLeave = () => setPaused(false);

  return (
    <section className="py-16 bg-dark-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center gradient-text mb-8">
          Our Happy <span className="text-white">Clients</span>
        </h2>
        <div
          ref={containerRef}
          className={`group ${paused ? 'marquee-paused' : ''} overflow-hidden sm:overflow-hidden overflow-x-auto no-scrollbar`}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerLeave}
        >
          <div className="inline-flex w-max gap-2 md:gap-6 py-4 px-2 whitespace-nowrap auto-scroll-row [will-change:transform] group-hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex flex-col items-center w-48 shrink-0"
              >
                <div className="w-32 h-32 mb-4 bg-white rounded-xl p-4 shadow-lg flex items-center justify-center transition-transform duration-500 hover:scale-105">
                  <img
                    src={client.logo}
                    alt={client.name + ' logo'}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-sm md:text-base text-slate-200 text-center font-semibold">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
