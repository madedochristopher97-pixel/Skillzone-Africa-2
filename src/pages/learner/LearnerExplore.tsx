import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COURSES } from '../../constants';
import CourseCard from '../../components/CourseCard';

export default function LearnerExplore() {
  const recommendedCourses = COURSES.slice(0, 3).map(course => ({
    ...course,
    tag: '98% Match'
  }));

  const trendingCategories = [
    { name: 'Artificial Intelligence', count: '120+ courses', color: 'bg-[#e8f5e9]', textColor: 'text-[#2e7d32]' },
    { name: 'Digital Marketing', count: '85+ courses', color: 'bg-[#e3f2fd]', textColor: 'text-[#0D79F2]' },
    { name: 'Entrepreneurship', count: '200+ courses', color: 'bg-[#fff8e1]', textColor: 'text-[#f57f17]' },
    { name: 'Web Development', count: '150+ courses', color: 'bg-[#f3e5f5]', textColor: 'text-[#8e24aa]' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header & Search */}
      <div className="bg-[#00113a] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-lg border border-white/10">
        {/* Background Pattern Asset */}
        <div 
          className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
          style={{ 
            backgroundImage: 'url("/Patterns 2.jfif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
          aria-hidden="true"
        />
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-headline text-3xl md:text-5xl font-bold mb-4 tracking-tight">What do you want to learn next?</h1>
          <p className="text-white/80 text-lg mb-8 font-medium">Discover courses tailored to your interests and career goals.</p>
          
          <div className="relative group/search">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] group-focus-within/search:text-[#002366] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search for skills, courses, or instructors..." 
              className="w-full pl-12 pr-4 py-5 bg-white/95 backdrop-blur-sm rounded-2xl text-[#00113a] focus:outline-none focus:ring-4 focus:ring-[#ffbf00]/30 font-medium transition-all shadow-xl"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ffbf00] text-[#6d5000] px-8 py-3 rounded-xl font-bold hover:bg-[#e6ac00] active:scale-95 transition-all shadow-lg hover:shadow-[#ffbf00]/20">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Recommended for You */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-headline text-2xl font-bold text-[#00113a]">Recommended for You</h2>
            <p className="text-[#6B7280] text-sm mt-1">Based on your interest in Data and Leadership</p>
          </div>
          <Link to="/courses" className="text-sm font-bold text-[#00113a] hover:text-[#D48806] transition-colors flex items-center gap-1">
            See all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedCourses.map((course) => (
            <CourseCard key={course.id} course={course as any} />
          ))}
        </div>
      </div>

      {/* Trending Categories */}
      <div>
        <h2 className="font-headline text-2xl font-bold text-[#00113a] mb-6">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingCategories.map((category, index) => (
            <Link to="/courses" key={index} className={`${category.color} rounded-2xl p-6 text-left hover:scale-[1.02] transition-transform block`}>
              <h3 className={`font-bold text-lg mb-1 ${category.textColor}`}>{category.name}</h3>
              <p className={`${category.textColor} opacity-80 text-sm`}>{category.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
