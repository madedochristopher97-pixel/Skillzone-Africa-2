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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#00113a] mb-4">Popular on SkillZone</h2>
            <p className="font-body text-[#D48806] text-lg max-w-md">Courses thousands of African learners are taking right now.</p>
          </div>
          <Link to="/courses" className="flex items-center gap-2 text-[#00113a] font-bold hover:gap-4 transition-all group">
            View all courses <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-6 lg:grid-rows-2 h-auto lg:h-[800px]">
          {/* Featured Large Card */}
          {featured && (
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-6 lg:col-span-2 lg:row-span-2 group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#c5c6d2]/20"
            >
              <Link to={`/courses/${featured.id}`} className="absolute inset-0 z-20"></Link>
              <div className="absolute inset-0">
                <img 
                  alt={featured.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={featured.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-[#00113a] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">{featured.category}</span>
                <span className="bg-[#ffbf00] text-[#6d5000] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">{featured.tag}</span>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <img alt={featured.instructor.name} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={featured.instructor.avatar} referrerPolicy="no-referrer" />
                  <span className="text-white font-semibold">{featured.instructor.name}</span>
                </div>
                <h3 className="font-headline font-black text-3xl text-white mb-4 leading-tight">{featured.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="text-[#ffbf00]" size={20} fill="currentColor" />
                    <span className="text-white font-bold text-xl">{featured.rating}</span>
                    <span className="text-white/70">({featured.students} learners)</span>
                  </div>
                  <div className="text-[#ffbf00] font-black text-3xl">{featured.price}</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Cards */}
          {others.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -5 }}
              className={`md:col-span-3 lg:col-span-1 group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-[#c5c6d2]/20 ${course.category === 'Tech' ? 'lg:col-span-2 flex-row' : ''}`}
            >
              <Link to={`/courses/${course.id}`} className="flex flex-col h-full w-full">
                <div className={`relative ${course.category === 'Tech' ? 'w-1/2' : 'h-48'}`}>
                  <img 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={course.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-4 left-4 ${course.category === 'Creative' ? 'bg-[#ffbf00] text-[#6d5000]' : 'bg-[#00113a] text-white'} text-[10px] font-bold px-3 py-1 rounded-full uppercase`}>
                    {course.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <img alt={course.instructor.name} className="w-6 h-6 rounded-full object-cover" src={course.instructor.avatar} referrerPolicy="no-referrer" />
                      <span className="text-xs font-medium text-[#444650]">{course.instructor.name}</span>
                    </div>
                    <h3 className="font-bold text-lg leading-tight mb-2 text-[#00113a] group-hover:text-[#ffbf00] transition-colors line-clamp-2">{course.title}</h3>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1">
                      <Star className="text-[#ffbf00]" size={16} fill="currentColor" />
                      <span className="text-sm font-bold">{course.rating}</span>
                    </div>
                    <div className="font-black text-lg text-[#00113a]">{course.price}</div>
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
