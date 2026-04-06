import React from 'react';
import { Plus, BookOpen, Users, MoreVertical, Star, TrendingUp, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function InstructorCourses() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto space-y-10"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-headline font-black text-3xl text-[#00113a]">My Courses</h1>
          <p className="text-slate-500 mt-1 font-medium">Manage your curriculum and track course-specific performance.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-headline font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20 group">
          <Plus size={18} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
          Create New Course
        </button>
      </header>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Strategic Business Growth', students: 842, rating: 4.8, rev: 'KSh 142k', img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800' },
          { title: 'Digital Marketing Essentials', students: 1205, rating: 4.9, rev: 'KSh 210k', img: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800' },
          { title: 'UI/UX Design Masterclass', students: 430, rating: 4.7, rev: 'KSh 85k', img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800' },
        ].map((course, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl hover:shadow-blue-900/5 transition-all"
          >
            <div className="h-48 relative overflow-hidden">
              <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm flex items-center gap-1">
                  <TrendingUp size={10} /> Active
                </span>
              </div>
              <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-primary transition-all opacity-0 group-hover:opacity-100">
                <MoreVertical size={16} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="font-headline font-bold text-lg text-[#00113a] leading-tight group-hover:text-primary transition-colors">{course.title}</h3>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" stroke="none" />)}
                  </div>
                  <span className="text-[10px] font-black text-slate-400">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-[#002366] font-bold">
                  <Users size={14} />
                  <span className="text-xs">{course.students}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Total Rev</span>
                  <span className="font-headline font-black text-[#00113a]">{course.rev}</span>
                </div>
                <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-primary hover:text-white transition-all group/btn">
                  <BookOpen size={18} className="group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Empty placeholder to encourage creation */}
        <motion.div 
          onClick={() => {}}
          variants={itemVariants}
          className="border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center p-8 bg-slate-50/50 hover:bg-white hover:border-primary/50 transition-all cursor-pointer group"
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-slate-300 group-hover:text-primary transition-colors shadow-sm mb-4">
            <Plus size={32} />
          </div>
          <p className="font-headline font-bold text-slate-400 group-hover:text-primary transition-colors">Start a new course</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
