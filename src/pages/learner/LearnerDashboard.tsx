import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Award, 
  Compass, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X,
  Bell,
  HelpCircle,
  Search
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'motion/react';

export default function LearnerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (sessionStorage.getItem('showWelcomeBanner') === 'true') {
      setShowWelcomeBanner(true);
      sessionStorage.removeItem('showWelcomeBanner');
    }
  }, []);

  const navItems = [
    { name: 'Dashboard', path: '/learner-dashboard', icon: LayoutDashboard },
    { name: 'My Courses', path: '/learner-dashboard/courses', icon: BookOpen },
    { name: 'Certificates', path: '/learner-dashboard/certificates', icon: Award },
    { name: 'Explore', path: '/learner-dashboard/explore', icon: Compass },
    { name: 'Profile', path: '/learner-dashboard/profile', icon: User },
    { name: 'Settings', path: '/learner-dashboard/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#fcf9f4] font-body flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-white border-r border-[#c5c6d2]/20 
        flex flex-col transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="https://drive.google.com/thumbnail?id=11ee_UL2J5eym9KSOjW98ttpk78O11E4Z&sz=w500" alt="SkillsZone Africa" className="h-8 object-contain" referrerPolicy="no-referrer" />
          </Link>
          <button className="lg:hidden text-[#444650]" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all
                  ${isActive 
                    ? 'bg-[#00113a] text-white shadow-md' 
                    : 'text-[#444650] hover:bg-[#f6f3ee] hover:text-[#00113a]'
                  }
                `}
              >
                <Icon size={20} className={isActive ? 'text-[#ffbf00]' : ''} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#c5c6d2]/20">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl font-semibold text-[#d93025] hover:bg-[#fce8e6] transition-all"
          >
            <LogOut size={20} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-[#fcf9f4]/80 backdrop-blur-md border-b border-[#c5c6d2]/20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-[#00113a]"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 text-[#6B7280]" size={18} />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="pl-10 pr-4 py-2 bg-white border border-[#c5c6d2]/40 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#00113a]/20 w-64"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsHelpOpen(false);
                }}
                className="w-10 h-10 rounded-full bg-white border border-[#c5c6d2]/40 flex items-center justify-center text-[#444650] hover:text-[#00113a] hover:border-[#00113a]/20 transition-all relative"
              >
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#d93025] rounded-full"></span>
              </button>
              
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#c5c6d2]/20 overflow-hidden z-50">
                  <div className="p-4 border-b border-[#c5c6d2]/20 flex justify-between items-center">
                    <h3 className="font-bold text-[#00113a]">Notifications</h3>
                    <button className="text-xs text-[#00113a] hover:underline">Mark all as read</button>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    <div className="p-4 border-b border-[#c5c6d2]/10 hover:bg-[#f6f3ee] transition-colors cursor-pointer">
                      <p className="text-sm font-semibold text-[#00113a]">New Course Available</p>
                      <p className="text-xs text-[#6B7280] mt-1">Advanced React Patterns is now available in your learning path.</p>
                      <p className="text-[10px] text-[#6B7280] mt-2">2 hours ago</p>
                    </div>
                    <div className="p-4 hover:bg-[#f6f3ee] transition-colors cursor-pointer">
                      <p className="text-sm font-semibold text-[#00113a]">Assignment Graded</p>
                      <p className="text-xs text-[#6B7280] mt-1">Your final project for Data Science 101 has been graded.</p>
                      <p className="text-[10px] text-[#6B7280] mt-2">1 day ago</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Help */}
            <div className="relative">
              <button 
                onClick={() => {
                  setIsHelpOpen(!isHelpOpen);
                  setIsNotificationsOpen(false);
                }}
                className="w-10 h-10 rounded-full bg-white border border-[#c5c6d2]/40 flex items-center justify-center text-[#444650] hover:text-[#00113a] hover:border-[#00113a]/20 transition-all"
              >
                <HelpCircle size={20} />
              </button>

              {isHelpOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#c5c6d2]/20 overflow-hidden z-50">
                  <div className="p-4 border-b border-[#c5c6d2]/20">
                    <h3 className="font-bold text-[#00113a]">Help & Support</h3>
                  </div>
                  <div className="p-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-[#444650] hover:bg-[#f6f3ee] rounded-lg transition-colors">Help Center</button>
                    <button className="w-full text-left px-4 py-2 text-sm text-[#444650] hover:bg-[#f6f3ee] rounded-lg transition-colors">Contact Support</button>
                    <button className="w-full text-left px-4 py-2 text-sm text-[#444650] hover:bg-[#f6f3ee] rounded-lg transition-colors">Community Forum</button>
                  </div>
                </div>
              )}
            </div>

            <Link to="/learner-dashboard/profile" className="w-10 h-10 rounded-full bg-[#00113a] overflow-hidden border-2 border-white shadow-sm hover:ring-2 hover:ring-[#ffbf00] transition-all">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" 
                alt="Aisha" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 md:p-8 flex-1" onClick={() => { setIsNotificationsOpen(false); setIsHelpOpen(false); }}>
          <AnimatePresence>
            {showWelcomeBanner && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                className="bg-[#FFBF00] text-[#00113a] p-4 rounded-2xl mb-6 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎉</span>
                  <p className="font-bold">
                    Welcome to SkillZone, {user?.name || 'Learner'}! We've picked some courses just for you.
                  </p>
                </div>
                <button 
                  onClick={() => setShowWelcomeBanner(false)}
                  className="text-[#00113a]/60 hover:text-[#00113a] transition-colors"
                >
                  <X size={20} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
