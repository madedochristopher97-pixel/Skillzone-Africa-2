import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NewOnSkillsZone() {
  const courses = [
    {
      title: 'Skillzone AI Essentials: Navigating the Future',
      provider: 'SkillsZone',
      type: 'Professional Certificate',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: (
        <div className="w-full h-full rounded-full bg-[#00113a] flex items-center justify-center">
          <span className="text-[8px] text-white font-black">SZ</span>
        </div>
      )
    },
    {
      title: 'Skillzone Generative AI for Business Leaders',
      provider: 'SkillsZone',
      type: 'Professional Certificate',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: (
        <div className="w-full h-full rounded-full bg-[#00113a] flex items-center justify-center">
          <span className="text-[8px] text-white font-black">SZ</span>
        </div>
      )
    },
    {
      title: 'AI SEO & Growth: Mastering the Modern Web',
      provider: 'SkillsZone',
      type: 'Specialization',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: (
        <div className="w-full h-full rounded-full bg-[#00113a] flex items-center justify-center">
          <span className="text-[8px] text-white font-black">SZ</span>
        </div>
      )
    },
    {
      title: 'Skillzone People Management Essentials',
      provider: 'SkillsZone',
      type: 'Specialization',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: (
        <div className="w-full h-full rounded-full bg-[#00113a] flex items-center justify-center">
          <span className="text-[8px] text-white font-black">SZ</span>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 px-8 bg-[#f7f4ef]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#00113a]">New on SkillsZone</h2>
          <Link to="/courses" className="flex items-center gap-2 text-[#00113a] font-bold hover:gap-3 transition-all">
            <ArrowRight size={24} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <Link to="/courses" key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#c5c6d2]/10 flex flex-col h-full">
              <div className="aspect-video relative overflow-hidden">
                <img alt={course.title} className="w-full h-full object-cover" src={course.image} referrerPolicy="no-referrer" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    {course.logo}
                  </div>
                  <span className="text-xs font-semibold text-[#444650]">{course.provider}</span>
                </div>
                <h3 className="font-headline font-bold text-[#00113a] mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-xs text-[#444650]/80 mb-4 mt-auto">{course.type}</p>
                <div className="flex items-center gap-1">
                  <Star className="text-[#ffbf00] w-4 h-4" fill="currentColor" />
                  <span className="text-xs font-bold text-[#00113a]">{course.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
