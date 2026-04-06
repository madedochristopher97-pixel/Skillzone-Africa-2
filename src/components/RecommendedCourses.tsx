import { COURSES } from '../constants';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function RecommendedCourses() {
  const featured = COURSES.find(c => c.featured);
  const others = COURSES.filter(c => !c.featured);

  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-4">
          <div>
            <h2 className="font-headline font-bold text-4xl md:text-5xl text-[#00113a] mb-2 tracking-tight">Recommended for you</h2>
            <p className="font-body text-[#757682] text-lg max-w-md">Our curators' picks for the month based on industry trends.</p>
          </div>
          <Link to="/courses" className="flex items-center gap-2 text-[#00113a] font-bold hover:gap-4 transition-all group border-b-2 border-transparent hover:border-[#ffbf00] pb-1">
            View all courses <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Featured Large Card - Spans 2 columns */}
          {featured && (
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-2 lg:col-span-2 group relative bg-[#1F4541] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[400px] flex flex-col justify-end"
            >
              <Link to={`/courses/${featured.id}`} className="absolute inset-0 z-20"></Link>
              <div className="absolute inset-0">
                <img 
                  alt={featured.title} 
                  className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-1000" 
                  src={featured.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-8 left-8 flex gap-3 z-10">
                <span className="bg-[#00113a] text-white text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-widest">{featured.category}</span>
                <span className="bg-[#ffbf00] text-[#6d5000] text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-widest">{featured.tag}</span>
              </div>
              <div className="relative p-10 w-full z-10">
                <div className="flex items-center gap-3 mb-6">
                  <img alt={featured.instructor.name} className="w-10 h-10 rounded-full border-2 border-[#ffbf00] object-cover" src={featured.instructor.avatar} referrerPolicy="no-referrer" />
                  <span className="text-white font-bold opacity-90">{featured.instructor.name}</span>
                </div>
                <h3 className="font-headline font-black text-3xl md:text-4xl text-white mb-8 leading-tight tracking-tight">{featured.title}</h3>
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2">
                    <Star className="text-[#ffbf00] fill-current" size={20} />
                    <span className="text-white font-black text-xl">{featured.rating}</span>
                    <span className="text-white/50 text-sm">({featured.students} learners)</span>
                  </div>
                  <div className="text-[#ffbf00] font-black text-3xl">{featured.price}</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Top Row Standard Cards */}
          {others.slice(0, 2).map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -8 }}
              className="lg:col-span-1 group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#c5c6d2]/20 flex flex-col"
            >
              <Link to={`/courses/${course.id}`} className="flex flex-col h-full">
                <div className="relative h-60 overflow-hidden bg-[#f0ebe4]">
                  <img 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={course.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-widest ${course.category.includes('Creative') ? 'bg-[#ffbf00] text-[#6d5000]' : 'bg-[#00113a] text-white'}`}>
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <img alt={course.instructor.name} className="w-8 h-8 rounded-full object-cover" src={course.instructor.avatar} referrerPolicy="no-referrer" />
                    <span className="text-xs font-bold text-[#757682]">{course.instructor.name}</span>
                  </div>
                  <h3 className="font-headline font-bold text-xl leading-snug mb-4 text-[#00113a] group-hover:text-[#ffbf00] transition-colors line-clamp-2">{course.title}</h3>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-[#f6f3ee]">
                    <div className="flex items-center gap-1.5">
                      <Star className="text-[#ffbf00] fill-current" size={16} />
                      <span className="text-sm font-black text-[#00113a]">{course.rating}</span>
                    </div>
                    <div className="font-black text-xl text-[#00113a]">{course.price}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Bottom Row Wide Cards */}
          {others.slice(2, 4).map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -8 }}
              className="md:col-span-2 lg:col-span-2 group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#c5c6d2]/20"
            >
              <Link to={`/courses/${course.id}`} className="flex flex-col md:flex-row h-full">
                <div className="relative w-full md:w-[45%] h-64 md:h-full overflow-hidden bg-[#00113a]">
                  <img 
                    alt={course.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" 
                    src={course.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#00113a]/80 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-widest border border-white/20">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <img alt={course.instructor.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#ffbf00]/20" src={course.instructor.avatar} referrerPolicy="no-referrer" />
                    <span className="text-sm font-bold text-[#757682]">{course.instructor.name}</span>
                  </div>
                  <h3 className="font-headline font-black text-2xl leading-tight mb-6 text-[#00113a] group-hover:text-[#ffbf00] transition-colors">{course.title}</h3>
                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-[#f6f3ee]">
                    <div className="flex items-center gap-2">
                      <Star className="text-[#ffbf00] fill-current" size={20} />
                      <span className="text-lg font-black text-[#00113a]">{course.rating}</span>
                      <span className="text-[#757682] text-sm">({course.students})</span>
                    </div>
                    <div className="font-black text-2xl text-[#00113a]">{course.price}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
