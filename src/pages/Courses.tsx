import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, ShoppingCart, Filter, ChevronLeft, ChevronRight, Star, Play, ArrowRight, Globe, Users, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { ALL_COURSES } from '../constants';

export default function Courses() {
  const [priceRange, setPriceRange] = useState(2500);

  return (
    <div className="bg-[#fcf9f4] min-h-screen font-body">
      <main className="pt-24 min-h-screen max-w-7xl mx-auto px-6 pb-20">
        {/* Page Header */}
        <header className="mb-12 flex items-baseline gap-4">
          <h1 className="text-4xl md:text-5xl font-black text-[#00113a] font-headline tracking-tight">All Courses</h1>
          <span className="bg-[#ffdfa0] text-[#261a00] px-3 py-1 rounded-full text-xs font-bold font-headline uppercase tracking-wider">
            {ALL_COURSES.length} Results
          </span>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar / Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-10">
              <div className="flex items-center justify-between">
                <h2 className="font-headline text-sm font-bold uppercase tracking-widest text-[#00113a] flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </h2>
                <button className="text-xs font-bold text-[#795900] hover:underline">Clear All</button>
              </div>

              {/* Categories */}
              <section>
                <h3 className="text-xs font-black text-[#757682] uppercase tracking-widest mb-4">Category</h3>
                <div className="space-y-3">
                  {['Formal Education', 'Business', 'Creative Arts', 'Tech', 'Languages'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-[#c5c6d2] text-[#00113a] focus:ring-[#795900]"
                        defaultChecked={cat === 'Business' || cat === 'Tech'}
                      />
                      <span className="text-sm font-medium text-[#444650] group-hover:text-[#00113a] transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Price Range */}
              <section>
                <h3 className="text-xs font-black text-[#757682] uppercase tracking-widest mb-4">Price Range (KSh)</h3>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#e5e2dd] rounded-lg appearance-none cursor-pointer accent-[#795900]"
                />
                <div className="flex justify-between mt-2 text-xs font-bold text-[#00113a]">
                  <span>0</span>
                  <span>5000</span>
                </div>
              </section>

              {/* Level */}
              <section>
                <h3 className="text-xs font-black text-[#757682] uppercase tracking-widest mb-4">Level</h3>
                <div className="flex flex-wrap gap-2">
                  {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                    <button
                      key={level}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                        level === 'Intermediate'
                          ? 'bg-[#795900] text-white'
                          : 'bg-white border border-[#c5c6d2] hover:bg-[#ffdfa0]'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="flex-1">
            {/* Grid Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 bg-[#f6f3ee] p-4 rounded-2xl">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#757682] w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search in results..."
                  className="w-full sm:w-80 bg-white border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#795900]"
                />
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-xs font-bold text-[#757682] uppercase tracking-widest whitespace-nowrap">Sort By:</span>
                <select className="bg-white border-none rounded-xl py-3 px-4 text-sm font-bold text-[#00113a] focus:ring-2 focus:ring-[#795900] w-full sm:w-auto outline-none">
                  <option>Most Popular</option>
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </div>

            {/* Promo Banner */}
            <div className="mb-8 w-full h-[80px] bg-[#002366] rounded-xl flex items-center justify-between px-8 relative overflow-hidden group">
              <div className="flex items-center gap-4 relative z-10">
                <span className="bg-[#FFBF00] text-[#002366] px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                  New Masterclass
                </span>
                <h4 className="font-headline font-bold text-white text-lg">
                  African Digital Economy 2024
                </h4>
              </div>
              <button className="relative z-10 text-sm font-bold text-[#002366] bg-[#FFBF00] hover:bg-[#D48806] transition-colors px-6 py-2.5 rounded-lg flex items-center gap-2">
                View Course <ArrowRight className="w-4 h-4" />
              </button>
              <div className="absolute right-32 -bottom-8 opacity-10 rotate-12">
                <ArrowRight className="w-32 h-32 text-white" />
              </div>
            </div>

            {/* Course Cards Grid */}
            <div className="flex flex-wrap justify-center gap-8">
              {ALL_COURSES.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-white rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-[#00113a]/5 transition-all duration-500 flex flex-col"
                >
                  <Link to={`/courses/${course.id}`} className="flex flex-col flex-1">
                    <div className="relative aspect-video bg-[#e8e0d5] overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-[#00113a] fill-current" />
                        </div>
                      </div>
                      {course.tag && (
                        <div className="absolute top-4 left-4 bg-[#795900] text-white text-[10px] font-black uppercase px-2 py-1 rounded">
                          {course.tag}
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-headline font-bold text-[#00113a] text-lg leading-tight mb-2 group-hover:text-[#795900] transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-[#757682] mb-4">{course.instructor.name}</p>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="flex text-[#ffb300]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-[#00113a]">{course.rating}</span>
                        <span className="text-xs text-[#757682]">({course.students})</span>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xl font-black text-[#00113a] font-headline">{course.price}</span>
                        <button className="bg-[#00113a] hover:bg-[#002366] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95">
                          Enroll
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-20 flex justify-center items-center gap-2">
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f6f3ee] text-[#00113a] hover:bg-[#ffdfa0] transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00113a] text-white font-bold">1</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f6f3ee] text-[#00113a] font-bold hover:bg-[#ffdfa0] transition-all">2</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f6f3ee] text-[#00113a] font-bold hover:bg-[#ffdfa0] transition-all">3</button>
              <span className="px-2 text-[#757682] font-black">...</span>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f6f3ee] text-[#00113a] font-bold hover:bg-[#ffdfa0] transition-all">16</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f6f3ee] text-[#00113a] hover:bg-[#ffdfa0] transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}
