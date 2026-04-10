import { Link } from 'react-router-dom';

export default function InstructorCTA() {
  return (
    <section className="px-8 pb-24 bg-[#fcf9f4]">
      <div className="max-w-7xl mx-auto rounded-[3.5rem] bg-[#00113a] overflow-hidden relative shadow-2xl">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/Patterns.jfif')] bg-repeat bg-[length:300px] mix-blend-plus-lighter pointer-events-none z-0"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#ffbf00] to-transparent"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-12 md:p-20 z-10 space-y-8 self-center">
            <h2 className="font-headline font-black text-4xl md:text-5xl text-white tracking-tighter">Monetize Your Knowledge</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Join our community of 500+ professional tutors and start teaching today. Share your expertise with students across the continent and build a global brand.
            </p>
            <Link to="/instructor-onboarding" className="inline-block bg-[#ffbf00] text-[#6d5000] font-bold px-10 py-4 rounded-xl text-lg transition-transform active:scale-95 hover:bg-[#ffdfa0]">
              Apply to Teach
            </Link>
          </div>
          <div className="relative h-[400px] lg:h-auto">
            <img 
              alt="Instructor" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ08ruaWi8YQ0Qro3A014ZGTUC8vRnf6RI8uRYXTEGQl-5GQTZhewhkMhpISLJZtPQ-xL0tPYsu9YjcDDpPqhRAb2zFNnEPVCiCuswP1_Yhj1iAifRDc2hD-qcVcd8e4zvH686Dpc2IBrYzI39H0YfJfcBYhdxXEEyCKpDdnLchTePye2YHp8wXn_xHglSh9VM1Y2tEuLtpfNLO7eJh8q6a-MQEondpd0YlJ6z1DaFheEthIO67MvC8_NDiRt-P5c8c1SY5WktNQ"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
