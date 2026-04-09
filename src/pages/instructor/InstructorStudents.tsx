import React from 'react';
import { Search, SlidersHorizontal, MoreVertical, Mail, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
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

export default function InstructorStudents() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto space-y-10"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-headline font-black text-3xl text-[#00113a]">Your Students</h1>
          <p className="text-slate-500 mt-1 font-medium">Keep track of yours students, their progress and communication.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-all transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-100 rounded-full text-sm focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
          </div>
          <button className="p-2 border border-slate-100 rounded-full text-slate-400 hover:bg-slate-50 transition-all">
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </header>

      {/* Students Table */}
      <motion.div variants={itemVariants} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="p-6 font-headline font-bold text-xs text-slate-400 uppercase tracking-widest">Student</th>
              <th className="p-6 font-headline font-bold text-xs text-slate-400 uppercase tracking-widest">Course Enrollment</th>
              <th className="p-6 font-headline font-bold text-xs text-slate-400 uppercase tracking-widest">Progress</th>
              <th className="p-6 font-headline font-bold text-xs text-slate-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[
              { name: 'Sarah Jepchirchir', email: 'sarah.j@example.com', img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800', course: 'Strategic Business Growth', progress: 85 },
              { name: 'John Kamau', email: 'john.k@example.com', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800', course: 'Digital Marketing Essentials', progress: 45 },
              { name: 'Faith Mutua', email: 'faith.m@example.com', img: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800', course: 'Strategic Business Growth', progress: 100 },
            ].map((student, idx) => (
              <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <img src={student.img} alt={student.name} className="w-10 h-10 rounded-full object-cover shadow-sm group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-headline font-bold text-[#002366] text-sm">{student.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{student.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  <span className="text-xs font-bold text-[#002366]">{student.course}</span>
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-24 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${student.progress}%` }}
                        className={`h-full ${student.progress === 100 ? 'bg-emerald-500' : 'bg-primary'} rounded-full`}
                      />
                    </div>
                    <span className="text-[10px] font-black text-slate-400">{student.progress}%</span>
                  </div>
                </td>
                <td className="p-6 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button 
                      onClick={() => window.location.href = `mailto:${student.email}`}
                      title="Send Email"
                      className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                      <Mail size={16} />
                    </button>
                    <button 
                      onClick={() => alert(`Starting a chat with ${student.name}... (Messaging feature coming soon)`)}
                      title="Send Message"
                      className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                      <MessageSquare size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Overlay-ish footer */}
        <div className="p-6 flex items-center justify-between border-t border-slate-50">
          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Showing 3 of 1,248 students</p>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-slate-100 rounded-xl text-slate-300 pointer-events-none">
              <ChevronLeft size={18} />
            </button>
            <button className="p-2 border border-slate-100 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
