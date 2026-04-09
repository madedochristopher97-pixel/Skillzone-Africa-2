import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, ExternalLink, Bell, User, LogOut, LayoutDashboard, Award, Settings } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { useAuth } from '../context/AuthContext';
import { DURATIONS, EASINGS, SPRINGS } from '../constants/animations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate('/');
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-[#fcf9f4] border-b border-[#c5c6d2]/20">
      <nav className="flex items-center justify-between gap-6 max-w-7xl mx-auto px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="https://drive.google.com/thumbnail?id=11ee_UL2J5eym9KSOjW98ttpk78O11E4Z&sz=w500" alt="SkillsZone Africa" className="h-8 object-contain" referrerPolicy="no-referrer" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center flex-grow gap-6">
          {/* Browse Dropdown */}
          <div className="relative group">
            <Link to="/courses" className="relative flex items-center gap-1.5 text-[#00113a] font-semibold text-sm font-body py-2 overflow-hidden">
              Browse
              <ChevronDown size={18} className="group-hover:rotate-180 transition-transform duration-300" />
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-[#ffbf00]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: DURATIONS.fast, ease: EASINGS.default }}
              />
            </Link>
            
            {/* Invisible bridge to keep hover active */}
            <div className="absolute top-full left-0 pt-4 w-[850px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-[#ffffff] rounded-3xl shadow-[0_32px_64px_rgba(28,28,25,0.08)] p-10 grid grid-cols-12 gap-12 cursor-default border border-[#f6f3ee]">
                {/* Left Column - 7 cols */}
                <div className="col-span-7">
                  <span className="text-[#ffdfa0] bg-[#00113a] px-3 py-1 rounded-full text-[0.65rem] font-bold tracking-widest mb-8 inline-block uppercase">Classes by Category</span>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {CATEGORIES.map((category) => (
                      <Link 
                        key={category.id} 
                        to={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="font-body text-[1.05rem] font-semibold text-[#00113a] hover:text-[#ffbf00] transition-colors block"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right Column - 5 cols */}
                <div className="col-span-5 flex flex-col gap-8">
                  {/* By Content Type */}
                  <div>
                    <span className="text-[#00113a] text-[0.65rem] font-bold tracking-widest mb-4 block uppercase opacity-50">By Content Type</span>
                    <div className="flex flex-col gap-2">
                      <Link to="/classes" className="bg-[#f6f3ee] hover:bg-[#fcf9f4] hover:shadow-[0_8px_24px_rgba(28,28,25,0.06)] transition-all rounded-2xl px-5 py-3.5 text-[#00113a] font-body font-semibold text-sm">All Classes</Link>
                      <Link to="/paths" className="bg-[#f6f3ee] hover:bg-[#fcf9f4] hover:shadow-[0_8px_24px_rgba(28,28,25,0.06)] transition-all rounded-2xl px-5 py-3.5 text-[#00113a] font-body font-semibold text-sm">All Learning Paths</Link>
                      <Link to="/projects" className="bg-[#f6f3ee] hover:bg-[#fcf9f4] hover:shadow-[0_8px_24px_rgba(28,28,25,0.06)] transition-all rounded-2xl px-5 py-3.5 text-[#00113a] font-body font-semibold text-sm">All Student Projects</Link>
                    </div>
                  </div>

                  {/* Shop */}
                  <div>
                    <span className="text-[#00113a] text-[0.65rem] font-bold tracking-widest mb-4 block uppercase opacity-50">Shop</span>
                    <div className="flex flex-col gap-2">
                      <Link to="/shop/digital" className="bg-[#f6f3ee] hover:bg-[#fcf9f4] hover:shadow-[0_8px_24px_rgba(28,28,25,0.06)] transition-all rounded-2xl px-5 py-3.5 text-[#00113a] font-body font-semibold text-sm">Digital Products</Link>
                      <Link to="/shop/1on1" className="bg-[#f6f3ee] hover:bg-[#fcf9f4] hover:shadow-[0_8px_24px_rgba(28,28,25,0.06)] transition-all rounded-2xl px-5 py-3.5 text-[#00113a] font-body font-semibold text-sm">1-on-1 Sessions</Link>
                      <Link to="/shop/live" className="bg-[#f6f3ee] hover:bg-[#fcf9f4] hover:shadow-[0_8px_24px_rgba(28,28,25,0.06)] transition-all rounded-2xl px-5 py-3.5 text-[#00113a] font-body font-semibold text-sm">Live Sessions</Link>
                    </div>
                  </div>

                  {/* Explore */}
                  <div>
                    <span className="text-[#00113a] text-[0.65rem] font-bold tracking-widest mb-4 block uppercase opacity-50">Explore</span>
                    <div className="flex flex-col gap-2">
                      <Link to="/blog" className="bg-[#f6f3ee] hover:bg-[#fcf9f4] hover:shadow-[0_8px_24px_rgba(28,28,25,0.06)] transition-all rounded-2xl px-5 py-3.5 text-[#00113a] font-body font-semibold text-sm flex items-center justify-between group/link">
                        Blog
                        <ExternalLink size={16} className="opacity-40 group-hover/link:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#444650] w-5 h-5 pointer-events-none" />
            <input 
              className="w-full bg-white border border-[#c5c6d2]/50 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbf00] focus:border-transparent placeholder:text-[#444650]/60" 
              placeholder="Search classes, digital products, teachers, and more" 
              type="text"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6 ml-auto whitespace-nowrap">
          {isAuthenticated ? (
            <>
              <Link to="/learner-dashboard" className="relative text-[#00113a] font-bold text-sm group">
                My Learning
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#ffbf00]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: DURATIONS.fast, ease: EASINGS.default }}
                />
              </Link>
              <motion.button 
                whileHover={{ rotate: [0, 12, 0], scale: 1.15 }}
                transition={{ 
                  rotate: { duration: 0.4, ease: EASINGS.default },
                  scale: { duration: 0.15, ease: EASINGS.default }
                }}
                className="text-[#00113a] hover:text-[#ffbf00] transition-colors relative"
              >
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#d93025] rounded-full"></span>
              </motion.button>
              <div className="relative">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-10 h-10 rounded-full bg-[#00113a] overflow-hidden border-2 border-white shadow-sm hover:ring-2 hover:ring-[#ffbf00] transition-all"
                >
                  <img 
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.button>
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: DURATIONS.fast, ease: EASINGS.enter }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#c5c6d2]/20 overflow-hidden z-50"
                    >
                      <div className="p-4 border-b border-[#c5c6d2]/20">
                        <p className="font-bold text-[#00113a] truncate">{user?.name}</p>
                        <p className="text-xs text-[#6B7280] truncate">{user?.email}</p>
                      </div>
                      <div className="p-2">
                        <Link to="/learner-dashboard" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-4 py-2 text-sm text-[#444650] hover:bg-[#f6f3ee] rounded-lg transition-colors">
                          <LayoutDashboard size={16} />
                          My Dashboard
                        </Link>
                        <Link to="/learner-dashboard/certificates" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-4 py-2 text-sm text-[#444650] hover:bg-[#f6f3ee] rounded-lg transition-colors">
                          <Award size={16} />
                          My Certificates
                        </Link>
                        <Link to="/learner-dashboard/settings" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-4 py-2 text-sm text-[#444650] hover:bg-[#f6f3ee] rounded-lg transition-colors">
                          <Settings size={16} />
                          Account Settings
                        </Link>
                      </div>
                      <div className="p-2 border-t border-[#c5c6d2]/20">
                        <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-2 text-sm text-[#d93025] hover:bg-[#fce8e6] rounded-lg transition-colors">
                          <LogOut size={16} />
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
          ) : (
            <>
              <Link to="/auth" state={{ isSignUp: false }} className="relative text-[#00113a] font-bold text-sm group">
                Sign In
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#ffbf00]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: DURATIONS.fast, ease: EASINGS.default }}
                />
              </Link>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.1 }}
              >
                <Link to="/auth" state={{ isSignUp: true }} className="bg-[#ffbf00] text-[#6d5000] px-6 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-[#ffdfa0] block">
                  Sign Up
                </Link>
              </motion.div>
            </>
          )}
        </div>

        <button className="lg:hidden text-[#00113a]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#fcf9f4] border-b border-[#c5c6d2]/20 px-8 py-6 space-y-6"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#444650] w-5 h-5" />
            <input 
              className="w-full bg-white border border-[#c5c6d2]/50 rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#ffbf00] outline-none" 
              placeholder="Search classes..." 
              type="text"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Link 
              className="text-[#00113a] font-bold text-lg" 
              to="/courses"
              onClick={() => setIsOpen(false)}
            >
              Browse Courses
            </Link>
            {isAuthenticated && (
              <Link 
                className="text-[#00113a] font-bold text-lg" 
                to="/learner-dashboard"
                onClick={() => setIsOpen(false)}
              >
                My Learning
              </Link>
            )}
          </div>
          <div className="flex flex-col gap-4 pt-4 border-t border-[#c5c6d2]/20">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="text-[#d93025] font-bold text-lg text-left">Sign Out</button>
            ) : (
              <>
                <Link to="/auth" state={{ isSignUp: false }} className="text-[#00113a] font-bold text-lg" onClick={() => setIsOpen(false)}>Sign In</Link>
                <Link to="/auth" state={{ isSignUp: true }} className="bg-[#ffbf00] text-[#6d5000] px-6 py-3 rounded-lg font-bold text-center hover:bg-[#ffdfa0]" onClick={() => setIsOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
}
