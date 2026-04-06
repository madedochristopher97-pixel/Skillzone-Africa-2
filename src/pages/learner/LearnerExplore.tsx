import { Search, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearnerExplore() {
  const recommendedCourses = [
    {
      id: '101',
      title: 'Advanced Python for Data Analysis',
      category: 'DATA',
      instructor: 'Dr. Amara Okafor',
      rating: 4.9,
      students: '1.2k',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      match: '98% Match'
    },
    {
      id: '102',
      title: 'UX/UI Design for African Markets',
      category: 'DESIGN',
      instructor: 'Kofi Mensah',
      rating: 4.8,
      students: '850',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      match: '92% Match'
    },
    {
      id: '103',
      title: 'Financial Modeling & Valuation',
      category: 'FINANCE',
      instructor: 'David Mensah',
      rating: 4.9,
      students: '2.1k',
      image: 'https://images.pexels.com/photos/5466785/pexels-photo-5466785.jpeg?auto=compress&cs=tinysrgb&w=600',
      match: '85% Match'
    }
  ];

  const trendingCategories = [
    { name: 'Artificial Intelligence', count: '120+ courses', color: 'bg-[#e8f5e9]', textColor: 'text-[#2e7d32]' },
    { name: 'Digital Marketing', count: '85+ courses', color: 'bg-[#e3f2fd]', textColor: 'text-[#0D79F2]' },
    { name: 'Entrepreneurship', count: '200+ courses', color: 'bg-[#fff8e1]', textColor: 'text-[#f57f17]' },
    { name: 'Web Development', count: '150+ courses', color: 'bg-[#f3e5f5]', textColor: 'text-[#8e24aa]' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header & Search */}
      <div className="bg-[#00113a] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-headline text-3xl md:text-4xl font-bold mb-4">What do you want to learn next?</h1>
          <p className="text-white/80 text-lg mb-8">Discover courses tailored to your interests and career goals.</p>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" size={20} />
            <input 
              type="text" 
              placeholder="Search for skills, courses, or instructors..." 
              className="w-full pl-12 pr-4 py-4 bg-white rounded-xl text-[#00113a] focus:outline-none focus:ring-4 focus:ring-white/20 font-medium"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ffbf00] text-[#6d5000] px-6 py-2 rounded-lg font-bold hover:bg-[#e6ac00] transition-colors">
              Search
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#ffbf00]/10 rounded-full blur-2xl translate-y-1/2"></div>
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
            <div key={course.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#c5c6d2]/20 group hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#00113a] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  {course.category}
                </div>
                <div className="absolute top-4 right-4 bg-[#ffbf00] text-[#6d5000] text-[10px] font-bold px-3 py-1 rounded-full">
                  {course.match}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-headline font-bold text-lg text-[#00113a] leading-tight mb-2 group-hover:text-[#D48806] transition-colors">{course.title}</h3>
                <p className="text-sm text-[#6B7280] mb-4">{course.instructor}</p>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="text-[#ffbf00]" size={16} fill="currentColor" />
                    <span className="text-sm font-bold text-[#00113a]">{course.rating}</span>
                    <span className="text-xs text-[#6B7280]">({course.students})</span>
                  </div>
                  <Link to={`/courses/${course.id}`} className="text-sm font-bold text-[#00113a] hover:underline underline-offset-4">
                    View Course
                  </Link>
                </div>
              </div>
            </div>
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
