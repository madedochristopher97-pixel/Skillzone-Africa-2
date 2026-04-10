import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // rough width of a card + gap
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-8 bg-[#fcf9f4]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between text-center lg:text-left gap-4 flex-wrap">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#00113a] mb-4 lg:mb-0">Student Success Stories</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border-2 border-[#00113a]/10 flex items-center justify-center text-[#00113a] hover:bg-[#00113a] hover:text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border-2 border-[#00113a]/10 flex items-center justify-center text-[#00113a] hover:bg-[#00113a] hover:text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="min-w-[320px] sm:min-w-[400px] flex-shrink-0 snap-center bg-[#f6f3ee] p-8 rounded-[2.5rem] border-l-8 border-[#ffbf00] shadow-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <img alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-white" src={t.avatar} referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-[#00113a]">{t.name}</p>
                  <p className="text-sm text-[#444650]">{t.role}</p>
                </div>
              </div>
              <p className="italic text-lg text-[#00113a]/80 leading-relaxed font-medium">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
