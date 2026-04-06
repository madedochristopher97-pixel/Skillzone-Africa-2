import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NewOnSkillsZone() {
  const courses = [
    {
      title: 'Google AI Essentials: Navigating the Future',
      provider: 'Google',
      type: 'Professional Certificate',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: (
        <svg className="w-full h-full" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
      )
    },
    {
      title: 'Microsoft Generative AI for Business Leaders',
      provider: 'Microsoft',
      type: 'Professional Certificate',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: (
        <svg className="w-full h-full" viewBox="0 0 23 23"><path d="M0 0h11v11H0z" fill="#f3f3f3"></path><path d="M12 0h11v11H12z" fill="#f3f3f3"></path><path d="M0 12h11v11H0z" fill="#f3f3f3"></path><path d="M12 12h11v11H12z" fill="#f3f3f3"></path><path d="M1 1h9v9H1V1zm11 0h9v9h-9V1zM1 13h9v9H1v-9zm11 0h9v9h-9v-9z" fill="#747775" opacity=".2"></path><path d="M0 0h11v11H0z" fill="#f25022"></path><path d="M12 0h11v11H12z" fill="#7fbb00"></path><path d="M0 12h11v11H0z" fill="#00a1f1"></path><path d="M12 12h11v11H12z" fill="#ffb900"></path></svg>
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
      title: 'Google People Management Essentials',
      provider: 'Google',
      type: 'Specialization',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: (
        <svg className="w-full h-full" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
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
