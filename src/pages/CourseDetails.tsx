import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Play, CheckCircle2, Clock, BookOpen, Award, ArrowLeft, Users, Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_COURSES } from '../constants';
import { useAuth } from '../context/AuthContext';

export default function CourseDetails() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = ALL_COURSES.find((c) => c.id === courseId);
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#fcf9f4] flex flex-col items-center justify-center font-body">
        <h1 className="text-4xl font-headline font-black text-[#00113a] mb-4">Course Not Found</h1>
        <p className="text-[#444650] mb-8">The course you are looking for does not exist.</p>
        <Link to="/courses" className="bg-[#00113a] text-white px-6 py-3 rounded-full font-bold hover:bg-[#002366] transition-colors">
          Browse All Courses
        </Link>
      </div>
    );
  }

  const handleEnrollClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      setShowAuthModal(true);
    }
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({
      name: 'Test User',
      email: 'test@example.com',
      role: 'learner'
    });
    setShowAuthModal(false);
    navigate(`/courses/${course.id}/checkout`);
  };

  // Mock extended data for the course
  let description = `Dive deep into ${course.title} and master the skills needed to excel in today's competitive landscape. This comprehensive course is designed to take you from foundational concepts to advanced techniques, providing you with practical knowledge you can apply immediately. Join thousands of learners across Africa and transform your career.`;
  let learningObjectives = [
    "Understand the core principles and methodologies.",
    "Apply practical techniques to real-world scenarios.",
    "Develop a strategic mindset for problem-solving.",
    "Build a portfolio of projects to showcase your skills.",
    "Navigate industry-standard tools and software.",
    "Communicate complex ideas effectively to stakeholders."
  ];

  if (course.id === '1') {
    description = "This course takes you from zero to confident bookkeeper. Learn how to manage ledgers, understand debits and credits, and produce financial statements that actually make sense — built specifically for the African business context.";
    learningObjectives = [
      "Set up and manage a double-entry ledger",
      "Understand debits, credits, and trial balances",
      "Produce income statements and balance sheets",
      "Apply IFRS standards used across African markets",
      "Use Excel for practical accounting workflows",
      "Identify and correct common bookkeeping errors"
    ];
  } else if (course.id === '2') {
    description = "Turn your smartphone into a professional camera. Learn composition, lighting, and editing techniques designed for African creatives who want to tell powerful visual stories.";
    learningObjectives = [
      "Master composition rules for compelling shots",
      "Use natural and artificial light effectively",
      "Edit photos using free mobile apps",
      "Build a photography portfolio on your phone",
      "Shoot for social media, brands, and clients",
      "Understand colour grading for African aesthetics"
    ];
  }

  const extendedData = {
    description,
    learningObjectives,
    curriculum: [
      {
        title: "Module 1: Foundations and Fundamentals",
        lessons: 5,
        duration: "2h 15m",
        content: ["Introduction to the field", "Core terminology", "Setting up your environment", "Basic principles", "First practical exercise"]
      },
      {
        title: "Module 2: Intermediate Techniques",
        lessons: 8,
        duration: "4h 30m",
        content: ["Advanced workflows", "Common pitfalls and how to avoid them", "Case study analysis", "Interactive project work"]
      },
      {
        title: "Module 3: Mastery and Application",
        lessons: 6,
        duration: "3h 45m",
        content: ["Industry best practices", "Scaling your solutions", "Final capstone project", "Career advice and next steps"]
      }
    ],
    reviews: [
      { id: 1, user: "Amaka N.", rating: 5, date: "2 weeks ago", comment: "Absolutely brilliant course. The instructor explains complex topics with such clarity. Highly recommended!" },
      { id: 2, user: "Kwame O.", rating: 4, date: "1 month ago", comment: "Great content and very practical. I was able to apply what I learned at my job the very next day." },
      { id: 3, user: "Sarah M.", rating: 5, date: "2 months ago", comment: "The best investment I've made in my career this year. The community aspect is also a huge plus." }
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#fcf9f4] min-h-screen font-body pb-24 relative"
    >
      {/* Auth Modal Overlay */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#00113a]/60 backdrop-blur-sm"
              onClick={() => setShowAuthModal(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setShowAuthModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 hover:bg-white rounded-full flex items-center justify-center text-[#00113a] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Course Context Side */}
              <div className="w-full md:w-2/5 bg-[#f6f3ee] p-8 flex flex-col justify-center hidden md:flex">
                <div className="mb-6">
                  <span className="bg-[#ffdfa0] text-[#261a00] px-3 py-1 rounded-full text-xs font-bold font-headline uppercase tracking-wider">
                    {course.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black font-headline text-[#00113a] mb-4 leading-tight">
                  {course.title}
                </h3>
                <p className="text-[#444650] text-sm mb-8 leading-relaxed">
                  Join to access this course and start learning today.
                </p>
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex items-center gap-3">
                  <img src={course.instructor.avatar} alt={course.instructor.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <p className="text-xs text-[#757682]">Instructor</p>
                    <p className="font-bold text-sm text-[#00113a]">{course.instructor.name}</p>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                <div className="max-w-sm mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-black font-headline text-[#00113a] mb-2">
                      {isSignUp ? 'Create an account' : 'Welcome back'}
                    </h2>
                    <p className="text-[#444650]">
                      {isSignUp ? 'Sign up to enroll in this course.' : 'Sign in to continue to checkout.'}
                    </p>
                  </div>

                  <div className="inline-flex p-1 mb-8 bg-[#e5e2dd] rounded-full w-full">
                    <button
                      onClick={() => setIsSignUp(false)}
                      className={`flex-1 py-2 px-6 rounded-full text-sm font-semibold transition-all duration-200 ${
                        !isSignUp ? 'bg-[#ffbf00] text-[#002366] shadow-sm' : 'text-slate-600 hover:text-[#00113a]'
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setIsSignUp(true)}
                      className={`flex-1 py-2 px-6 rounded-full text-sm font-semibold transition-all duration-200 ${
                        isSignUp ? 'bg-[#ffbf00] text-[#002366] shadow-sm' : 'text-slate-600 hover:text-[#00113a]'
                      }`}
                    >
                      Sign Up
                    </button>
                  </div>

                  <form onSubmit={handleAuthSubmit} className="space-y-4">
                    {isSignUp && (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-[#444650] uppercase tracking-wider">First Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-lg border border-[#c5c6d2] bg-white focus:ring-2 focus:ring-[#795900] outline-none text-sm" placeholder="Kofi" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-[#444650] uppercase tracking-wider">Last Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-lg border border-[#c5c6d2] bg-white focus:ring-2 focus:ring-[#795900] outline-none text-sm" placeholder="Mensah" />
                        </div>
                      </div>
                    )}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#444650] uppercase tracking-wider">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg border border-[#c5c6d2] bg-white focus:ring-2 focus:ring-[#795900] outline-none text-sm" placeholder="kofi@example.com" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#444650] uppercase tracking-wider">Password</label>
                      <input type="password" className="w-full px-4 py-3 rounded-lg border border-[#c5c6d2] bg-white focus:ring-2 focus:ring-[#795900] outline-none text-sm" placeholder="••••••••" />
                    </div>

                    <button type="submit" className="w-full py-4 mt-4 bg-gradient-to-r from-[#00113a] to-[#002366] text-white font-bold rounded-xl hover:opacity-90 transition-all">
                      {isSignUp ? 'Sign Up & Continue' : 'Sign In & Continue'}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00113a] to-[#002366] text-white pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ffdfa0]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors font-medium text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#ffdfa0] text-[#261a00] px-3 py-1 rounded-full text-xs font-bold font-headline uppercase tracking-wider">
                  {course.category}
                </span>
                <span className="flex items-center gap-1 text-white/80 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#ffdfa0]"></span>
                  Beginner Friendly
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline leading-[1.1] mb-6">
                {course.title}
              </h1>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                {extendedData.description.substring(0, 150)}...
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#ffdfa0]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="font-bold text-lg">{course.rating}</span>
                  <span className="text-white/60">({course.students} students)</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Globe className="w-5 h-5" />
                  <span>English, Swahili</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={course.instructor.avatar} alt={course.instructor.name} className="w-12 h-12 rounded-full border-2 border-white/20 object-cover" referrerPolicy="no-referrer" />
                <div>
                  <p className="text-sm text-white/60">Created by</p>
                  <p className="font-bold font-headline">{course.instructor.name}</p>
                </div>
              </div>
            </div>

            {/* Video Preview / Pricing Card */}
            <div className="relative">
              <div className="bg-white rounded-[2rem] p-2 shadow-2xl relative z-10">
                <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-6 bg-[#e8e0d5]">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover mix-blend-multiply opacity-90" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-[#00113a] fill-current ml-1" />
                    </button>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <div className="text-3xl font-black font-headline text-[#00113a] mb-6">
                    {course.price}
                  </div>
                  {user ? (
                    <Link to={`/courses/${course.id}/checkout`} className="w-full bg-gradient-to-r from-[#00113a] to-[#002366] text-white py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#00113a]/20 transition-all active:scale-[0.98] mb-4 flex items-center justify-center">
                      Enroll Now
                    </Link>
                  ) : (
                    <button onClick={handleEnrollClick} className="w-full bg-gradient-to-r from-[#00113a] to-[#002366] text-white py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#00113a]/20 transition-all active:scale-[0.98] mb-4 flex items-center justify-center">
                      Enroll Now
                    </button>
                  )}
                  <p className="text-center text-sm text-[#757682] mb-6">30-Day Money-Back Guarantee</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#00113a] text-sm uppercase tracking-wider mb-2">This course includes:</h4>
                    <div className="flex items-center gap-3 text-sm text-[#444650]">
                      <Play className="w-4 h-4 text-[#795900]" /> 10.5 hours on-demand video
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#444650]">
                      <BookOpen className="w-4 h-4 text-[#795900]" /> 15 downloadable resources
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#444650]">
                      <Award className="w-4 h-4 text-[#795900]" /> Certificate of completion
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements behind card */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ffdfa0] rounded-full blur-2xl opacity-50 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#002366] rounded-full blur-2xl opacity-20 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-20">
          
          {/* About Section */}
          <section>
            <h2 className="text-3xl font-black font-headline text-[#00113a] mb-6">About this course</h2>
            <p className="text-lg text-[#444650] leading-relaxed">
              {extendedData.description}
            </p>
          </section>

          {/* What You'll Learn */}
          <section className="bg-[#f6f3ee] p-8 md:p-12 rounded-[2rem]">
            <h2 className="text-2xl font-black font-headline text-[#00113a] mb-8">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extendedData.learningObjectives.map((obj, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#795900] flex-shrink-0 mt-0.5" />
                  <span className="text-[#444650] leading-relaxed">{obj}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Curriculum */}
          <section>
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-3xl font-black font-headline text-[#00113a]">Course Curriculum</h2>
              <span className="text-[#757682] font-medium">{extendedData.curriculum.length} modules • 10h 30m total length</span>
            </div>
            
            <div className="space-y-4">
              {extendedData.curriculum.map((module, idx) => (
                <details key={idx} className="group bg-white rounded-[1.5rem] shadow-sm border border-transparent hover:border-[#e5e2dd] transition-colors" open={idx === 0}>
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#f6f3ee] text-[#00113a] flex items-center justify-center font-bold group-open:bg-[#00113a] group-open:text-white transition-colors">
                        {idx + 1}
                      </div>
                      <h3 className="font-bold text-lg text-[#00113a]">{module.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#757682]">
                      <span className="hidden sm:inline">{module.lessons} lessons</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{module.duration}</span>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <div className="pl-14 space-y-3">
                      {module.content.map((lesson, lIdx) => (
                        <div key={lIdx} className="flex items-center justify-between py-2 border-b border-[#f6f3ee] last:border-0">
                          <div className="flex items-center gap-3 text-[#444650]">
                            <Play className="w-4 h-4 text-[#c5c6d2]" />
                            <span>{lesson}</span>
                          </div>
                          <span className="text-sm text-[#757682]">15:00</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Instructor */}
          <section>
            <h2 className="text-3xl font-black font-headline text-[#00113a] mb-8">Your Instructor</h2>
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <img src={course.instructor.avatar} alt={course.instructor.name} className="w-32 h-32 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <h3 className="text-2xl font-bold font-headline text-[#00113a] mb-2">{course.instructor.name}</h3>
                <p className="text-[#795900] font-bold mb-4">Senior Industry Expert & Educator</p>
                <div className="flex gap-6 mb-6">
                  <div className="flex items-center gap-2 text-[#444650]">
                    <Star className="w-5 h-5 text-[#ffb300] fill-current" />
                    <span className="font-bold">4.8 Instructor Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#444650]">
                    <Users className="w-5 h-5 text-[#757682]" />
                    <span className="font-bold">15,000+ Students</span>
                  </div>
                </div>
                <p className="text-[#444650] leading-relaxed">
                  With over 10 years of experience in the industry, {course.instructor.name} brings a wealth of practical knowledge to this course. They have helped thousands of students across Africa achieve their career goals through engaging and actionable teaching methods.
                </p>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-black font-headline text-[#00113a]">Student Reviews</h2>
              <div className="flex items-center gap-2 bg-[#ffdfa0] px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-[#261a00] fill-current" />
                <span className="font-bold text-[#261a00] text-sm">{course.rating} course rating</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extendedData.reviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-[1.5rem] shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#f6f3ee] flex items-center justify-center text-[#00113a] font-bold text-lg">
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00113a]">{review.user}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex text-[#ffb300]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-xs text-[#757682]">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#444650] text-sm leading-relaxed">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </section>

        </div>
        
        {/* Empty column for spacing on large screens since the card is absolute/sticky in the hero, 
            but we'll just leave it empty or add some related courses here if we want. 
            Actually, let's make the pricing card sticky on scroll. */}
        <div className="hidden lg:block relative">
          {/* We already have the pricing card in the hero section. 
              To make it sticky, we would need a different layout structure.
              For now, this empty column just ensures the main content doesn't stretch too wide. */}
        </div>
      </div>
    </motion.div>
  );
}
