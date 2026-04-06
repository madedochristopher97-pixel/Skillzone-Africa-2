import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, Code, Palette, BarChart, Smartphone, HeartPulse, 
  GraduationCap, UserX, RefreshCw, Globe, ChevronLeft,
  Video, FileText, FlaskConical, Users, Check
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// Common Types
type Step = 2 | 3 | 4;

// Step 2A Data
const fields = [
  { id: 'business', label: 'Business & Finance', icon: Briefcase },
  { id: 'tech', label: 'Tech & Development', icon: Code },
  { id: 'creative', label: 'Creative Arts', icon: Palette },
  { id: 'data', label: 'Data & Analytics', icon: BarChart },
  { id: 'marketing', label: 'Digital Marketing', icon: Smartphone },
  { id: 'healthcare', label: 'Healthcare', icon: HeartPulse },
];

const situations = [
  { id: 'student', label: "I'm a student or recent graduate", icon: GraduationCap },
  { id: 'unemployed', label: "I'm currently unemployed", icon: UserX },
  { id: 'switch', label: "I work but want to switch fields", icon: RefreshCw },
  { id: 'remote', label: "I'm looking for remote/international work", icon: Globe },
];

// Step 2B Data
const pivotFields = ['Business', 'Tech', 'Education', 'Healthcare', 'Government', 'Creative', 'Other'];
const timelines = ['3 months', '6 months', '1 year', 'Just exploring'];

// Step 2C Data
const skillsToDevelop = [
  'Leadership', 'Public Speaking', 'Data Analysis', 'Project Management', 
  'Financial Literacy', 'Digital Tools', 'Communication', 'Strategic Thinking', '+ More'
];

