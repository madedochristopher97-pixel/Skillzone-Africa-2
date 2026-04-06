import React from 'react';
import { Link } from 'react-router-dom';
import { CAREER_PATHS } from '../constants';

export default function ExploreCareerPaths() {
  return (
    <section className="py-24 px-8 bg-[#fcf9f4]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#00113a]">Explore career paths</h2>
          <Link className="font-headline text-sm font-semibold text-[#00113a] hover:text-[#ffbf00] transition-colors" to="/courses">
            Explore all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_PATHS.map((path) => (
            <Link 
              key={path.id} 
              to={`/career-paths/${path.id}`} 
              className="bg-white rounded-2xl overflow-hidden border border-[#c5c6d2]/20 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group h-full relative"
              style={{ '--hover-bg': path.hoverColor } as React.CSSProperties}
            >
              <div className={`h-44 relative overflow-hidden shrink-0`} style={{ backgroundColor: path.bgColor }}>
                <img alt={path.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={path.image} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow relative z-10 overflow-hidden">
                {/* Fill animation background */}
                <div className="absolute inset-0 bg-[var(--hover-bg)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10"></div>
                
                <h3 className="font-headline font-bold text-xl text-[#00113a] mb-2 group-hover:text-white transition-colors duration-300">{path.title}</h3>
                <p className="text-[#444650]/80 text-sm leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors duration-300">{path.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
