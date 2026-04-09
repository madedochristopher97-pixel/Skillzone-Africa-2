import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  GraduationCap, 
  ArrowRight, 
  ChevronRight, 
  Code, 
  Star, 
  MoreVertical, 
  Palette, 
  Activity 
} from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

export default function InstructorDashboardOverview() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-10"
    >
      {/* Welcome Section */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-headline font-black text-4xl text-[#00113a] tracking-tight">Kazi, Fredrick! 👋</h1>
          <p className="text-slate-500 mt-2 font-medium">Your courses are performing 12% better this week.</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-[#002366] uppercase tracking-widest">Live Updates</span>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <TrendingUp size={24} />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">+12.5%</span>
          </div>
          <p className="text-slate-500 text-sm font-medium mb-1">Total Revenue</p>
          <h3 className="font-headline font-black text-2xl text-[#00113a]">KSh 142,500</h3>
        </div>

        <div className="bg-[#002366] p-6 rounded-[2rem] shadow-lg shadow-blue-900/20 group overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#002366] transition-all duration-300">
                <Users size={24} />
              </div>
              <span className="text-xs font-bold text-blue-200 bg-white/10 px-2 py-1 rounded-lg">+4 today</span>
            </div>
            <p className="text-blue-100/60 text-sm font-medium mb-1">Total Students</p>
            <h3 className="font-headline font-black text-2xl text-white">1,248</h3>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10 text-white transform rotate-12">
            <Users size={120} strokeWidth={1} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <BookOpen size={24} />
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Active Courses</p>
            <h3 className="font-headline font-black text-2xl text-[#00113a]">12</h3>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-[0.03] text-primary transform -rotate-12">
            <GraduationCap size={160} strokeWidth={1} />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-6 px-2">
              <h2 className="font-headline font-bold text-xl text-[#00113a]">Recent Activity</h2>
              <button className="text-sm font-bold text-primary flex items-center gap-1 group">
                View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-50">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-6 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                      {i === 1 ? <Code size={20} /> : i === 2 ? <Palette size={20} /> : <Activity size={20} />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#002366]">New course review received</p>
                      <p className="text-xs text-slate-500 mt-1">"Excellent instructor, very practical examples!"</p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <div className="flex text-amber-400">
                        {[1, 2, 3, 4].map(s => <Star key={s} size={12} fill="currentColor" stroke="none" />)}
                        <Star size={12} stroke="currentColor" fill="none" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">2h ago</span>
                    </div>
                    <button className="ml-4 text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>

        {/* Sidebar Info */}
        <motion.div variants={itemVariants} className="space-y-8">
          <section className="bg-gradient-to-br from-[#00113a] to-[#002366] rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-xl shadow-blue-900/10">
            <div className="relative z-10">
              <h3 className="font-headline font-bold text-xl mb-2">Ready to expand?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">Launch a new course today and reaching more students across the continent.</p>
              <Link to="/instructor-dashboard/course-builder" className="w-full py-4 bg-white text-[#002366] rounded-xl font-headline font-bold text-sm shadow-lg shadow-black/10 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                Launch New Course <ArrowRight size={16} />
              </Link>
            </div>
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>
          </section>

          <section className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
            <h3 className="font-headline font-bold text-lg text-[#00113a] mb-6">Course Performance</h3>
            <div className="space-y-6">
              {[
                { name: 'Business Growth', val: 85, color: 'bg-blue-600' },
                { name: 'Digital Marketing', val: 62, color: 'bg-emerald-500' },
                { name: 'UI/UX Design', val: 45, color: 'bg-amber-500' }
              ].map((c) => (
                <div key={c.name}>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-[#002366]">{c.name}</span>
                    <span className="text-slate-400">{c.val}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${c.val}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full ${c.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
}
