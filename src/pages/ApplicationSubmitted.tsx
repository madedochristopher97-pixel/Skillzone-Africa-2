import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function ApplicationSubmitted() {
  return (
    <div className="bg-[#fcf9f4] font-body text-[#1c1c19] min-h-screen flex flex-col">
      {/* Top Navigation Anchor - Suppressed based on transactional intent, only rendering logo bar */}
      <header className="w-full bg-[#fcf9f4] dark:bg-slate-950">
        <div className="flex justify-between items-center w-full px-6 py-6 max-w-7xl mx-auto">
          <img src="https://drive.google.com/thumbnail?id=11ee_UL2J5eym9KSOjW98ttpk78O11E4Z&sz=w500" alt="SkillsZone Africa" className="h-8 object-contain" referrerPolicy="no-referrer" />
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center px-4">
        {/* Main Confirmation Canvas */}
        <div className="max-w-md w-full">
          {/* Asymmetrical Layout Element: Floating Badge */}
          <div className="mb-6 flex justify-start -ml-4">
            <div className="bg-[#ffdfa0] text-[#261a00] px-4 py-1 rounded-full text-xs font-bold font-headline tracking-widest uppercase">
              Instructor Portal
            </div>
          </div>
          
          {/* Central Content Card */}
          <div className="bg-white p-10 md:p-14 rounded-xl shadow-[0_32px_64px_-12px_rgba(28,28,25,0.06)] text-center relative overflow-hidden">
            {/* Tonal Depth Background Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f6f3ee] rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
            
            {/* Icon Strategy */}
            <div className="mb-10 inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#f6f3ee] text-[#002366]">
              <Mail className="w-12 h-12" />
            </div>
            
            {/* Messaging Hierarchy */}
            <h1 className="font-headline font-bold text-3xl md:text-4xl text-[#00113a] tracking-tight mb-4">
              Application submitted!
            </h1>
            <p className="text-[#444650] font-body text-lg leading-relaxed mb-12">
              Our team will review your profile within 24–48 hours. We’ll notify you via email once your access is ready.
            </p>
            
            {/* Skill-Badge Signature Component */}
            <div className="flex justify-center gap-3 mb-12">
              <span className="inline-flex items-center px-3 py-1 bg-[#e5e2dd] text-[#444650] rounded-full text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#795900] mr-2"></span>
                Verification Pending
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-[#e5e2dd] text-[#444650] rounded-full text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#002366] mr-2"></span>
                Status: Review
              </span>
            </div>
            
            {/* Interaction Layer */}
            <div className="flex flex-col gap-4">
              <Link 
                to="/instructor-dashboard"
                className="w-full h-12 flex items-center justify-center px-8 bg-[#002366] text-white font-headline font-bold rounded-xl hover:bg-[#003399] transition-colors tracking-tight text-center"
              >
                Go to Dashboard
              </Link>
              <button className="w-full py-3 px-8 text-[#FFBF00] text-sm font-semibold hover:underline decoration-[#FFBF00] decoration-2 underline-offset-4">
                View Application Details
              </button>
            </div>
          </div>
          
          {/* Supporting Information */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[#444650] font-medium">
              Have questions? <a className="text-[#002366] font-bold hover:text-[#00113a] transition-colors" href="#">Contact Support</a>
            </p>
          </div>
        </div>
      </main>
      
      {/* Footer - Consistent with Shared Components */}
      <footer className="bg-[#f6f3ee] dark:bg-slate-900 full-width py-12 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 w-full max-w-7xl mx-auto">
          <div className="mb-6 md:mb-0">
            <span className="text-[#002366] dark:text-blue-200 font-bold font-headline">SkillsZone Africa</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <a className="font-label text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-[#002366] dark:hover:text-white transition-all" href="#">Privacy Policy</a>
            <a className="font-label text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-[#002366] dark:hover:text-white transition-all" href="#">Terms of Service</a>
            <a className="font-label text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-[#002366] dark:hover:text-white transition-all" href="#">Help Center</a>
          </div>
          <div className="text-[#002366] dark:text-blue-400 font-label text-xs text-center md:text-right">
            © 2024 SkillsZone Africa. The Modern Griot Tradition.
          </div>
        </div>
      </footer>
    </div>
  );
}
