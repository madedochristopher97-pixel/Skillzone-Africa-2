import { Facebook, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 bg-[#f6f3ee]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <img src="https://drive.google.com/thumbnail?id=11ee_UL2J5eym9KSOjW98ttpk78O11E4Z&sz=w500" alt="SkillsZone Africa" className="h-8 object-contain" referrerPolicy="no-referrer" />
          </Link>
          <p className="text-[#1c1c19]/70 text-sm leading-relaxed font-body">
            © 2024 SkillsZone Africa. The Modern Griot Tradition. Empowering the next generation of African leaders and creators.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-[#fcf9f4] flex items-center justify-center hover:bg-[#ffbf00] transition-colors group" href="#">
              <Facebook className="text-[#00113a] group-hover:text-white" size={20} />
            </a>
            <a className="w-10 h-10 rounded-full bg-[#fcf9f4] flex items-center justify-center hover:bg-[#ffbf00] transition-colors group" href="#">
              <Globe className="text-[#00113a] group-hover:text-white" size={20} />
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-[#002366] mb-6 font-headline">Company</h5>
          <ul className="space-y-4 font-body text-base">
            <li><Link className="text-[#1c1c19]/70 hover:text-[#002366] hover:translate-x-1 transition-transform block" to="#">About Us</Link></li>
            <li><Link className="text-[#1c1c19]/70 hover:text-[#002366] hover:translate-x-1 transition-transform block" to="#">Careers</Link></li>
            <li><Link className="text-[#1c1c19]/70 hover:text-[#002366] hover:translate-x-1 transition-transform block" to="/instructor-onboarding">Become an Instructor</Link></li>
            <li><Link className="text-[#1c1c19]/70 hover:text-[#002366] hover:translate-x-1 transition-transform block" to="#">Press Kit</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[#002366] mb-6 font-headline">Student Resources</h5>
          <ul className="space-y-4 font-body text-base">
            <li><Link className="text-[#1c1c19]/70 hover:text-[#002366] hover:translate-x-1 transition-transform block" to="#">Help Center</Link></li>
            <li><Link className="text-[#1c1c19]/70 hover:text-[#002366] hover:translate-x-1 transition-transform block" to="#">Scholarships</Link></li>
            <li><Link className="text-[#1c1c19]/70 hover:text-[#002366] hover:translate-x-1 transition-transform block" to="#">Certification Guide</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[#002366] mb-6 font-headline">Newsletter</h5>
          <p className="text-[#1c1c19]/70 text-sm mb-6 font-body">Get the latest course updates and educational tips.</p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full bg-white border-none rounded-xl focus:ring-2 focus:ring-[#ffbf00] outline-none px-4 py-3" placeholder="Email address" type="email" />
            <button className="w-full bg-[#00113a] text-white font-bold py-3 rounded-xl hover:bg-[#002366] transition-colors">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-[#c5c6d2]/20 text-center md:text-left">
        <p className="text-xs text-[#444650] font-medium uppercase tracking-[0.2em]">Designed for the African Digital Renaissance</p>
      </div>
    </footer>
  );
}
