import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Play, Filter, Search } from 'lucide-react';
import { CATEGORIES, ALL_COURSES } from '../constants';

export default function CategoryDetails() {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Find category by ID or name
  const category = CATEGORIES.find(c => 
    c.id === categoryId || 
    c.name.toLowerCase().replace(/\s+/g, '-') === categoryId
  );

  if (!category) {
    return (
      <div className="min-h-screen pt-32 px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-headline font-bold text-[#00113a] mb-4">Category not found</h1>
        <Link to="/" className="text-[#ffbf00] font-bold flex items-center gap-2 hover:underline">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  // Filter courses by category
  // We'll handle various mapping styles (Tech & IT -> Tech, etc.)
  const categoryKeywords = category.name.split('&').map(s => s.trim().split(' ')[0].toLowerCase());
  
  const filteredCourses = ALL_COURSES.filter(course => {
    const courseCat = course.category.toLowerCase();
    return categoryKeywords.some(keyword => courseCat.includes(keyword)) || 
           courseCat === category.name.toLowerCase();
  });

  return (
    <div className="bg-[#fcf9f4] min-h-screen">
      {/* Category Hero */}
      <section className="pt-32 pb-16 px-8 bg-[#00113a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="w-96 h-96 rounded-full border-[40px] border-white -mr-48 -mt-24"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-[#ffbf00] font-bold mb-8 hover:gap-4 transition-all group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-white mb-6">
              {category.name}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Master the skills you need in {category.name.toLowerCase()}. From foundation to advanced mastery, explore our curated courses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 rounded-3xl shadow-sm border border-[#c5c6d2]/20">
            <h2 className="text-2xl font-headline font-bold text-[#00113a]">
              {filteredCourses.length} Courses Available
            </h2>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#757682] w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search in this category..." 
                  className="w-full bg-[#f6f3ee] border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#ffbf00]"
                />
              </div>
              <button className="p-3 bg-[#f6f3ee] rounded-xl hover:bg-[#ffdfa0] transition-colors">
                <Filter size={20} className="text-[#00113a]" />
              </button>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden group hover:shadow-2xl hover:shadow-[#00113a]/10 transition-all duration-500 border border-[#c5c6d2]/20 flex flex-col"
                >
                  <Link to={`/courses/${course.id}`} className="flex flex-col flex-1">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#e5e2dd]">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#ffbf00] flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                          <Play className="text-white fill-current w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <img 
                          src={course.instructor.avatar} 
                          alt={course.instructor.name} 
                          className="w-8 h-8 rounded-full object-cover ring-2 ring-[#ffbf00]/20"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-sm font-medium text-[#444650]">{course.instructor.name}</span>
                      </div>
                      <h3 className="text-xl font-headline font-bold text-[#00113a] mb-4 group-hover:text-[#ffbf00] transition-colors line-clamp-2 leading-tight">
                        {course.title}
                      </h3>
                      <div className="mt-auto pt-6 border-t border-[#f6f3ee] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Star size={16} className="text-[#ffbf00] fill-current" />
                          <span className="font-bold text-[#00113a]">{course.rating}</span>
                        </div>
                        <span className="text-xl font-black text-[#00113a]">{course.price}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-32 flex flex-col items-center justify-center text-center bg-white rounded-[3rem] shadow-sm italic">
              <p className="text-[#757682] text-xl">We're currently preparing courses for this category. Stay tuned!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
