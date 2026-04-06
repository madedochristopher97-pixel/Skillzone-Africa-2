import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Play, 
  Settings, 
  Maximize, 
  Edit3, 
  FolderOpen, 
  Bold, 
  Italic, 
  List, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  PlayCircle, 
  Lock, 
  ArrowLeft, 
  ArrowRight,
  UserCircle,
  BookOpen,
  MessageSquare,
  LayoutDashboard,
  Award,
  LogOut
} from 'lucide-react';
import { ALL_COURSES } from '../constants';
import { useAuth } from '../context/AuthContext';

export default function CoursePlayer() {
  const { courseId } = useParams();
  const course = ALL_COURSES.find(c => c.id === courseId) || ALL_COURSES[0];
  const [activeTab, setActiveTab] = useState('notes');
  const [expandedModules, setExpandedModules] = useState<number[]>([1]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate('/');
  };

  const toggleModule = (index: number) => {
    setExpandedModules(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const modules = [
    {
      title: "Foundation",
      lessons: [
        { title: "The Griot Strategy", completed: true },
        { title: "Defining Your Market", completed: true }
      ]
    },
    {
      title: "Advanced Growth",
      lessons: [
        { title: "Market Analysis", active: true },
        { title: "Competitive Edge", locked: true }
      ]
    },
    {
      title: "Scalability",
      lessons: [
        { title: "Scaling Operations", locked: true },
        { title: "Building a Team", locked: true }
      ]
    },
    {
      title: "Final Pitch",
      lessons: [
        { title: "Crafting Your Story", locked: true },
        { title: "Delivering the Pitch", locked: true }
      ]
    }
  ];

  return (
    <div className="bg-[#f7f4ef] text-[#1c1c19] antialiased min-h-screen font-body">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#00113a] shadow-md font-headline text-white">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <img src="/Logo 2@2x.png" alt="SkillsZone Africa" className="h-8 object-contain" />
          </Link>
          <div className="hidden md:block h-6 w-px bg-white/20"></div>
          <span className="hidden md:inline-block text-sm font-medium text-slate-200 truncate max-w-xs lg:max-w-md">
            {course.title}
          </span>
        </div>

        <div className="flex-1 max-w-md px-8 hidden md:flex items-center gap-3">
          <div className="flex-1 bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="bg-[#ffbf00] h-full w-[40%]"></div>
          </div>
          <span className="text-xs font-bold text-[#ffbf00]">40%</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6 text-sm">
            <Link to="/learner-dashboard/courses" className="text-slate-300 hover:text-white transition-colors">My Courses</Link>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Community</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Resources</a>
          </div>
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="hover:bg-white/10 transition-colors p-2 rounded-full scale-95 active:scale-90"
            >
              {user ? (
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
                  <img 
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <UserCircle className="text-[#ffbf00] w-6 h-6" />
              )}
            </button>
            {isProfileOpen && user && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#c5c6d2]/20 overflow-hidden z-50 text-[#1c1c19] font-body">
                <div className="p-4 border-b border-[#c5c6d2]/20">
                  <p className="font-bold text-[#00113a] truncate">{user.name}</p>
                  <p className="text-xs text-[#6B7280] truncate">{user.email}</p>
                </div>
                <div className="p-2">
                  <Link to="/learner-dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-[#444650] hover:bg-[#f6f3ee] rounded-lg transition-colors">
                    <LayoutDashboard size={16} />
                    My Dashboard
                  </Link>
                  <Link to="/learner-dashboard/certificates" className="flex items-center gap-3 px-4 py-2 text-sm text-[#444650] hover:bg-[#f6f3ee] rounded-lg transition-colors">
                    <Award size={16} />
                    My Certificates
                  </Link>
                  <Link to="/learner-dashboard/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-[#444650] hover:bg-[#f6f3ee] rounded-lg transition-colors">
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
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="pt-16 min-h-screen flex flex-col md:flex-row relative">
        {/* Left Content Area */}
        <section className="flex-1 overflow-y-auto pb-24 md:pb-12">
          <div className="max-w-5xl mx-auto p-6 lg:p-10 space-y-10">
            {/* Video Player Section */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#c5c6d2]/30">
              <div className="relative aspect-video bg-[#002366] rounded-xl overflow-hidden shadow-lg group">
                <img 
                  alt="Course Video Thumbnail" 
                  className="w-full h-full object-cover opacity-70" 
                  src={course.image} 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-[#ffbf00] text-[#00113a] rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95">
                    <Play className="w-10 h-10 ml-1" fill="currentColor" />
                  </button>
                </div>
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex flex-col gap-3">
                    <div className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer">
                      <div className="absolute left-0 top-0 h-full w-1/3 bg-[#ffbf00] rounded-full">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#ffbf00] border-2 border-white rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-white text-xs font-bold font-headline">
                      <span>12:45 / 24:00</span>
                      <div className="flex gap-4">
                        <Settings className="w-5 h-5 cursor-pointer hover:text-[#ffbf00]" />
                        <Maximize className="w-5 h-5 cursor-pointer hover:text-[#ffbf00]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Header */}
            <div className="space-y-4 pt-4">
              <span className="text-[#795900] font-bold text-xs tracking-[0.2em] uppercase font-headline">Currently Learning</span>
              <h1 className="text-3xl md:text-5xl font-headline font-extrabold text-[#00113a] leading-tight">Module 2: Market Analysis</h1>
            </div>

            {/* Tabs Section */}
            <div className="space-y-8">
              <div className="flex gap-10 border-b border-[#c5c6d2]/50">
                <button 
                  onClick={() => setActiveTab('notes')}
                  className={`pb-5 font-bold flex items-center gap-2 font-headline transition-all ${
                    activeTab === 'notes' 
                      ? 'text-[#00113a] border-b-4 border-[#ffbf00]' 
                      : 'text-[#757682] hover:text-[#00113a]'
                  }`}
                >
                  <Edit3 className="w-5 h-5" />
                  Notes
                </button>
                <button 
                  onClick={() => setActiveTab('resources')}
                  className={`pb-5 font-bold flex items-center gap-2 font-headline transition-all ${
                    activeTab === 'resources' 
                      ? 'text-[#00113a] border-b-4 border-[#ffbf00]' 
                      : 'text-[#757682] hover:text-[#00113a]'
                  }`}
                >
                  <FolderOpen className="w-5 h-5" />
                  Resources
                </button>
              </div>

              {/* Active Tab Content: Notes */}
              {activeTab === 'notes' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-[#c5c6d2]/30 min-h-[400px] flex flex-col gap-6"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-headline font-bold text-xl text-[#00113a]">Your Study Notes</h3>
                    <div className="flex gap-2">
                      <button className="p-2.5 rounded-lg hover:bg-[#f7f4ef] text-[#757682] transition-colors">
                        <Bold className="w-5 h-5" />
                      </button>
                      <button className="p-2.5 rounded-lg hover:bg-[#f7f4ef] text-[#757682] transition-colors">
                        <Italic className="w-5 h-5" />
                      </button>
                      <button className="p-2.5 rounded-lg hover:bg-[#f7f4ef] text-[#757682] transition-colors">
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <textarea 
                    className="flex-1 w-full bg-transparent border-none focus:ring-0 text-[#1c1c19] leading-relaxed resize-none p-0 text-lg placeholder:text-[#757682]/50 outline-none" 
                    placeholder="Start typing your insights here... The Griot's wisdom is best captured in the moment."
                  ></textarea>
                  <div className="flex justify-end pt-6 border-t border-[#c5c6d2]/30">
                    <button className="bg-[#00113a] text-white px-8 py-3 rounded-xl text-sm font-bold font-headline hover:bg-[#00113a]/90 transition-all shadow-md active:scale-95">
                      Save Progress
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Active Tab Content: Resources */}
              {activeTab === 'resources' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-[#c5c6d2]/30 min-h-[400px]"
                >
                  <h3 className="font-headline font-bold text-xl text-[#00113a] mb-6">Downloads & Links</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between p-4 rounded-xl border border-[#c5c6d2]/30 hover:bg-[#f7f4ef] transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FolderOpen className="text-[#002366] w-5 h-5" />
                        <span className="font-semibold text-[#00113a]">Market Analysis Template (PDF)</span>
                      </div>
                      <span className="text-sm text-[#757682]">2.4 MB</span>
                    </li>
                    <li className="flex items-center justify-between p-4 rounded-xl border border-[#c5c6d2]/30 hover:bg-[#f7f4ef] transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FolderOpen className="text-[#002366] w-5 h-5" />
                        <span className="font-semibold text-[#00113a]">Competitor Matrix (Excel)</span>
                      </div>
                      <span className="text-sm text-[#757682]">1.1 MB</span>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Right Sidebar: Curriculum */}
        <aside className="hidden md:flex flex-col w-[380px] bg-white border-l border-[#c5c6d2]/40 h-[calc(100vh-64px)] sticky top-16 shadow-[-4px_0_15px_rgba(0,0,0,0.02)]">
          <div className="p-8 pb-4 space-y-2">
            <h2 className="font-headline font-extrabold text-xl text-[#00113a] tracking-tight">Mastering the Craft</h2>
            <p className="text-xs font-bold text-[#795900] tracking-wider uppercase">Module 2: Advanced Growth</p>
          </div>
          
          <div className="flex-1 overflow-y-auto px-4 pb-32" style={{ scrollbarWidth: 'thin', scrollbarColor: '#c5c6d2 transparent' }}>
            <div className="space-y-6 pt-4">
              {modules.map((module, mIndex) => {
                const isExpanded = expandedModules.includes(mIndex);
                const isLocked = mIndex > 1; // Mock logic for locked modules

                return (
                  <div key={mIndex} className={`space-y-2 ${isLocked ? 'opacity-50' : ''}`}>
                    <button 
                      onClick={() => !isLocked && toggleModule(mIndex)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors text-left group ${
                        isExpanded && !isLocked ? 'bg-[#f7f4ef]/50' : 'hover:bg-[#f7f4ef]'
                      }`}
                    >
                      <span className="text-sm font-bold text-[#00113a] font-headline">Module {mIndex + 1}: {module.title}</span>
                      {isExpanded ? (
                        <ChevronUp className="text-[#00113a] w-5 h-5" />
                      ) : (
                        <ChevronDown className="text-[#757682] group-hover:text-[#00113a] transition-colors w-5 h-5" />
                      )}
                    </button>
                    
                    {isExpanded && !isLocked && (
                      <div className="space-y-1 pl-2">
                        {module.lessons.map((lesson, lIndex) => (
                          <div 
                            key={lIndex} 
                            className={`flex items-center gap-3 p-3 rounded-xl text-sm ${
                              lesson.completed 
                                ? 'text-green-700 bg-green-50/80 font-medium' 
                                : lesson.active
                                ? 'text-[#00113a] font-extrabold border-l-4 border-[#ffbf00] bg-[#ffbf00]/10'
                                : 'text-[#757682] hover:bg-[#f7f4ef] transition-colors cursor-pointer'
                            }`}
                          >
                            {lesson.completed && <CheckCircle className="w-5 h-5" />}
                            {lesson.active && <PlayCircle className="w-5 h-5 text-[#ffbf00]" />}
                            {lesson.locked && <Lock className="w-5 h-5" />}
                            <span>{lesson.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls at bottom of sidebar */}
          <div className="p-6 bg-white border-t border-[#c5c6d2]/30 flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border border-[#c5c6d2] text-[#00113a] font-bold text-sm hover:bg-[#f7f4ef] transition-colors active:opacity-80 font-headline">
              <ArrowLeft className="w-5 h-5" />
              Prev
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#00113a] text-white font-bold text-sm hover:bg-[#00113a]/90 transition-all active:scale-95 shadow-lg shadow-[#00113a]/10 font-headline">
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </aside>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 w-full h-16 bg-white/90 backdrop-blur-xl border-t border-[#c5c6d2]/40 flex justify-around items-center px-4 z-50">
        <button className="flex flex-col items-center gap-1 text-[#00113a]">
          <BookOpen className="w-6 h-6" />
          <span className="text-[10px] font-bold font-headline">Curriculum</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#757682]">
          <Edit3 className="w-6 h-6" />
          <span className="text-[10px] font-headline">Notes</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#757682]">
          <MessageSquare className="w-6 h-6" />
          <span className="text-[10px] font-headline">Discuss</span>
        </button>
      </nav>
    </div>
  );
}
