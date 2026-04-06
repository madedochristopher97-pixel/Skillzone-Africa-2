import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export default function InstructorDashboard() {
  const location = useLocation();
  const isCourseBuilder = location.pathname.includes('/course-builder');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [helpQuery, setHelpQuery] = useState('');
  const [helpSubmitted, setHelpSubmitted] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 py-3 font-headline font-medium text-sm tracking-tight transition-all duration-200 ${
      isActive 
        ? "px-4 bg-white text-[#002366] rounded-l-full shadow-sm ml-4 translate-x-1" 
        : "px-8 text-slate-600 hover:bg-white/50"
    }`;

  return (
    <div className="min-h-screen bg-[#fcf9f4] text-[#1c1c19] font-body">
      {/* SideNavBar Component */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#f6f3ee] flex flex-col py-8 z-50">
        <div className="px-8 mb-12">
          <img 
            src="https://drive.google.com/thumbnail?id=11ee_UL2J5eym9KSOjW98ttpk78O11E4Z&sz=w500" 
            alt="SkillsZone Africa Logo" 
            className="h-8 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="mt-8 flex flex-col items-center text-center">
            <div className="relative">
              <img 
                alt="Instructor Profile Image" 
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm" 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800" 
              />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">Instructor</span>
            </div>
            <h2 className="font-headline font-bold text-[#002366] mt-4">Fredrick</h2>
            <p className="text-xs text-slate-500 font-medium">Expert Mentor</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          <NavLink to="/instructor-dashboard" end className={navLinkClass}>
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </NavLink>
          <NavLink to="/instructor-dashboard/courses" className={navLinkClass}>
            <span className="material-symbols-outlined">school</span>
            Courses
          </NavLink>
          <NavLink to="/instructor-dashboard/course-builder" className={navLinkClass}>
            <span className="material-symbols-outlined">architecture</span>
            Course Builder
          </NavLink>
          <NavLink to="/instructor-dashboard/uploads" className={navLinkClass}>
            <span className="material-symbols-outlined">upload_file</span>
            Uploads
          </NavLink>
          <NavLink to="/instructor-dashboard/earnings" className={navLinkClass}>
            <span className="material-symbols-outlined">payments</span>
            Earnings
          </NavLink>
          <NavLink to="/instructor-dashboard/students" className={navLinkClass}>
            <span className="material-symbols-outlined">group</span>
            Students
          </NavLink>
          <NavLink to="/instructor-dashboard/settings" className={navLinkClass}>
            <span className="material-symbols-outlined">settings</span>
            Settings
          </NavLink>
        </nav>
        <div className="px-6 mt-auto">
          <NavLink to="/instructor-dashboard/course-builder" className="w-full py-4 bg-primary text-white rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all">
            <span className="material-symbols-outlined text-sm">add</span>
            Create New Course
          </NavLink>
        </div>
      </aside>
      {/* Main Canvas */}
      <main className="ml-64 min-h-screen flex flex-col">
        {/* TopAppBar Component */}
        <header className="flex justify-between items-center h-20 px-12 sticky top-0 bg-[#fcf9f4]/80 backdrop-blur-md z-40">
          <div className="flex items-center gap-4">
            <h1 className="font-headline font-extrabold text-2xl text-primary tracking-tight">Dashboard</h1>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative group">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 group-focus-within:text-secondary transition-colors">
                <span className="material-symbols-outlined">search</span>
              </span>
              <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-secondary-fixed w-64 transition-all" placeholder="Search courses..." type="text" />
            </div>
            <div className="flex items-center gap-4 relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="text-slate-500 hover:text-primary transition-all relative"
              >
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute top-12 right-12 w-80 bg-white rounded-2xl shadow-xl border border-surface-container-highest overflow-hidden z-50">
                  <div className="p-4 border-b border-surface-container-highest bg-surface-container-low">
                    <h3 className="font-headline font-bold text-primary">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <div className="p-4 border-b border-surface-container-highest hover:bg-surface-container-low transition-colors cursor-pointer">
                      <p className="font-body text-sm text-primary"><span className="font-bold">New Student!</span> Sarah M. enrolled in "Strategic Business Growth".</p>
                      <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
                    </div>
                    <div className="p-4 border-b border-surface-container-highest hover:bg-surface-container-low transition-colors cursor-pointer">
                      <p className="font-body text-sm text-primary"><span className="font-bold">Course Milestone:</span> You reached 500 students!</p>
                      <p className="text-xs text-slate-500 mt-1">1 day ago</p>
                    </div>
                    <div className="p-4 hover:bg-surface-container-low transition-colors cursor-pointer">
                      <p className="font-body text-sm text-primary"><span className="font-bold">New Follower:</span> John D. started following you.</p>
                      <p className="text-xs text-slate-500 mt-1">3 days ago</p>
                    </div>
                  </div>
                  <div className="p-3 text-center border-t border-surface-container-highest">
                    <button className="text-sm font-bold text-secondary font-headline hover:underline">Mark all as read</button>
                  </div>
                </div>
              )}

              <button 
                onClick={() => setShowHelpModal(true)}
                className="text-slate-500 hover:text-primary transition-all"
              >
                <span className="material-symbols-outlined">help_outline</span>
              </button>
            </div>
          </div>
        </header>
        {/* Page Content */}
        <div className="p-12 flex-1">
          <Outlet />
        </div>
      </main>
      
      {/* Contextual FAB */}
      {!isCourseBuilder && (
        <NavLink to="/instructor-dashboard/course-builder" className="fixed bottom-12 right-12 bg-secondary-container text-on-secondary-container px-8 py-5 rounded-full font-headline font-black text-lg flex items-center gap-3 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 z-50">
          <span className="material-symbols-outlined text-2xl">upload</span>
          Upload New Course
        </NavLink>
      )}

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => {
                setShowHelpModal(false);
                setHelpSubmitted(false);
                setHelpQuery('');
              }}
              className="absolute top-6 right-6 text-slate-400 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            {!helpSubmitted ? (
              <>
                <h2 className="font-headline font-bold text-2xl text-primary mb-2">Need Help?</h2>
                <p className="text-slate-600 mb-6 text-sm">Send us your question and our support team will reply directly to your email.</p>
                
                <textarea 
                  value={helpQuery}
                  onChange={(e) => setHelpQuery(e.target.value)}
                  placeholder="Describe your issue or question here..."
                  className="w-full h-32 p-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-secondary-fixed resize-none mb-6 text-sm"
                ></textarea>
                
                <button 
                  onClick={() => {
                    if(helpQuery.trim()) setHelpSubmitted(true);
                  }}
                  disabled={!helpQuery.trim()}
                  className="w-full py-4 bg-primary text-white rounded-xl font-headline font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <h2 className="font-headline font-bold text-2xl text-primary mb-2">Message Sent!</h2>
                <p className="text-slate-600 text-sm">We've received your query and will get back to you via email shortly.</p>
                <button 
                  onClick={() => {
                    setShowHelpModal(false);
                    setTimeout(() => {
                      setHelpSubmitted(false);
                      setHelpQuery('');
                    }, 300);
                  }}
                  className="mt-8 px-8 py-3 bg-surface-container-low text-primary rounded-xl font-headline font-bold hover:bg-surface-container-highest transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
