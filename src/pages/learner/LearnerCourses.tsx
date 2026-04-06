import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearnerCourses() {
  const [activeTab, setActiveTab] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Effective Communication',
      category: 'SOFT SKILLS',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'completed',
      progress: 100
    },
    {
      id: 2,
      title: 'Personal Finance 101',
      category: 'FINANCE',
      image: 'https://images.pexels.com/photos/5466785/pexels-photo-5466785.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'completed',
      progress: 100
    },
    {
      id: 3,
      title: 'Leading High-Performance Teams',
      category: 'LEADERSHIP',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'in-progress',
      progress: 25
    },
    {
      id: 4,
      title: 'Introduction to Data Science',
      category: 'DATA',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'in-progress',
      progress: 80
    },
    {
      id: 5,
      title: 'Strategic Business Growth',
      category: 'TECH & BUSINESS',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'in-progress',
      progress: 65
    },
    {
      id: 6,
      title: 'Digital Marketing Essentials',
      category: 'MARKETING',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'in-progress',
      progress: 40
    }
  ];

  const filteredCourses = courses.filter(course => {
    if (activeTab === 'all') return true;
    if (activeTab === 'completed') return course.status === 'completed';
    if (activeTab === 'in-progress') return course.status === 'in-progress';
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold text-[#00113a]">My Courses</h1>
          <p className="text-[#6B7280]">Track your progress and continue learning.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" size={18} />
            <input 
              type="text" 
              placeholder="Search my courses..." 
              className="pl-10 pr-4 py-2 bg-white border border-[#c5c6d2]/40 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00113a]/20 w-full md:w-64"
            />
          </div>
          <button className="p-2 bg-white border border-[#c5c6d2]/40 rounded-xl text-[#444650] hover:bg-[#f6f3ee] transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-[#c5c6d2]/40">
        <button 
          onClick={() => setActiveTab('all')}
          className={`pb-3 text-sm font-bold transition-colors ${activeTab === 'all' ? 'text-[#00113a] border-b-2 border-[#ffbf00]' : 'text-[#6B7280] hover:text-[#00113a]'}`}
        >
          All Courses ({courses.length})
        </button>
        <button 
          onClick={() => setActiveTab('in-progress')}
          className={`pb-3 text-sm font-bold transition-colors ${activeTab === 'in-progress' ? 'text-[#00113a] border-b-2 border-[#ffbf00]' : 'text-[#6B7280] hover:text-[#00113a]'}`}
        >
          In Progress ({courses.filter(c => c.status === 'in-progress').length})
        </button>
        <button 
          onClick={() => setActiveTab('completed')}
          className={`pb-3 text-sm font-bold transition-colors ${activeTab === 'completed' ? 'text-[#00113a] border-b-2 border-[#ffbf00]' : 'text-[#6B7280] hover:text-[#00113a]'}`}
        >
          Completed ({courses.filter(c => c.status === 'completed').length})
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#c5c6d2]/20 flex flex-col h-full hover:shadow-md transition-all">
            <div className="h-40 relative">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              {course.status === 'completed' && (
                <div className="absolute top-4 right-4 bg-[#e8f5e9] text-[#2e7d32] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#2e7d32]"></div>
                  Completed
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[10px] font-bold text-[#D48806] uppercase tracking-wider mb-2">{course.category}</p>
              <h3 className="font-headline font-bold text-[#00113a] leading-tight mb-4 flex-1">{course.title}</h3>
              
              {course.status === 'in-progress' ? (
                <>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#6B7280] mb-2">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-[#f6f3ee] rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-[#ffbf00] rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <Link to={`/courses/${course.id}/learn`} className="w-full py-2.5 rounded-xl bg-[#00113a] text-white font-bold text-sm hover:bg-[#002366] transition-colors text-center">
                    Continue Learning
                  </Link>
                </>
              ) : (
                <Link to="/learner-dashboard/certificates" className="w-full py-2.5 rounded-xl border-2 border-[#f6f3ee] text-[#00113a] font-bold text-sm hover:bg-[#f6f3ee] transition-colors mt-auto text-center">
                  View Certificate
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
