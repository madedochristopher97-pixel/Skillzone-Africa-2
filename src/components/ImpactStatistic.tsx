import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ImpactStatistic() {
  return (
    <section className="pb-24 px-8">
      <div className="max-w-7xl mx-auto bg-[#002366] rounded-[40px] overflow-hidden p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative">
        <div className="max-w-xl z-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-6 leading-tight">
            91% of learners achieved a positive career outcome
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed font-body">
            They reported new job opportunities, increased knowledge, and improved work performance.
          </p>
          <Link className="inline-flex items-center gap-2 text-white font-headline font-bold text-lg hover:underline transition-all" to="#">
            Learn more
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center shrink-0">
          {/* Outer Decorative Rings */}
          <div className="absolute inset-0 rounded-full border border-blue-400/20 scale-125"></div>
          <div className="absolute inset-0 rounded-full border border-blue-400/10 scale-150"></div>
          {/* Main Graphic */}
          <svg className="w-full h-full transform -rotate-90 drop-shadow-2xl" viewBox="0 0 100 100">
            <circle className="text-[#00113a]" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
            <circle className="text-[#00e5ff]" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="22.6" strokeLinecap="round" strokeWidth="8"></circle>
            {/* Decorative ticks inside circle */}
            <circle cx="50" cy="50" fill="transparent" r="32" stroke="rgba(255,255,255,0.2)" strokeDasharray="1 3" strokeWidth="1"></circle>
          </svg>
          {/* Inner Navy Circle with Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-[#00113a] rounded-full flex items-center justify-center shadow-inner border border-white/5">
              <span className="text-white text-5xl md:text-6xl font-headline font-black tracking-tighter">91%</span>
            </div>
          </div>
        </div>
        {/* Background aesthetic elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
