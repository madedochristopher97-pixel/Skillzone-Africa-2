import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function InstructorCourses() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-headline font-black text-3xl text-primary tracking-tighter">Course Management</h2>
          <p className="text-slate-500 font-body mt-2">Create, edit, and manage your course catalog.</p>
        </div>
        <button 
          onClick={() => navigate('/instructor-dashboard/course-builder')}
          className="bg-primary text-white px-6 py-3 rounded-xl font-headline font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Course
        </button>
      </div>

      <div className="bg-surface-container-lowest p-12 rounded-3xl text-center border-2 border-dashed border-surface-variant">
        <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl text-slate-400">school</span>
        </div>
        <h3 className="font-headline font-bold text-xl text-primary mb-2">No active courses yet</h3>
        <p className="text-slate-500 max-w-md mx-auto mb-8">You haven't published any courses yet. Start building your curriculum to reach students across Africa.</p>
        <button 
          onClick={() => navigate('/instructor-dashboard/course-builder')}
          className="bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-full font-headline font-bold text-sm hover:opacity-90 transition-all"
        >
          Create Your First Course
        </button>
      </div>
    </div>
  );
}
