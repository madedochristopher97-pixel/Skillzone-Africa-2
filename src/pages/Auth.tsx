import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { DURATIONS, EASINGS, SPRINGS, tabContentVariants } from '../constants/animations';

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const shouldReduceMotion = useReducedMotion();
  const [isSignUp, setIsSignUp] = useState(location.state?.isSignUp ?? true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (location.state?.isSignUp !== undefined) {
      setIsSignUp(location.state.isSignUp);
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({
      name: name || 'Test User',
      email: email || 'test@example.com',
      role: 'learner'
    });

    const returnTo = location.state?.returnTo || '/learner-dashboard';
    navigate(returnTo);
  };

  return (
    <main className="flex min-h-screen flex-col md:flex-row overflow-hidden font-body bg-[#fcf9f4]">
      {/* Left Side: Form (55%) */}
      <section className="w-full md:w-[55%] bg-[#f6f3ee] px-6 py-8 md:px-16 md:py-12 flex flex-col justify-between">
        {/* Brand Logo */}
        <div className="mb-12">
          <Link to="/" className="inline-block">
            <img src="https://drive.google.com/thumbnail?id=11ee_UL2J5eym9KSOjW98ttpk78O11E4Z&sz=w500" alt="SkillsZone Africa" className="h-8 object-contain" referrerPolicy="no-referrer" />
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto">
          {location.state?.message && (
            <div className="mb-6 p-4 bg-[#ffdfa0] text-[#6d5000] rounded-xl font-medium text-sm text-center">
              {location.state.message}
            </div>
          )}

          {/* Tab Switcher */}
          <div className="relative inline-flex p-1 mb-10 bg-[#e5e2dd] rounded-full w-full max-w-[280px] isolation-auto">
            <button
              onClick={() => setIsSignUp(false)}
              className={`relative flex-1 py-2 px-6 rounded-full text-sm font-semibold transition-colors duration-200 z-10 ${
                !isSignUp ? 'text-[#002366]' : 'text-slate-600 hover:text-[#00113a]'
              }`}
            >
              Sign In
              {!isSignUp && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute inset-0 bg-[#ffbf00] rounded-full shadow-sm -z-10"
                  transition={SPRINGS.default}
                />
              )}
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`relative flex-1 py-2 px-6 rounded-full text-sm font-semibold transition-colors duration-200 z-10 ${
                isSignUp ? 'text-[#002366]' : 'text-slate-600 hover:text-[#00113a]'
              }`}
            >
              Sign Up
              {isSignUp && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute inset-0 bg-[#ffbf00] rounded-full shadow-sm -z-10"
                  transition={SPRINGS.default}
                />
              )}
            </button>
          </div>

          {/* Form Header */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={isSignUp ? 'signup-header' : 'signin-header'}
              variants={tabContentVariants}
              initial={shouldReduceMotion ? false : "initialForward"}
              animate="animateForward"
              exit="exitForward"
              className="mb-8"
            >
              <h1 className="text-3xl font-bold text-[#00113a] mb-2 font-headline">
                {isSignUp ? 'Create your account' : 'Welcome back'}
              </h1>
              <p className="text-[#444650]">
                {isSignUp ? 'Join the tribe of modern African experts.' : 'Sign in to continue your learning journey.'}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <AnimatePresence mode="popLayout">
              {isSignUp && (
                <motion.div 
                  key="name-fields"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-2 gap-4 overflow-hidden"
                >
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#444650] uppercase tracking-wider font-label">First Name</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border-[#c5c6d2] bg-white focus:ring-2 focus:ring-[#795900] focus:border-transparent transition-all outline-none text-sm"
                      placeholder="Kofi"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#444650] uppercase tracking-wider font-label">Last Name</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border-[#c5c6d2] bg-white focus:ring-2 focus:ring-[#795900] focus:border-transparent transition-all outline-none text-sm"
                      placeholder="Mensah"
                      type="text"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Full Width Inputs */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#444650] uppercase tracking-wider font-label">Email Address</label>
              <input
                className="w-full px-4 py-3 rounded-lg border-[#c5c6d2] bg-white focus:ring-2 focus:ring-[#795900] focus:border-transparent transition-all outline-none text-sm"
                placeholder="kofi@example.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <AnimatePresence mode="popLayout">
              {isSignUp && (
                <motion.div 
                  key="phone-field"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5 overflow-hidden"
                >
                  <label className="block text-xs font-bold text-[#444650] uppercase tracking-wider font-label">Phone Number</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border-[#c5c6d2] bg-white focus:ring-2 focus:ring-[#795900] focus:border-transparent transition-all outline-none text-sm"
                    placeholder="+254 700 000000"
                    type="tel"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#444650] uppercase tracking-wider font-label">Password</label>
              <input
                className="w-full px-4 py-3 rounded-lg border-[#c5c6d2] bg-white focus:ring-2 focus:ring-[#795900] focus:border-transparent transition-all outline-none text-sm"
                placeholder="••••••••"
                type="password"
              />
            </div>

            <AnimatePresence mode="popLayout">
              {isSignUp && (
                <motion.div 
                  key="referral-field"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5 overflow-hidden"
                >
                  <label className="block text-xs font-bold text-[#444650] uppercase tracking-wider font-label">Referral Code (Optional)</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border-[#c5c6d2] bg-white focus:ring-2 focus:ring-[#795900] focus:border-transparent transition-all outline-none text-sm"
                    placeholder="SZ-12345"
                    type="text"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {!isSignUp && (
              <div className="flex justify-end">
                <a href="#" className="text-sm font-bold text-[#795900] hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="pt-4 space-y-4">
              <button className="w-full py-4 bg-gradient-to-r from-[#00113a] to-[#002366] text-white font-bold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200 text-base btn-cartoonish">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>

              <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-[#c5c6d2] opacity-40"></div>
                <span className="text-xs font-bold text-[#757682] uppercase tracking-widest">or</span>
                <div className="h-[1px] flex-1 bg-[#c5c6d2] opacity-40"></div>
              </div>

              <button className="w-full py-4 border border-[#c5c6d2] bg-white flex items-center justify-center gap-3 text-[#002366] font-semibold rounded-xl hover:bg-[#e5e2dd] transition-colors active:scale-[0.98] btn-cartoonish">
                <img
                  alt="Google Logo"
                  className="w-5 h-5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqSlklwhGcXpf7mlzrOyGLZH9WRXWorGVh5yPvCdOM-qKbY5bGZcQs_-XLK_tE5A5PxPyFFdjUYKlHm7HmmjyBSfCSSrzxpiY3RyKtwqIMrf-j-hY-MttiQHxMB0-NtA4UzdEc094OO4deub-nNBQLf7Htgb7ogMJuiz0tj4Av3XGKuLhQMNn7Zr_7zDuO1wkA9wJ-GOpUlwIvnvNZpXXHkTCoi3htmOF2_lZWZk6-nhHoIw7qcLDsKLJMmNN_ytyoWlDqTPz8hw"
                />
                {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-[#444650]">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-[#795900] font-bold hover:underline ml-1 transition-all"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>

        {/* Subtle Decorative Text */}
        <div className="mt-12 text-center md:text-left">
          <p className="text-[10px] text-[#757682] uppercase tracking-[0.2em] font-bold">
            Empowering the Modern Griot Tradition
          </p>
        </div>
      </section>

      {/* Right Side: Brand Marketing (45%) */}
      <section className="w-full md:w-[45%] bg-[#002366] relative flex items-center justify-center px-8 md:px-12 py-20 overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/Patterns.jfif')] bg-repeat bg-[length:300px] mix-blend-plus-lighter pointer-events-none z-0"></div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#795900] opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00113a] opacity-30 rounded-full blur-3xl -ml-40 -mb-40"></div>

        <div className="relative z-10 text-center max-w-sm">
          {/* Main Illustration */}
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-[#795900] opacity-20 blur-2xl rounded-full scale-75"></div>
            <img
              alt="Students collaborating"
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl mx-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFRMIfQElp7k4lcS_HY9WcdI5Y9G21M00PWob6mc3gQQ0Bi93vA4PjlFCx6yMCkW1VgJ6lBbpLHPcE3g6hdJUrT2sDVyYwXEnicFbFtUDPr586t_hxRl9za3QIb0g24jaIPgQkXfAvakb4l9o8ywtT8rTQkoy6bZWsUTaj5QydbZSAOMHA5T6kd-RKasQf_K4-hBFBfvNstFVfITcv_R2cgv4Z7eCOK29y55-K_fM9bbIlXP5fYiZATFVfsnpjbfGYNIUbEjIIJg"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight font-headline">
            Join <span className="text-[#ffdfa0]">10,000+</span> learners across Africa
          </h2>

          {/* Benefits List */}
          <ul className="space-y-6 text-left max-w-xs mx-auto">
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#ffbf00]/20 flex items-center justify-center transition-transform group-hover:scale-110">
                <CheckCircle className="text-[#ffdfa0] w-6 h-6" />
              </div>
              <span className="text-white font-medium text-lg">Learn at your pace</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#ffbf00]/20 flex items-center justify-center transition-transform group-hover:scale-110">
                <CheckCircle className="text-[#ffdfa0] w-6 h-6" />
              </div>
              <span className="text-white font-medium text-lg">Affordable KSh pricing</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#ffbf00]/20 flex items-center justify-center transition-transform group-hover:scale-110">
                <CheckCircle className="text-[#ffdfa0] w-6 h-6" />
              </div>
              <span className="text-white font-medium text-lg">Earn verified certificates</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
