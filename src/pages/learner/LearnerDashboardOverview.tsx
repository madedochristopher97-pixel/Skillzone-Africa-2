import { PlayCircle, Award, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearnerDashboardOverview() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Welcome Section */}
      <div>
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-[#00113a] mb-2">Welcome back, Aisha</h1>
        <p className="text-[#6B7280]">{today}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#00113a] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
          <div className="relative z-10">
            <p className="text-sm font-bold tracking-wider text-white/80 mb-2 uppercase">Courses Enrolled</p>
            <p className="text-5xl font-black">4</p>
          </div>
          <BookOpen className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10" />
        </div>
        <div className="bg-[#00113a] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
          <div className="relative z-10">
            <p className="text-sm font-bold tracking-wider text-white/80 mb-2 uppercase">Completed</p>
            <p className="text-5xl font-black">2</p>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border-[16px] border-white/10 flex items-center justify-center">
            <div className="w-16 h-16 border-b-8 border-r-8 border-white/10 transform rotate-45 -translate-y-2"></div>
          </div>
        </div>
        <div className="bg-[#00113a] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
          <div className="relative z-10">
            <p className="text-sm font-bold tracking-wider text-white/80 mb-2 uppercase">Certificates</p>
            <p className="text-5xl font-black">2</p>
          </div>
          <Award className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10" />
        </div>
      </div>

      {/* Continue Learning */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline text-2xl font-bold text-[#00113a]">Continue Learning</h2>
          <Link to="/learner-dashboard/courses" className="text-sm font-bold text-[#D48806] hover:text-[#00113a] transition-colors underline underline-offset-4">
            View Learning Path
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course 1 */}
          <div className="bg-white rounded-[2rem] p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm border border-[#c5c6d2]/20 hover:shadow-md transition-all">
            <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden shrink-0 bg-[#00113a]">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Strategic Business Growth" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 w-full">
              <p className="text-[10px] font-bold text-[#D48806] uppercase tracking-wider mb-1">• TECH & BUSINESS</p>
              <h3 className="font-headline font-bold text-lg text-[#00113a] mb-4 leading-tight">Strategic Business Growth</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-[#f6f3ee] rounded-full overflow-hidden">
                  <div className="h-full bg-[#ffbf00] w-[65%] rounded-full"></div>
                </div>
                <span className="text-xs font-semibold text-[#6B7280]">65% complete</span>
              </div>
              <div className="mt-4 flex justify-end">
                <Link to="/courses/5/learn" className="bg-[#00113a] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#002366] transition-colors">
                  Continue
                </Link>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="bg-white rounded-[2rem] p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm border border-[#c5c6d2]/20 hover:shadow-md transition-all">
            <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden shrink-0 bg-[#50D926]/20">
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Digital Marketing Essentials" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 w-full">
              <p className="text-[10px] font-bold text-[#D48806] uppercase tracking-wider mb-1">• MARKETING</p>
              <h3 className="font-headline font-bold text-lg text-[#00113a] mb-4 leading-tight">Digital Marketing Essentials</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-[#f6f3ee] rounded-full overflow-hidden">
                  <div className="h-full bg-[#ffbf00] w-[40%] rounded-full"></div>
                </div>
                <span className="text-xs font-semibold text-[#6B7280]">40% complete</span>
              </div>
              <div className="mt-4 flex justify-end">
                <Link to="/courses/4/learn" className="bg-[#00113a] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#002366] transition-colors">
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Courses Grid */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h2 className="font-headline text-2xl font-bold text-[#00113a]">My Courses</h2>
          <div className="flex gap-6 text-sm font-semibold">
            <Link to="/learner-dashboard/courses" className="text-[#00113a] border-b-2 border-[#ffbf00] pb-1">All Courses</Link>
            <Link to="/learner-dashboard/courses" className="text-[#6B7280] hover:text-[#00113a] pb-1">In Progress</Link>
            <Link to="/learner-dashboard/courses" className="text-[#6B7280] hover:text-[#00113a] pb-1">Completed</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Completed */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#c5c6d2]/20 flex flex-col h-full">
            <div className="h-40 relative">
              <img src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Effective Communication" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-[#e8f5e9] text-[#2e7d32] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#2e7d32]"></div>
                Completed
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[10px] font-bold text-[#D48806] uppercase tracking-wider mb-2">SOFT SKILLS</p>
              <h3 className="font-headline font-bold text-[#00113a] leading-tight mb-6 flex-1">Effective Communication</h3>
              <Link to="/courses/3" className="w-full py-2.5 rounded-xl border-2 border-[#f6f3ee] text-[#00113a] font-bold text-sm hover:bg-[#f6f3ee] transition-colors text-center">
                View Details
              </Link>
            </div>
          </div>

          {/* Card 2 - Completed */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#c5c6d2]/20 flex flex-col h-full">
            <div className="h-40 relative">
              <img src="https://images.pexels.com/photos/5466785/pexels-photo-5466785.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Personal Finance 101" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-[#e8f5e9] text-[#2e7d32] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#2e7d32]"></div>
                Completed
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[10px] font-bold text-[#D48806] uppercase tracking-wider mb-2">FINANCE</p>
              <h3 className="font-headline font-bold text-[#00113a] leading-tight mb-6 flex-1">Personal Finance 101</h3>
              <Link to="/courses/1" className="w-full py-2.5 rounded-xl border-2 border-[#f6f3ee] text-[#00113a] font-bold text-sm hover:bg-[#f6f3ee] transition-colors text-center">
                View Details
              </Link>
            </div>
          </div>

          {/* Card 3 - In Progress */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#c5c6d2]/20 flex flex-col h-full">
            <div className="h-40 relative">
              <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Leading High-Performance Teams" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[10px] font-bold text-[#D48806] uppercase tracking-wider mb-2">LEADERSHIP</p>
              <h3 className="font-headline font-bold text-[#00113a] leading-tight mb-4 flex-1">Leading High-Performance Teams</h3>
              <div className="h-1.5 bg-[#f6f3ee] rounded-full overflow-hidden mb-4">
                <div className="h-full bg-[#ffbf00] w-[25%] rounded-full"></div>
              </div>
              <Link to="/courses/9/learn" className="w-full py-2.5 rounded-xl bg-[#00113a] text-white font-bold text-sm hover:bg-[#002366] transition-colors text-center">
                Continue
              </Link>
            </div>
          </div>

          {/* Card 4 - In Progress */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#c5c6d2]/20 flex flex-col h-full">
            <div className="h-40 relative">
              <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Introduction to Data Science" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[10px] font-bold text-[#D48806] uppercase tracking-wider mb-2">DATA</p>
              <h3 className="font-headline font-bold text-[#00113a] leading-tight mb-4 flex-1">Introduction to Data Science</h3>
              <div className="h-1.5 bg-[#f6f3ee] rounded-full overflow-hidden mb-4">
                <div className="h-full bg-[#ffbf00] w-[80%] rounded-full"></div>
              </div>
              <Link to="/courses/8/learn" className="w-full py-2.5 rounded-xl bg-[#00113a] text-white font-bold text-sm hover:bg-[#002366] transition-colors text-center">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
