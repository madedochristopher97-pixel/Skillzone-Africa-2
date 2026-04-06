import { Briefcase, Monitor, Palette, GraduationCap, Wrench, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExploreTopics() {
  return (
    <section className="py-[80px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-[#002366] text-xs font-bold tracking-widest uppercase mb-4 inline-block font-label">EXPLORE TOPICS</span>
          <h2 className="text-4xl font-headline font-bold text-[#002366] mb-4">Find Your Next Skill</h2>
          <p className="text-[#D48806] text-lg font-medium">Browse courses built for Africa's next generation of professionals, creators, and entrepreneurs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {/* Business & Entrepreneurship */}
          <div className="bg-white rounded-[12px] border border-[#E0DDD8] p-[24px]">
            <Briefcase className="text-[#002366] mb-4 w-8 h-8" />
            <h3 className="text-xl font-headline font-bold text-[#002366] mb-4">Business &amp; Entrepreneurship</h3>
            <ul className="space-y-3 mb-6">
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Starting a business</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Finance &amp; accounting</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Marketing strategy</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Leadership skills</Link></li>
            </ul>
            <Link className="text-[#FFBF00] font-body font-bold text-sm inline-flex items-center gap-1 hover:underline" to="#">More...</Link>
          </div>
          {/* Tech & Digital Skills */}
          <div className="bg-white rounded-[12px] border border-[#E0DDD8] p-[24px]">
            <Monitor className="text-[#002366] mb-4 w-8 h-8" />
            <h3 className="text-xl font-headline font-bold text-[#002366] mb-4">Tech &amp; Digital Skills</h3>
            <ul className="space-y-3 mb-6">
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Web development</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">UI/UX design</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Data analysis</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">AI &amp; automation</Link></li>
            </ul>
            <Link className="text-[#FFBF00] font-body font-bold text-sm inline-flex items-center gap-1 hover:underline" to="#">More...</Link>
          </div>
          {/* Creative Arts */}
          <div className="bg-white rounded-[12px] border border-[#E0DDD8] p-[24px]">
            <Palette className="text-[#002366] mb-4 w-8 h-8" />
            <h3 className="text-xl font-headline font-bold text-[#002366] mb-4">Creative Arts</h3>
            <ul className="space-y-3 mb-6">
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Graphic design</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Photography</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Video production</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Content creation</Link></li>
            </ul>
            <Link className="text-[#FFBF00] font-body font-bold text-sm inline-flex items-center gap-1 hover:underline" to="#">More...</Link>
          </div>
          {/* Education & Exam Prep */}
          <div className="bg-white rounded-[12px] border border-[#E0DDD8] p-[24px]">
            <GraduationCap className="text-[#002366] mb-4 w-8 h-8" />
            <h3 className="text-xl font-headline font-bold text-[#002366] mb-4">Education &amp; Exam Prep</h3>
            <ul className="space-y-3 mb-6">
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">KCSE preparation</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">University entrance</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Professional certifications</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Languages</Link></li>
            </ul>
            <Link className="text-[#FFBF00] font-body font-bold text-sm inline-flex items-center gap-1 hover:underline" to="#">More...</Link>
          </div>
          {/* Trades & Vocational */}
          <div className="bg-white rounded-[12px] border border-[#E0DDD8] p-[24px]">
            <Wrench className="text-[#002366] mb-4 w-8 h-8" />
            <h3 className="text-xl font-headline font-bold text-[#002366] mb-4">Trades &amp; Vocational</h3>
            <ul className="space-y-3 mb-6">
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Electrical installation</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Plumbing &amp; construction</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Fashion &amp; tailoring</Link></li>
              <li><Link className="text-[#555555] hover:text-[#002366] transition-colors font-body text-sm" to="#">Catering &amp; hospitality</Link></li>
            </ul>
            <Link className="text-[#FFBF00] font-body font-bold text-sm inline-flex items-center gap-1 hover:underline" to="#">More...</Link>
          </div>
          {/* Trending on SkillZone */}
          <div className="bg-[#FFBF00] rounded-[12px] border border-[#FFBF00] p-[24px]">
            <TrendingUp className="text-[#002366] mb-4 w-8 h-8" />
            <h3 className="text-xl font-headline font-bold text-[#002366] mb-4">Trending on SkillZone</h3>
            <ul className="space-y-3 mb-6">
              <li><Link className="text-[#002366] hover:underline font-body text-sm" to="/courses/5">How to Start a Business in Kenya</Link></li>
              <li><Link className="text-[#002366] hover:underline font-body text-sm" to="/courses/1">Excel for Beginners</Link></li>
              <li><Link className="text-[#002366] hover:underline font-body text-sm" to="/courses/3">Social Media Marketing 101</Link></li>
              <li><Link className="text-[#002366] hover:underline font-body text-sm" to="/courses/4">Python for Beginners</Link></li>
            </ul>
            <Link className="text-[#002366] font-body font-bold text-sm inline-flex items-center gap-1 hover:underline" to="/courses">Explore all trends</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
