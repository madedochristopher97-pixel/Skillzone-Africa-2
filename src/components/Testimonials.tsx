import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-24 px-8 bg-[#fcf9f4]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#00113a] mb-4">Student Success Stories</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#f6f3ee] p-8 rounded-[2.5rem] border-l-8 border-[#ffbf00] shadow-sm hover:shadow-xl transition-all">
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
