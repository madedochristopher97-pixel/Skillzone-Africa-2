import { Link } from 'react-router-dom';
import { Star, Bookmark, Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  className?: string;
}

export default function CourseCard({ course, className = "" }: CourseCardProps) {
  const isAny = course.level === 'Any level';
  const isBeginner = isAny || course.level === 'Beginner';
  const isIntermediate = isAny || course.level === 'Intermediate';
  const isAdvanced = isAny || course.level === 'Advanced';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`bg-white rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-[#00113a]/5 transition-all duration-500 border border-[#c5c6d2]/20 flex flex-col ${className}`}
    >
      <Link to={`/courses/${course.id}`} className="flex flex-col h-full relative cursor-pointer">
        <div className="relative aspect-video bg-[#e8e0d5] overflow-hidden shrink-0">
          <img
            src={course.image}
            alt={course.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {course.featured && (
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-lg z-10 flex items-center gap-1">
              Staff Pick<span className="text-[#50D926]">.</span>
            </div>
          )}
          {course.tag && (
            <div
              className={`absolute bottom-4 left-4 text-[10px] font-black uppercase px-3 py-1.5 rounded-lg z-10 shadow-lg ${
                course.tag.toLowerCase() === 'new' ? 'bg-[#50D926] text-[#00113a]' : 'bg-[#e8f5e9] text-[#2e7d32]'
              }`}
            >
              {course.tag}
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          {/* Header Row: Instructor & Ratings */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-1.5 flex-1 min-w-0">
              <span className="text-sm font-medium text-[#444650] truncate">{course.instructor.name}</span>
              <span className="material-symbols-outlined text-[10px] text-white bg-[#2e7d32] rounded-full p-[1px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                check
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="text-[#444650] fill-current" size={14} />
              <span className="text-sm font-bold text-[#00113a]">{course.rating}</span>
              <span className="text-xs text-[#757682]">({course.students})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-headline font-black text-[#00113a] text-lg leading-snug mb-4 group-hover:text-[#D48806] transition-colors line-clamp-2">
            {course.title}
          </h3>

          {/* Tools / Tags */}
          <div className="flex items-center gap-2 mt-auto mb-6">
            {course.tool && (
              <span className="bg-[#f0ebe4] text-[#444650] text-[11px] font-bold px-3 py-1 rounded-full">
                {course.tool}
              </span>
            )}
            {course.extraTags && (
              <span className="text-[11px] font-bold text-[#757682]">
                {course.extraTags}
              </span>
            )}
          </div>

          {/* Footer Metrics */}
          <div className="pt-4 border-t border-[#f6f3ee] flex items-center justify-between text-[#444650]">
            <div className="flex items-center gap-4">
              {/* Level indicator */}
              <div className="flex items-center gap-1.5" title={course.level || 'Any level'}>
                <div className="flex items-end gap-[2px] h-3">
                  <div className={`w-1 h-1.5 rounded-sm transition-colors ${isBeginner ? 'bg-[#8e24aa]' : 'bg-[#e5e2dd]'}`}></div>
                  <div className={`w-1 h-2.5 rounded-sm transition-colors ${isIntermediate ? 'bg-[#8e24aa]' : 'bg-[#e5e2dd]'}`}></div>
                  <div className={`w-1 h-3.5 rounded-sm transition-colors ${isAdvanced ? 'bg-[#8e24aa]' : 'bg-[#e5e2dd]'}`}></div>
                </div>
                <span className="text-[11px] font-medium hidden sm:inline-block">{course.level || 'Any level'}</span>
              </div>

              {/* Learners */}
              <div className="flex items-center gap-1.5">
                <Users size={14} className="text-[#757682]" />
                <span className="text-[11px] font-medium">{course.students}</span>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
                <Clock size={14} className="text-[#757682]" />
                <span className="text-[11px] font-medium">{course.duration || '2h 0m'}</span>
              </div>
            </div>

            <button 
              className="text-[#00113a] hover:text-[#D48806] transition-colors shrink-0"
              onClick={(e) => {
                e.preventDefault(); // prevent navigation on bookmark click
                // Add your bookmark toggle logic here
              }}
            >
              <Bookmark size={20} />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