// Step 2D Data
const exploreTopics = [
  { id: 'photo', label: 'Photography', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400' },
  { id: 'music', label: 'Music & Audio', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=400' },
  { id: 'cooking', label: 'Cooking & Nutrition', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400' },
  { id: 'writing', label: 'Creative Writing', image: 'https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=400' },
  { id: 'fitness', label: 'Health & Fitness', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400' },
  { id: 'history', label: 'African History & Culture', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=400' },
  { id: 'finance', label: 'Personal Finance', image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=400' },
  { id: 'arts', label: 'Performing Arts', image: 'https://images.unsplash.com/photo-1507676184212-d0330a15233c?auto=format&fit=crop&q=80&w=400' },
];

// Step 3 Data
const timeCommitments = ['1–2 hrs', '3–5 hrs', '5–10 hrs', '10+ hrs'];
const learningStyles = [
  { id: 'video', label: 'Video lessons', icon: Video },
  { id: 'reading', label: 'Reading + PDFs', icon: FileText },
  { id: 'projects', label: 'Projects & Exercises', icon: FlaskConical },
  { id: 'mentorship', label: 'Live mentorship', icon: Users },
];

export default function Onboarding() {
  const [searchParams] = useSearchParams();
  const intent = searchParams.get('intent') || 'start';
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>(2);
  const [direction, setDirection] = useState(1);

  // State for 2A
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null);

  // State for 2B
  const [pivotFrom, setPivotFrom] = useState<string>('');
  const [pivotTo, setPivotTo] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<string | null>(null);

  // State for 2C
  const [currentRole, setCurrentRole] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState<string | null>(null);

  // State for 2D
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  // State for Step 3
  const [timeCommitment, setTimeCommitment] = useState<string | null>(null);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const nextStep = () => {
    setDirection(1);
    setStep((prev) => (prev + 1) as Step);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => (prev - 1) as Step);
  };

  const { login } = useAuth();

  const handleFinish = () => {
    login({
      name: 'New Learner',
      email: 'learner@example.com',
      role: 'learner',
      intent: intent,
      interests: selectedTopics.length > 0 ? selectedTopics : selectedSkills
    });
    sessionStorage.setItem('showWelcomeBanner', 'true');
    navigate('/learner-dashboard');
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const renderStep2A = () => (
    <div className="max-w-3xl mx-auto w-full">
      <h1 className="font-headline font-bold text-[#002366] text-3xl md:text-4xl mb-2">Let's build your career path</h1>
      <p className="font-body text-[#6B7280] text-base md:text-lg mb-10">Tell us a little about where you are so we can point you in the right direction.</p>

      <div className="mb-10">
        <h3 className="font-headline font-semibold text-[#002366] text-lg mb-4">What field interests you most?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {fields.map((field) => {
            const isSelected = selectedField === field.id;
            const Icon = field.icon;
            return (
              <button
                key={field.id}
                onClick={() => setSelectedField(field.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl h-20 transition-all duration-150 border-2
                  ${isSelected ? 'border-[#FFBF00] bg-[#EEF1F8]' : 'border-transparent bg-white shadow-sm hover:shadow-md'}
                `}
              >
                <Icon className={`w-6 h-6 mb-2 ${isSelected ? 'text-[#002366]' : 'text-[#6B7280]'}`} />
                <span className={`text-xs font-medium ${isSelected ? 'text-[#002366]' : 'text-[#444650]'}`}>{field.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-headline font-semibold text-[#002366] text-lg mb-4">What's your current situation?</h3>
        <div className="flex flex-col gap-3">
          {situations.map((sit) => {
            const isSelected = selectedSituation === sit.id;
            const Icon = sit.icon;
            return (
              <button
                key={sit.id}
                onClick={() => setSelectedSituation(sit.id)}
                className={`flex items-center p-4 rounded-xl w-full transition-all duration-150 border-l-4
                  ${isSelected ? 'border-l-[#FFBF00] bg-[#EEF1F8] shadow-sm' : 'border-l-transparent bg-white shadow-sm hover:shadow-md'}
                `}
              >
                <Icon className={`w-5 h-5 mr-4 ${isSelected ? 'text-[#002366]' : 'text-[#6B7280]'}`} />
                <span className={`text-sm font-medium ${isSelected ? 'text-[#002366]' : 'text-[#444650]'}`}>{sit.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <motion.button 
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={nextStep}
          disabled={!selectedField || !selectedSituation}
          className="w-full sm:w-auto bg-[#FFBF00] text-[#002366] font-headline font-bold h-[52px] px-8 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Show Me Courses →
        </motion.button>
        <button 
          onClick={() => navigate('/')}
          className="w-full sm:w-auto border-2 border-[#002366] text-[#002366] font-headline font-bold h-[52px] px-8 rounded-xl flex items-center justify-center hover:bg-[#002366]/5 transition-colors"
        >
          ← Back
        </button>
      </div>
    </div>
  );

  const renderStep2B = () => (
    <div className="max-w-3xl mx-auto w-full">
      <h1 className="font-headline font-bold text-[#002366] text-3xl md:text-4xl mb-2">What's your career pivot story?</h1>
      <p className="font-body text-[#6B7280] text-base md:text-lg mb-10">We'll match you with courses that bridge where you are to where you want to be.</p>

      <div className="mb-10">
        <h3 className="font-headline font-semibold text-[#002366] text-lg mb-4">What field are you coming FROM?</h3>
        <select 
          value={pivotFrom}
          onChange={(e) => setPivotFrom(e.target.value)}
          className="w-full h-[52px] px-4 rounded-xl border-2 border-transparent bg-white shadow-sm focus:border-b-[#FFBF00] focus:outline-none font-body text-[#002366]"
        >
          <option value="" disabled>Select a field...</option>
          {pivotFields.map(f => <option key={f} value={f}>{f}</option>)}
        </select>
      </div>

      <div className="mb-10">
        <h3 className="font-headline font-semibold text-[#002366] text-lg mb-4">Where do you want to GO?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {fields.map((field) => {
            const isSelected = pivotTo === field.id;
            const Icon = field.icon;
            return (
              <button
                key={field.id}
                onClick={() => setPivotTo(field.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl h-20 transition-all duration-150 border-2
                  ${isSelected ? 'border-[#FFBF00] bg-[#EEF1F8]' : 'border-transparent bg-white shadow-sm hover:shadow-md'}
                `}
              >
                <Icon className={`w-6 h-6 mb-2 ${isSelected ? 'text-[#002366]' : 'text-[#6B7280]'}`} />
                <span className={`text-xs font-medium ${isSelected ? 'text-[#002366]' : 'text-[#444650]'}`}>{field.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-headline font-semibold text-[#002366] text-lg mb-4">How soon are you looking to transition?</h3>
        <div className="flex flex-wrap gap-3">
          {timelines.map((t) => {
            const isSelected = timeline === t;
            return (
              <button
                key={t}
                onClick={() => setTimeline(t)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-150 border
                  ${isSelected ? 'bg-[#FFBF00] text-[#002366] border-[#FFBF00]' : 'bg-white text-[#444650] border-gray-200 hover:border-gray-300'}
                `}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <motion.button 
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={nextStep}
          disabled={!pivotFrom || !pivotTo || !timeline}
          className="w-full sm:w-auto bg-[#FFBF00] text-[#002366] font-headline font-bold h-[52px] px-8 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Find My Bridge Courses →
        </motion.button>
        <button 
          onClick={() => navigate('/')}
          className="w-full sm:w-auto border-2 border-[#002366] text-[#002366] font-headline font-bold h-[52px] px-8 rounded-xl flex items-center justify-center hover:bg-[#002366]/5 transition-colors"
        >
          ← Back
        </button>
      </div>
    </div>
  );

  const renderStep2C = () => (
    <div className="max-w-3xl mx-auto w-full">
      <h1 className="font-headline font-bold text-[#002366] text-3xl md:text-4xl mb-2">What does growth look like for you?</h1>
      <p className="font-body text-[#6B7280] text-base md:text-lg mb-10">Let's sharpen the skills that will get you to that next level.</p>

      <div className="mb-10">
        <h3 className="font-headline font-semibold text-[#002366] text-lg mb-4">What's your current role?</h3>
        <input 
          type="text"
          value={currentRole}
          onChange={(e) => setCurrentRole(e.target.value)}
          placeholder="e.g. Marketing Manager, Software Engineer, Teacher..."
          className="w-full h-[52px] px-4 rounded-xl border-2 border-transparent bg-white shadow-sm focus:border-b-[#FFBF00] focus:outline-none font-body text-[#002366]"
        />
      </div>

      <div className="mb-10">
        <h3 className="font-headline font-semibold text-[#002366] text-lg mb-4">What skills do you want to develop?</h3>
        <div className="flex flex-wrap gap-3">
          {skillsToDevelop.map((skill) => {
            const isSelected = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                onClick={() => {
                  if (isSelected) {
                    setSelectedSkills(selectedSkills.filter(s => s !== skill));
                  } else {
                    setSelectedSkills([...selectedSkills, skill]);
                  }
                }}
                className={`h-[36px] px-4 rounded-full font-medium text-sm transition-all duration-150 border flex items-center gap-2
                  ${isSelected ? 'bg-[#FFBF00] text-[#002366] border-[#FFBF00]' : 'bg-white text-[#444650] border-gray-200 hover:border-gray-300'}
                `}
              >
                {isSelected && <Check size={14} strokeWidth={3} />}
                {skill}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-headline font-semibold text-[#002366] text-lg mb-4">What's your experience level?</h3>
        <div className="flex flex-col gap-3">
          {[
            { id: 'beginner', label: 'Beginner', bars: '▬░░' },
            { id: 'intermediate', label: 'Intermediate', bars: '▬▬░' },
            { id: 'advanced', label: 'Advanced', bars: '▬▬▬' },
          ].map((level) => {
            const isSelected = experienceLevel === level.id;
            return (
              <button
                key={level.id}
                onClick={() => setExperienceLevel(level.id)}
                className={`flex items-center p-4 rounded-xl w-full transition-all duration-150 border-2
                  ${isSelected ? 'border-[#FFBF00] bg-[#EEF1F8]' : 'border-transparent bg-white shadow-sm hover:shadow-md'}
                `}
              >
                <span className="text-[#FFBF00] mr-3">🟡</span>
                <span className="font-mono text-[#6B7280] mr-4 tracking-widest">{level.bars}</span>
                <span className={`text-sm font-medium ${isSelected ? 'text-[#002366]' : 'text-[#444650]'}`}>{level.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <motion.button 
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={nextStep}
          disabled={!currentRole || selectedSkills.length === 0 || !experienceLevel}
          className="w-full sm:w-auto bg-[#FFBF00] text-[#002366] font-headline font-bold h-[52px] px-8 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Level Up My Skills →
        </motion.button>
        <button 
          onClick={() => navigate('/')}
          className="w-full sm:w-auto border-2 border-[#002366] text-[#002366] font-headline font-bold h-[52px] px-8 rounded-xl flex items-center justify-center hover:bg-[#002366]/5 transition-colors"
        >
          ← Back
        </button>
      </div>
    </div>
  );

  const renderStep2D = () => (
    <div className="max-w-4xl mx-auto w-full">
      <h1 className="font-headline font-bold text-[#002366] text-3xl md:text-4xl mb-2">What are you curious about?</h1>
      <p className="font-body text-[#6B7280] text-base md:text-lg mb-10">Learning doesn't have to be about work. Explore what excites you.</p>

      <div className="mb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {exploreTopics.map((topic) => {
            const isSelected = selectedTopics.includes(topic.id);
            return (
              <button
                key={topic.id}
                onClick={() => {
                  if (isSelected) {
                    setSelectedTopics(selectedTopics.filter(t => t !== topic.id));
                  } else {
                    setSelectedTopics([...selectedTopics, topic.id]);
                  }
                }}
                className={`relative h-[120px] rounded-xl overflow-hidden transition-all duration-150 border-4
                  ${isSelected ? 'border-[#FFBF00] scale-[1.03] shadow-md z-10' : 'border-transparent shadow-sm hover:shadow-md'}
                `}
              >
                <img src={topic.image} alt={topic.label} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#FFBF00] rounded-full flex items-center justify-center z-20">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
                  <span className="text-white font-headline font-bold text-sm text-center drop-shadow-md">{topic.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <p className="text-sm text-[#6B7280] mb-12 text-center">Pick as many as you like</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <motion.button 
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={nextStep}
          disabled={selectedTopics.length === 0}
          className="w-full sm:w-auto bg-[#FFBF00] text-[#002366] font-headline font-bold h-[52px] px-8 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Explore These Topics →
        </motion.button>
        <button 
          onClick={() => navigate('/')}
          className="w-full sm:w-auto border-2 border-[#002366] text-[#002366] font-headline font-bold h-[52px] px-8 rounded-xl flex items-center justify-center hover:bg-[#002366]/5 transition-colors"
        >
          ← Back
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-3xl mx-auto w-full">
      <h1 className="font-headline font-bold text-[#002366] text-3xl md:text-4xl mb-2">One last thing — how do you learn best?</h1>
      <p className="font-body text-[#6B7280] text-base md:text-lg mb-10">We'll recommend the right pace and format for you.</p>

      <div className="mb-10">
        <h3 className="font-headline font-semibold text-[#002366] text-lg mb-4">How much time can you dedicate weekly?</h3>
        <div className="flex flex-wrap gap-3">
          {timeCommitments.map((t) => {
            const isSelected = timeCommitment === t;
            return (
              <button
                key={t}
                onClick={() => setTimeCommitment(t)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-150 border
                  ${isSelected ? 'bg-[#FFBF00] text-[#002366] border-[#FFBF00]' : 'bg-white text-[#444650] border-gray-200 hover:border-gray-300'}
                `}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-headline font-semibold text-[#002366] text-lg mb-4">Preferred learning style?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {learningStyles.map((style) => {
            const isSelected = selectedStyles.includes(style.id);
            const Icon = style.icon;
            return (
              <button
                key={style.id}
                onClick={() => {
                  if (isSelected) {
                    setSelectedStyles(selectedStyles.filter(s => s !== style.id));
                  } else {
                    setSelectedStyles([...selectedStyles, style.id]);
                  }
                }}
                className={`flex flex-col items-center justify-center p-4 rounded-xl h-24 transition-all duration-150 border-2
                  ${isSelected ? 'border-[#FFBF00] bg-[#EEF1F8]' : 'border-transparent bg-white shadow-sm hover:shadow-md'}
                `}
              >
                <Icon className={`w-6 h-6 mb-2 ${isSelected ? 'text-[#002366]' : 'text-[#6B7280]'}`} />
                <span className={`text-xs font-medium text-center ${isSelected ? 'text-[#002366]' : 'text-[#444650]'}`}>{style.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <motion.button 
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={nextStep}
          disabled={!timeCommitment || selectedStyles.length === 0}
          className="w-full sm:w-auto bg-[#FFBF00] text-[#002366] font-headline font-bold h-[52px] px-8 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Create My Learning Plan →
        </motion.button>
        <button 
          onClick={prevStep}
          className="w-full sm:w-auto border-2 border-[#002366] text-[#002366] font-headline font-bold h-[52px] px-8 rounded-xl flex items-center justify-center hover:bg-[#002366]/5 transition-colors"
        >
          ← Back
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => {
    let message = '';
    let tags: string[] = [];

    switch (intent) {
      case 'start':
        message = "Your career journey starts here.";
        if (selectedField) tags.push(fields.find(f => f.id === selectedField)?.label || '');
        break;
      case 'change':
        message = "Your pivot starts today.";
        if (pivotTo) tags.push(fields.find(f => f.id === pivotTo)?.label || '');
        break;
      case 'grow':
        message = "Level up starts now.";
        tags = selectedSkills.slice(0, 3);
        break;
      case 'explore':
        message = "Curiosity has a home here.";
        tags = selectedTopics.slice(0, 3).map(id => exploreTopics.find(t => t.id === id)?.label || '');
        break;
    }

    return (
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="font-headline font-bold text-[#002366] text-2xl md:text-3xl mb-4">{message}</h1>
          {tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm text-[#6B7280] mr-2 self-center">Your interests:</span>
              {tags.map((tag, i) => (
                <span key={i} className="bg-[#FFBF00]/20 text-[#D48806] text-xs font-bold px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <div className="flex border-b border-gray-200 mb-6">
            <button className="flex-1 pb-4 font-headline font-bold text-[#002366] border-b-2 border-[#002366]">Sign Up</button>
            <button className="flex-1 pb-4 font-headline font-medium text-[#6B7280] hover:text-[#002366]">Sign In</button>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); handleFinish(); }}>
            <div>
              <label className="block text-sm font-medium text-[#444650] mb-1">Full Name</label>
              <input type="text" className="w-full h-[48px] px-4 rounded-xl border border-gray-300 focus:border-[#002366] focus:ring-1 focus:ring-[#002366] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#444650] mb-1">Email Address</label>
              <input type="email" className="w-full h-[48px] px-4 rounded-xl border border-gray-300 focus:border-[#002366] focus:ring-1 focus:ring-[#002366] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#444650] mb-1">Password</label>
              <input type="password" className="w-full h-[48px] px-4 rounded-xl border border-gray-300 focus:border-[#002366] focus:ring-1 focus:ring-[#002366] outline-none" />
            </div>
            <button type="submit" className="mt-4 w-full bg-[#002366] text-white font-headline font-bold h-[52px] rounded-xl hover:opacity-90 transition-opacity">
              Create Account
            </button>
          </form>
          
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <button className="mt-6 w-full border border-gray-300 text-[#444650] font-medium h-[52px] rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <button onClick={prevStep} className="text-[#6B7280] hover:text-[#002366] text-sm font-medium flex items-center justify-center gap-1 mx-auto">
            <ChevronLeft size={16} /> Back
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] flex flex-col font-body">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <Link to="/" className="flex items-center">
          <img src="https://drive.google.com/thumbnail?id=11ee_UL2J5eym9KSOjW98ttpk78O11E4Z&sz=w500" alt="SkillsZone Africa" className="h-8 object-contain" referrerPolicy="no-referrer" />
        </Link>
        <div className="text-sm font-medium text-[#6B7280]">
          Step {step - 1} of 3
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6 md:p-12 overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", ease: "easeInOut", duration: 0.3 },
              opacity: { duration: 0.2 }
            }}
            className="w-full"
          >
            {step === 2 && intent === 'start' && renderStep2A()}
            {step === 2 && intent === 'change' && renderStep2B()}
            {step === 2 && intent === 'grow' && renderStep2C()}
            {step === 2 && intent === 'explore' && renderStep2D()}
            {step === 3 && renderStep3()}
            {step === 4 && renderStep4()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
