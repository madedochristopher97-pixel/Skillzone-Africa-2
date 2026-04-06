import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, Plus, X, UploadCloud, Link as LinkIcon, UserCircle, Smartphone, Landmark, Globe, CircleDot, Circle, Info, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { pageVariants, DURATIONS, EASINGS } from '../constants/animations';

export default function InstructorOnboarding() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const shouldReduceMotion = useReducedMotion();
  const [expertise, setExpertise] = useState(['IT', 'Business']);
  const [paymentMethod, setPaymentMethod] = useState('mpesa'); // 'mpesa', 'bank', 'paypal'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    password: '',
    confirmPassword: ''
  });

  const paginate = (newStep: number) => {
    setDirection(newStep > step ? 1 : -1);
    setStep(newStep);
  };

  const toggleExpertise = (item: string) => {
    if (expertise.includes(item)) {
      setExpertise(expertise.filter(e => e !== item));
    } else {
      setExpertise([...expertise, item]);
    }
  };

  return (
    <div className="bg-[#fcf9f4] font-body text-[#1c1c19] antialiased min-h-screen flex flex-col">
      {/* Top Navigation Anchor */}
      <header className="bg-[#fcf9f4] flex justify-between items-center px-6 py-4 w-full max-w-none sticky top-0 z-50">
        <Link to="/" className="inline-block">
          <img src="https://drive.google.com/thumbnail?id=11ee_UL2J5eym9KSOjW98ttpk78O11E4Z&sz=w500" alt="SkillsZone Africa" className="h-8 object-contain" referrerPolicy="no-referrer" />
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <span className={`font-medium font-headline cursor-pointer transition-colors duration-200 ${step === 1 ? 'text-[#002366] font-bold border-b-2 border-[#ffdfa0]' : 'text-[#757682] hover:text-[#002366]'}`} onClick={() => paginate(1)}>Your Info</span>
          <span className={`font-medium font-headline cursor-pointer transition-colors duration-200 ${step === 2 ? 'text-[#002366] font-bold border-b-2 border-[#ffdfa0]' : 'text-[#757682] hover:text-[#002366]'}`} onClick={() => paginate(2)}>Expertise</span>
          <span className={`font-medium font-headline cursor-pointer transition-colors duration-200 ${step === 3 ? 'text-[#002366] font-bold border-b-2 border-[#ffdfa0]' : 'text-[#757682] hover:text-[#002366]'}`} onClick={() => paginate(3)}>Payout</span>
        </div>
        <div className="flex items-center gap-4">
          <UserCircle className="text-[#002366] w-8 h-8 cursor-pointer active:scale-95 transition-all" />
        </div>
      </header>

      <main className="min-h-[calc(100vh-72px)] flex flex-col md:flex-row">
        {/* Left Column: Form Section (55%) */}
        <section className="w-full md:w-[55%] bg-[#fcf9f4] px-8 md:px-16 py-12 overflow-y-auto">
          {/* Progress Stepper */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="flex items-center justify-between relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-2 z-10">
                {step > 1 ? (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm cursor-pointer" 
                    onClick={() => paginate(1)}
                  >
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </motion.div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#ffbf00] text-[#261a00] flex items-center justify-center shadow-md ring-4 ring-[#ffbf00]/20">
                    <span className="font-headline font-bold">1</span>
                  </div>
                )}
                <span className={`text-[10px] font-bold uppercase tracking-widest font-label ${step > 1 ? 'text-[#444650]' : 'text-[#00113a]'}`}>Your Info</span>
              </div>
              
              {/* Connector */}
              <div className="absolute top-5 left-0 w-full h-[2px] bg-[#e5e2dd] -z-0">
                <motion.div 
                  className="h-full bg-[#ffbf00]"
                  initial={false}
                  animate={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
                  transition={{ duration: DURATIONS.slow, ease: EASINGS.default }}
                ></motion.div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center gap-2 z-10">
                {step > 2 ? (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm cursor-pointer" 
                    onClick={() => paginate(2)}
                  >
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </motion.div>
                ) : step === 2 ? (
                  <div className="w-10 h-10 rounded-full bg-[#ffbf00] text-[#261a00] flex items-center justify-center shadow-md ring-4 ring-[#ffbf00]/20">
                    <span className="font-headline font-bold">2</span>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#002366] text-[#002366] flex items-center justify-center">
                    <span className="font-headline font-bold">2</span>
                  </div>
                )}
                <span className={`text-[10px] font-bold uppercase tracking-widest font-label ${step === 2 ? 'text-[#00113a]' : 'text-[#444650] opacity-40'}`}>Expertise</span>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center gap-2 z-10">
                {step === 3 ? (
                  <div className="w-10 h-10 rounded-full bg-[#ffbf00] text-[#261a00] flex items-center justify-center shadow-md ring-4 ring-[#ffbf00]/20">
                    <span className="font-headline font-bold">3</span>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#002366] text-[#002366] flex items-center justify-center">
                    <span className="font-headline font-bold">3</span>
                  </div>
                )}
                <span className={`text-[10px] font-bold uppercase tracking-widest font-label ${step === 3 ? 'text-[#00113a]' : 'text-[#444650] opacity-40'}`}>Payout</span>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="max-w-xl mx-auto overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={pageVariants}
                  initial={shouldReduceMotion ? false : (direction === 0 ? false : (direction > 0 ? "initialForward" : "initialBackward"))}
                  animate={direction > 0 ? "animateForward" : (direction < 0 ? "animateBackward" : { opacity: 1, x: 0 })}
                  exit={direction > 0 ? "exitForward" : "exitBackward"}
                  className="space-y-10"
                >
                  <header className="space-y-2">
                    <h1 className="text-4xl font-headline font-extrabold text-[#00113a] tracking-tight leading-tight">Become an Instructor</h1>
                    <p className="text-[#444650] font-body">Join thousands of African professionals sharing their expertise and building the continent's largest learning community.</p>
                  </header>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="font-label text-[11px] font-bold uppercase tracking-widest text-[#795900] mb-3">Full Name</label>
                      <input 
                        className="w-full bg-[#f6f3ee] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 focus:bg-white transition-all px-4 py-3 text-lg font-medium text-[#00113a] outline-none" 
                        placeholder="e.g. Kofi Annan" 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-label text-[11px] font-bold uppercase tracking-widest text-[#795900] mb-3">Email Address</label>
                      <input 
                        className="w-full bg-[#f6f3ee] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 focus:bg-white transition-all px-4 py-3 text-lg font-medium text-[#00113a] outline-none" 
                        placeholder="kofi@skillszone.af" 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="font-label text-[11px] font-bold uppercase tracking-widest text-[#795900] mb-3">Phone Number</label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-[#444650] font-medium">+254</span>
                        <input 
                          className="w-full bg-[#f6f3ee] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 focus:bg-white transition-all pl-16 pr-4 py-3 text-lg font-medium text-[#00113a] outline-none" 
                          placeholder="700 000 000" 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="font-label text-[11px] font-bold uppercase tracking-widest text-[#795900] mb-3">What will you teach?</label>
                      <select 
                        className="w-full bg-[#f6f3ee] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 focus:bg-white transition-all px-4 py-3 text-lg font-medium text-[#00113a] outline-none appearance-none"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                      >
                        <option value="">Select a category</option>
                        <option>Software Development</option>
                        <option>Business & Strategy</option>
                        <option>Creative Arts</option>
                        <option>Digital Marketing</option>
                        <option>Data Science</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="font-label text-[11px] font-bold uppercase tracking-widest text-[#795900] mb-3">Password</label>
                      <input 
                        className="w-full bg-[#f6f3ee] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 focus:bg-white transition-all px-4 py-3 text-lg font-medium text-[#00113a] outline-none" 
                        placeholder="••••••••" 
                        type="password"
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-label text-[11px] font-bold uppercase tracking-widest text-[#795900] mb-3">Confirm Password</label>
                      <input 
                        className="w-full bg-[#f6f3ee] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 focus:bg-white transition-all px-4 py-3 text-lg font-medium text-[#00113a] outline-none" 
                        placeholder="••••••••" 
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button 
                      className="w-full md:w-[280px] h-[52px] flex items-center justify-center bg-[#FFBF00] text-[#002366] rounded-xl font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#D48806] transition-all" 
                      type="submit"
                    >
                      Continue to Expertise
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={pageVariants}
                initial={shouldReduceMotion ? false : (direction > 0 ? "initialForward" : "initialBackward")}
                animate={direction > 0 ? "animateForward" : "animateBackward"}
                exit={direction > 0 ? "exitForward" : "exitBackward"}
                className="space-y-10"
              >
                <header className="space-y-2">
                  <h1 className="text-4xl font-headline font-extrabold text-[#00113a] tracking-tight leading-tight">Mastery Details</h1>
                  <p className="text-[#444650] font-body">Help us understand your professional background to match you with the right opportunities.</p>
                </header>
                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                  {/* Years of Experience */}
                  <div className="group">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#795900] mb-3 font-label">Years of Experience</label>
                    <input className="w-full bg-[#f6f3ee] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 focus:bg-white transition-all px-4 py-3 text-lg font-medium text-[#00113a] outline-none" placeholder="e.g. 5" type="number" />
                  </div>

                  {/* Area of Expertise (Multi-select) */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#795900] mb-4 font-label">Area of Expertise</label>
                    <div className="flex flex-wrap gap-3">
                      {['IT', 'Accounting', 'Business', 'Design', 'Engineering'].map((item) => (
                        <button 
                          key={item}
                          onClick={() => toggleExpertise(item)}
                          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${expertise.includes(item) ? 'bg-[#002366] text-white hover:opacity-90' : 'bg-[#e5e2dd] text-[#444650] hover:bg-[#ffdfa0]'}`} 
                          type="button"
                        >
                          {item} {expertise.includes(item) && <X className="w-3 h-3" />}
                        </button>
                      ))}
                      <button className="px-4 py-2 border-2 border-dashed border-[#c5c6d2] rounded-full text-[#444650] text-sm flex items-center gap-1 hover:border-[#795900] transition-all" type="button">
                        <Plus className="w-4 h-4" /> More
                      </button>
                    </div>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#795900] mb-3 font-label">Upload CV/Resume</label>
                    <div className="w-full h-32 border-2 border-dashed border-[#c5c6d2] bg-[#f6f3ee] rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white hover:border-[#795900] transition-all group">
                      <UploadCloud className="w-8 h-8 text-[#757682] group-hover:text-[#795900]" />
                      <span className="text-sm font-medium text-[#444650]">Drag and drop or <span className="text-[#00113a] font-bold">browse files</span></span>
                    </div>
                  </div>

                  {/* Professional Bio */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#795900] mb-3 font-label">Brief Professional Bio</label>
                    <textarea className="w-full bg-[#f6f3ee] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 focus:bg-white transition-all px-4 py-3 text-base text-[#1c1c19] outline-none" placeholder="Tell us about your journey and what drives you to teach..." rows={4}></textarea>
                  </div>

                  {/* Links */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#795900] mb-3 font-label">Links to Portfolio/Socials</label>
                    <div className="relative">
                      <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757682] w-5 h-5" />
                      <input className="w-full bg-[#f6f3ee] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 focus:bg-white transition-all pl-12 pr-4 py-3 text-base text-[#1c1c19] outline-none" placeholder="https://linkedin.com/in/yourname" type="text" />
                    </div>
                  </div>

                  {/* Continue Button */}
                  <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-4">
                    <button 
                      className="w-full md:w-[280px] h-[52px] flex items-center justify-center space-x-2 border-2 border-[#002366] text-[#002366] rounded-xl font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#002366] hover:text-white transition-all" 
                      type="button"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </button>
                    <button 
                      className="w-full md:w-[280px] h-[52px] flex items-center justify-center bg-[#FFBF00] text-[#002366] rounded-xl font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#D48806] transition-all ml-auto" 
                      type="submit"
                    >
                      Continue to Payout
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={pageVariants}
                initial={shouldReduceMotion ? false : (direction > 0 ? "initialForward" : "initialBackward")}
                animate={direction > 0 ? "animateForward" : "animateBackward"}
                exit={direction > 0 ? "exitForward" : "exitBackward"}
                className="space-y-10"
              >
                <header className="space-y-2">
                  <h1 className="text-4xl font-headline font-extrabold text-[#00113a] tracking-tight leading-tight">How would you like to get paid?</h1>
                  <p className="text-[#444650] font-body text-lg">Select your preferred payment method to receive your earnings every Friday.</p>
                </header>
                
                <form className="space-y-8" onSubmit={(e) => { 
                  e.preventDefault(); 
                  // Perform login with Step 1 registration data
                  login({
                    name: formData.name,
                    email: formData.email,
                    role: 'instructor'
                  });
                  navigate('/application-submitted'); 
                }}>
                  {/* Payment Method Cards */}
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {/* M-Pesa */}
                    <button 
                      type="button" 
                      onClick={() => setPaymentMethod('mpesa')}
                      className={`flex items-center p-6 rounded-xl text-left transition-all shadow-sm ${paymentMethod === 'mpesa' ? 'bg-white border-2 border-[#795900]' : 'bg-[#f6f3ee] border border-transparent hover:bg-[#e5e2dd]'}`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${paymentMethod === 'mpesa' ? 'bg-[#4CAF50]/10' : 'bg-[#00113a]/5'}`}>
                        <Smartphone className={`w-6 h-6 ${paymentMethod === 'mpesa' ? 'text-[#4CAF50]' : 'text-[#00113a]'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#00113a] text-lg font-headline">M-Pesa</span>
                          {paymentMethod === 'mpesa' ? (
                            <CircleDot className="w-6 h-6 text-[#795900]" />
                          ) : (
                            <Circle className="w-6 h-6 text-[#757682]" />
                          )}
                        </div>
                        <p className="text-[#444650] text-sm font-body">Direct to Mobile Money</p>
                      </div>
                    </button>
                    
                    {/* Bank Transfer */}
                    <button 
                      type="button" 
                      onClick={() => setPaymentMethod('bank')}
                      className={`flex items-center p-6 rounded-xl text-left transition-all shadow-sm ${paymentMethod === 'bank' ? 'bg-white border-2 border-[#795900]' : 'bg-[#f6f3ee] border border-transparent hover:bg-[#e5e2dd]'}`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${paymentMethod === 'bank' ? 'bg-[#00113a]/10' : 'bg-[#00113a]/5'}`}>
                        <Landmark className={`w-6 h-6 ${paymentMethod === 'bank' ? 'text-[#00113a]' : 'text-[#00113a]'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#00113a] text-lg font-headline">Bank Transfer</span>
                          {paymentMethod === 'bank' ? (
                            <CircleDot className="w-6 h-6 text-[#795900]" />
                          ) : (
                            <Circle className="w-6 h-6 text-[#757682]" />
                          )}
                        </div>
                        <p className="text-[#444650] text-sm font-body">Local Bank Account</p>
                      </div>
                    </button>
                    
                    {/* PayPal */}
                    <button 
                      type="button" 
                      onClick={() => setPaymentMethod('paypal')}
                      className={`flex items-center p-6 rounded-xl text-left transition-all shadow-sm ${paymentMethod === 'paypal' ? 'bg-white border-2 border-[#795900]' : 'bg-[#f6f3ee] border border-transparent hover:bg-[#e5e2dd]'}`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${paymentMethod === 'paypal' ? 'bg-blue-500/10' : 'bg-blue-500/5'}`}>
                        <Globe className={`w-6 h-6 ${paymentMethod === 'paypal' ? 'text-blue-600' : 'text-blue-600'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#00113a] text-lg font-headline">PayPal</span>
                          {paymentMethod === 'paypal' ? (
                            <CircleDot className="w-6 h-6 text-[#795900]" />
                          ) : (
                            <Circle className="w-6 h-6 text-[#757682]" />
                          )}
                        </div>
                        <p className="text-[#444650] text-sm font-body">International Transfers</p>
                      </div>
                    </button>
                  </div>

                  {/* Active Form Section */}
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {paymentMethod === 'mpesa' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#00113a] font-label uppercase tracking-widest">Phone Number</label>
                          <input 
                            className="w-full bg-[#e5e2dd] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 rounded-t-lg px-4 py-3 text-[#1c1c19] font-medium transition-all outline-none" 
                            placeholder="Enter phone number" 
                            type="text" 
                            defaultValue="+254"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#00113a] font-label uppercase tracking-widest">Full Name (as per M-Pesa)</label>
                          <input 
                            className="w-full bg-[#e5e2dd] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 rounded-t-lg px-4 py-3 text-[#1c1c19] font-medium transition-all outline-none" 
                            placeholder="John Doe" 
                            type="text"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'bank' && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-[#00113a] font-label uppercase tracking-widest">Bank Name</label>
                            <input 
                              className="w-full bg-[#e5e2dd] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 rounded-t-lg px-4 py-3 text-[#1c1c19] font-medium transition-all outline-none" 
                              placeholder="e.g. Standard Chartered" 
                              type="text"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-[#00113a] font-label uppercase tracking-widest">Account Number</label>
                            <input 
                              className="w-full bg-[#e5e2dd] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 rounded-t-lg px-4 py-3 text-[#1c1c19] font-medium transition-all outline-none" 
                              placeholder="0000000000" 
                              type="text"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#00113a] font-label uppercase tracking-widest">Account Holder Name</label>
                          <input 
                            className="w-full bg-[#e5e2dd] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 rounded-t-lg px-4 py-3 text-[#1c1c19] font-medium transition-all outline-none" 
                            placeholder="John Doe" 
                            type="text"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#00113a] font-label uppercase tracking-widest">SWIFT / Routing Number (Optional)</label>
                          <input 
                            className="w-full bg-[#e5e2dd] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 rounded-t-lg px-4 py-3 text-[#1c1c19] font-medium transition-all outline-none" 
                            placeholder="XXXXXX" 
                            type="text"
                          />
                        </div>
                      </>
                    )}

                    {paymentMethod === 'paypal' && (
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-[#00113a] font-label uppercase tracking-widest">PayPal Email Address</label>
                        <input 
                          className="w-full bg-[#e5e2dd] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 rounded-t-lg px-4 py-3 text-[#1c1c19] font-medium transition-all outline-none" 
                          placeholder="instructor@example.com" 
                          type="email"
                          required
                        />
                      </div>
                    )}
                    
                    {/* Info Box */}
                    <div className="flex items-start gap-3 bg-[#002366]/5 p-4 rounded-xl">
                      <Info className="w-5 h-5 text-[#00113a] shrink-0 mt-0.5" />
                      <p className="text-sm text-[#00113a] leading-relaxed font-body">
                        Payouts are processed every Friday. Minimum payout: <span className="font-bold">KSh 1,000.</span> Funds will arrive in your wallet within 2 hours of processing.
                      </p>
                    </div>
                    
                    {/* Continue Button */}
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-4">
                      <button 
                        className="w-full md:w-[280px] h-[52px] flex items-center justify-center space-x-2 border-2 border-[#002366] text-[#002366] rounded-xl font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#002366] hover:text-white transition-all" 
                        type="button"
                        onClick={() => setStep(2)}
                      >
                        Back
                      </button>
                      <button 
                        className="w-full md:w-[280px] h-[52px] flex items-center justify-center bg-[#FFBF00] text-[#002366] rounded-xl font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#D48806] transition-all ml-auto" 
                        type="submit"
                      >
                        Finish Application
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

        {/* Right Column: Visual Side (45%) */}
        <section className="hidden md:flex md:w-[45%] bg-[#002366] relative flex-col justify-end p-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <div className="absolute top-[-10%] left-[-10%] w-full h-full rounded-full bg-[#795900] blur-[120px]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-white blur-[150px]"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-10 space-y-12">
            {/* Image Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#ffbf00] rotate-3 rounded-[3rem] opacity-20 transition-transform group-hover:rotate-6"></div>
              <img className="relative w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl border-4 border-white/5" alt="A professional African mentor smiling confidently" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3b8HGPy_sH5LpVvztoiLUfcea1BZZaIPk3oGBzYnt8bfLrmTEZ7RGqyh521ucThFjYicIJJywXo7IihFIgflUAHpUQcWiVUCxV6WcSmaQLeTDHtM0onHCUlyo_QS16-Ux8l5OUH6qXY8CstM4Z1tDi-U9suqB4Bs581Rs5CNZVNZch4CRJ9dwubkWMjJkoYWPx7l9ttaAz0AqnnX_KEo3JS60OrITxAostIZ7wqm8dCf__zH7WVZwOO12Y_5URkUYHb0S1enQfw" referrerPolicy="no-referrer" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-5xl font-headline font-black text-white leading-tight tracking-tighter">Showcase Your Mastery</h2>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-[#ffdfa0] font-medium text-lg">
                  <span className="w-8 h-8 rounded-full bg-[#ffbf00] flex items-center justify-center text-[#261a00]">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  Verified instructor badge
                </li>
                <li className="flex items-center gap-4 text-[#ffdfa0] font-medium text-lg">
                  <span className="w-8 h-8 rounded-full bg-[#ffbf00] flex items-center justify-center text-[#261a00]">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  Customized student matching
                </li>
                <li className="flex items-center gap-4 text-[#ffdfa0] font-medium text-lg">
                  <span className="w-8 h-8 rounded-full bg-[#ffbf00] flex items-center justify-center text-[#261a00]">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  Curriculum development support
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
