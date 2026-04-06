import { useState } from 'react';
import { Rocket, Shuffle, TrendingUp, Glasses, Check } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const intents = [
  { id: 'start', title: 'Start my career', icon: Rocket },
  { id: 'change', title: 'Change my career', icon: Shuffle },
  { id: 'grow', title: 'Grow in my current role', icon: TrendingUp },
  { id: 'explore', title: 'Explore topics outside of work', icon: Glasses },
];

export default function WhatBringsYou() {
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedIntent) {
      navigate(`/onboarding?intent=${selectedIntent}`);
    }
  };

  return (
    <section id="what-brings-you" className="py-24 bg-[#eef6ff]">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-headline font-black text-[#00113a] mb-16">What brings you to SkillsZone today?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {intents.map((intent) => {
            const isSelected = selectedIntent === intent.id;
            const Icon = intent.icon;
            
            return (
              <div 
                key={intent.id}
                onClick={() => setSelectedIntent(intent.id)}
                className={`relative p-10 rounded-3xl transition-all duration-150 flex flex-col items-center group cursor-pointer
                  ${isSelected 
                    ? 'bg-[#EEF1F8] border-2 border-[#FFBF00] shadow-md' 
                    : `bg-white border-2 border-transparent shadow-sm hover:shadow-lg ${selectedIntent ? 'opacity-60' : ''}`
                  }
                `}
              >
                {isSelected && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-[#FFBF00] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                )}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors
                  ${isSelected ? 'bg-[#00113a]' : 'bg-[#f6f3ee] group-hover:bg-[#00113a]'}
                `}>
                  <Icon className={`w-10 h-10 transition-colors ${isSelected ? 'text-white' : 'text-[#00113a] group-hover:text-white'}`} />
                </div>
                <h3 className="font-headline font-bold text-[#00113a] text-lg text-center">{intent.title}</h3>
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedIntent && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1] }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-12 flex flex-col items-center"
            >
              <button 
                onClick={handleContinue}
                className="bg-[#002366] text-white font-headline font-bold h-[52px] w-full sm:w-[280px] rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Find My Path <span className="text-xl">→</span>
              </button>
              <p className="mt-4 font-body text-sm text-[#6B7280]">
                Already have an account? <Link to="/auth" className="text-[#FFBF00] hover:underline font-medium">Sign In</Link>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
