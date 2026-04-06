import { CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function Categories() {
  return (
    <section className="py-24 px-8 bg-[#f6f3ee]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#00113a] mb-4">Top Categories</h2>
          <p className="text-[#444650] text-lg">Master the skills that matter most in today's economy.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {CATEGORIES.map((category) => {
            const IconComponent = (Icons as any)[category.icon];
            return (
              <motion.div 
                key={category.id}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center transition-all group-hover:bg-[#ffbf00] shadow-sm group-hover:shadow-xl">
                  {IconComponent && <IconComponent className="text-[#00113a]" size={40} />}
                </div>
                <span className="font-bold text-sm md:text-base text-center text-[#00113a]">{category.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
