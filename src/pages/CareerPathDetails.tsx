import { useParams, Link, Navigate } from 'react-router-dom';
import { CAREER_PATHS } from '../constants';
import { motion } from 'motion/react';
import { ArrowLeft, Briefcase, TrendingUp, Wallet, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

export default function CareerPathDetails() {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const careerPath = CAREER_PATHS.find((path) => path.id === id);

  if (!careerPath) {
    return <Navigate to="/" replace />;
  }

  const similarPaths = CAREER_PATHS.filter((path) => path.id !== id);

  return (
    <div className="bg-[#fcf9f4] font-body text-[#1c1c19] antialiased flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative pt-12 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-500"
          style={{ backgroundColor: careerPath.hoverColor }}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <Link to="/" className={`inline-flex items-center gap-2 ${careerPath.heroTextColor} font-semibold text-sm hover:opacity-70 transition-opacity mb-8`}>
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              {/* Text Content - Asymmetrical 5 cols */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className={`bg-white/20 ${careerPath.heroTextColor} px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 inline-block uppercase backdrop-blur-sm`}>
                    Career Path
                  </span>
                  <h1 className={`font-headline font-extrabold text-5xl md:text-6xl ${careerPath.heroTextColor} leading-[1.1] tracking-tight mb-6`}>
                    {careerPath.title}
                  </h1>
                  <p className={`${careerPath.heroTextColor} opacity-90 text-lg md:text-xl leading-relaxed`}>
                    {careerPath.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-wrap gap-4 mt-4"
                >
                  <Link to="/courses" className={`bg-white ${careerPath.heroTextColor === 'text-white' ? 'text-[#00113a]' : 'text-[#00113a]'} px-8 py-4 rounded-3xl font-bold text-lg hover:shadow-xl transition-all active:scale-95 inline-flex items-center justify-center`}>
                    Explore Related Courses
                  </Link>
                </motion.div>
              </div>

              {/* Image Content - Asymmetrical 7 cols */}
              <div className="lg:col-span-7 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] ring-4 ring-white/20"
                >
                  <img 
                    src={careerPath.heroImage || careerPath.image} 
                    alt={careerPath.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section - Tonal Layering */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f6f3ee]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Main Description - 8 cols */}
              <div className="lg:col-span-8">
                <h2 className="font-headline font-bold text-3xl text-[#00113a] mb-8">About this Career</h2>
                <div className="bg-[#ffffff] rounded-3xl p-8 md:p-12 shadow-[0_8px_24px_rgba(28,28,25,0.04)]">
                  <p className="text-[#444650] text-lg leading-relaxed whitespace-pre-line">
                    {careerPath.longDescription}
                  </p>
                </div>
              </div>

              {/* Sidebar Stats & Skills - 4 cols */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                {/* Quick Facts */}
                <div className="bg-[#ffffff] rounded-3xl p-8 shadow-[0_8px_24px_rgba(28,28,25,0.04)]">
                  <h3 className="font-headline font-bold text-xl text-[#00113a] mb-6">Quick Facts</h3>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#f6f3ee] flex items-center justify-center flex-shrink-0">
                        <Wallet className="text-[#00113a]" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-[#444650] font-semibold uppercase tracking-wider mb-1">Estimated Salary</p>
                        <p className="text-[#00113a] font-bold">{careerPath.salaryRange}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#f6f3ee] flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="text-[#00113a]" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-[#444650] font-semibold uppercase tracking-wider mb-1">Market Demand</p>
                        <p className="text-[#00113a] font-bold">{careerPath.demand}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Skills */}
                <div className="bg-[#ffffff] rounded-3xl p-8 shadow-[0_8px_24px_rgba(28,28,25,0.04)]">
                  <h3 className="font-headline font-bold text-xl text-[#00113a] mb-6">Key Skills Required</h3>
                  <ul className="flex flex-col gap-4">
                    {careerPath.skills?.map((skill, index) => (
                      <li key={index} className="flex items-center gap-3 text-[#444650] font-medium">
                        <CheckCircle2 className="text-[#ffbf00] flex-shrink-0" size={20} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Explore Similar Career Paths */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fcf9f4]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#00113a]">Explore similar career paths</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarPaths.map((path) => (
                <Link 
                  key={path.id} 
                  to={`/career-paths/${path.id}`} 
                  className="bg-[#ffffff] rounded-[2rem] overflow-hidden shadow-[0_8px_24px_rgba(28,28,25,0.04)] hover:shadow-[0_32px_64px_rgba(28,28,25,0.08)] transition-all duration-300 flex flex-col group h-full"
                >
                  <div className="h-48 relative overflow-hidden" style={{ backgroundColor: path.bgColor }}>
                    <img 
                      alt={path.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={path.image} 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00113a]/20 to-transparent mix-blend-multiply"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-headline font-bold text-2xl text-[#00113a] mb-3 group-hover:text-[#ffbf00] transition-colors">{path.title}</h3>
                    <p className="text-[#444650] text-base leading-relaxed line-clamp-2">{path.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
