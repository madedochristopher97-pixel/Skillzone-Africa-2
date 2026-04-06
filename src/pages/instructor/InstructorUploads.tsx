import React from 'react';
import { CloudUpload, FileText, Video, MoreVertical, Plus } from 'lucide-react';
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

export default function InstructorUploads() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto space-y-10"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-headline font-black text-3xl text-[#00113a]">Resource Library</h1>
          <p className="text-slate-500 mt-1 font-medium">Manage your course attachments, videos, and reading materials.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-headline font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20">
          <Plus size={18} strokeWidth={3} />
          Upload New File
        </button>
      </header>

      {/* Upload Zone */}
      <motion.div variants={itemVariants} className="bg-white border-2 border-dashed border-slate-200 rounded-[2.5rem] p-12 text-center group hover:border-primary/50 transition-all cursor-pointer">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all mb-4">
            <CloudUpload size={32} />
          </div>
          <h3 className="font-headline font-bold text-lg text-[#00113a]">Click or drag files to upload</h3>
          <p className="text-sm text-slate-500 mt-1">Support for MP4, PDF, PNG, and DOCX (Max 500MB)</p>
        </div>
      </motion.div>

      {/* Files Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Syllabus_2024.pdf', type: 'PDF', size: '2.4 MB', icon: <FileText size={24} /> },
          { name: 'Introduction_Video.mp4', type: 'Video', size: '124.8 MB', icon: <Video size={24} /> },
          { name: 'Marketing_Canvas.pdf', type: 'PDF', size: '5.1 MB', icon: <FileText size={24} /> },
        ].map((file, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
              {file.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-headline font-bold text-sm text-[#002366] truncate">{file.name}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{file.type}</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{file.size}</span>
              </div>
            </div>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <MoreVertical size={18} />
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
