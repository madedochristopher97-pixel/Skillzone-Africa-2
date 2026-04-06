import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 z-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#ffbf00] text-[#6d5000] font-bold text-xs tracking-widest uppercase">
            The Future of African Education
          </span>
          <h1 className="font-headline font-black text-5xl md:text-7xl leading-[1.1] text-[#00113a] tracking-tighter">
            Unlock Your Potential with SkillsZone Africa
          </h1>
          <p className="text-lg md:text-xl text-[#444650] max-w-xl leading-relaxed">
            Learn from industry experts or monetize your knowledge. Join thousands of students across Africa in mastering academic subjects, creative arts, and professional skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => {
                document.getElementById('what-brings-you')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#ffbf00] text-[#6d5000] hover:bg-[#ffdfa0] font-bold px-10 py-4 rounded-xl text-lg transition-transform active:scale-95 text-center"
            >
              Start Learning
            </button>
            <Link to="/instructor-onboarding" className="border-2 border-[#00113a] text-[#00113a] font-bold px-10 py-4 rounded-xl text-lg hover:bg-[#002366] hover:text-white transition-all active:scale-95 text-center">
              Become an Instructor
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 bg-[#e5e2dd]">
            <img 
              alt="African student studying" 
              className="w-full h-full object-cover" 
              src="/Hero Skillz@2x.png"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#ffdfa0] flex items-center justify-center">
                <Sparkles className="text-[#261a00] w-6 h-6" fill="currentColor" />
              </div>
              <div>
                <p className="font-bold text-[#00113a]">New Course!</p>
                <p className="text-sm text-[#444650]">Mobile Dev for Startups</p>
              </div>
            </div>
            <div className="h-2 w-full bg-[#f6f3ee] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-full bg-[#795900]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
