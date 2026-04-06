import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Wand2, 
  CloudUpload, 
  CreditCard, 
  Users, 
  Settings,
  Plus,
  Search,
  Bell,
  HelpCircle,
  X,
  Check
} from 'lucide-react';

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
            <LayoutDashboard size={20} strokeWidth={2} />
            Dashboard
          </NavLink>
          <NavLink to="/instructor-dashboard/courses" className={navLinkClass}>
            <BookOpen size={20} strokeWidth={2} />
            Courses
          </NavLink>
          <NavLink to="/instructor-dashboard/course-builder" className={navLinkClass}>
            <Wand2 size={20} strokeWidth={2} />
            Course Builder
          </NavLink>
          <NavLink to="/instructor-dashboard/uploads" className={navLinkClass}>
            <CloudUpload size={20} strokeWidth={2} />
            Uploads
          </NavLink>
          <NavLink to="/instructor-dashboard/earnings" className={navLinkClass}>
            <CreditCard size={20} strokeWidth={2} />
            Earnings
          </NavLink>
          <NavLink to="/instructor-dashboard/students" className={navLinkClass}>
            <Users size={20} strokeWidth={2} />
            Students
          </NavLink>
          <NavLink to="/instructor-dashboard/settings" className={navLinkClass}>
            <Settings size={20} strokeWidth={2} />
            Settings
          </NavLink>
        </nav>
        <div className="px-6 mt-auto">
          <NavLink to="/instructor-dashboard/course-builder" className="w-full py-4 bg-primary text-white rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all">
            <Plus size={18} strokeWidth={3} />
            Create New Course
          </NavLink>
        </div>
      </aside>
      
      {/* Main Canvas */}
      <div className="ml-64 min-h-screen flex flex-col">
        {/* Top Header */}
        {!isCourseBuilder && (
          <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-40">
            <div className="flex-1 max-w-xl">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search your courses, students, or resources..." 
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition-all relative"
                >
                  <Bell size={20} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <h4 className="font-headline font-bold text-sm mb-4">Notifications</h4>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                          <Users size={14} />
                        </div>
                        <div>
                          <p className="text-xs font-medium">New student enrolled</p>
                          <p className="text-[10px] text-slate-500">Sarah joined "Strategic Business Growth"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => setShowHelpModal(true)}
                className="w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition-all"
              >
                <HelpCircle size={20} />
              </button>
              
              <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
              
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold font-headline text-[#002366]">Fredrick O.</p>
                  <p className="text-[10px] text-slate-500 font-medium">Pro Instructor</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-headline font-bold">
                  FO
                </div>
              </div>
            </div>
          </header>
        )}

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 bg-[#00113a]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] max-w-lg w-full p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => {
                setShowHelpModal(false);
                setHelpSubmitted(false);
              }}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
            >
              <X size={24} />
            </button>
            
            {!helpSubmitted ? (
              <>
                <h3 className="font-headline font-bold text-2xl text-[#00113a] mb-2">How can we help?</h3>
                <p className="text-slate-600 text-sm mb-6">Describe the issue you're facing and our technical team will reach out within 24 hours.</p>
                
                <textarea 
                  value={helpQuery}
                  onChange={(e) => setHelpQuery(e.target.value)}
                  placeholder="Tell us what's happening..."
                  className="w-full h-32 p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all resize-none mb-6 text-sm"
                ></textarea>
                
                <button 
                  onClick={() => setHelpSubmitted(true)}
                  className="w-full py-4 bg-primary text-white rounded-xl font-headline font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20"
                >
                  Send Request
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={32} strokeWidth={3} />
                </div>
                <h3 className="font-headline font-bold text-2xl text-[#00113a] mb-2">Request Sent!</h3>
                <p className="text-slate-600 text-sm">We've received your query. Check your inbox for a ticket confirmation soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
