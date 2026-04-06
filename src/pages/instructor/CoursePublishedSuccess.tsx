import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CoursePublishedSuccess() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 md:py-24 bg-[#fcf9f4] text-[#1c1c19] font-body">
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Success Card Container */}
        <div className="bg-white shadow-[0_32px_64px_-12px_rgba(28,28,25,0.06)] rounded-[2.5rem] p-8 md:p-16 w-full text-center relative overflow-hidden">
          {/* Abstract Background Ornament */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ffbf00] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#002366] opacity-5 rounded-full blur-3xl"></div>
          
          {/* Celebration Header */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 bg-[#ffbf00] flex items-center justify-center rounded-full mb-8">
              <span className="material-symbols-outlined text-[#6d5000] !text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
            </div>
            <h1 className="font-headline text-[#00113a] text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Your Course is Live!
            </h1>
            <p className="font-body text-[#c88000] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Congratulations, Fredrick! Your course <span className="font-bold">"Strategic Business Growth"</span> is now available to students across Africa.
            </p>
          </div>

          {/* Course Mini Preview */}
          <div className="mt-12 mb-12 flex justify-center">
            <div className="bg-[#f6f3ee] rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 text-left w-full max-w-xl">
              <div className="w-full md:w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Modern business boardroom" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw8X25h4m1RKEa_97cOWhxAszWHwQwbi63QRqRDDfFWLeT7haHmKlNPmel9RcvoijAbAfEHQjdK8tIVL8lrGn7CHZpmFRDFwUK5WRKJANcOUKiDGs2rG38O2HoCCjxXC_tfFQcUYX_wVw3y2nBMr_3XIbpLWH0vQbFVgrKugjtu4cA3_EAPhJh9nBUi5_W4YlgB4BRQB9LPtQ2MSMp_MB68i-MIrFEEB2CxhgUfJI2In-VtYn1Z3UKj1fNsFod08uyNk8GOvijbg"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-[#795900] rounded-full"></span>
                  <span className="font-label text-[10px] uppercase font-bold tracking-widest text-[#795900]">Business</span>
                </div>
                <h3 className="font-headline text-[#00113a] font-bold text-lg leading-tight">Strategic Business Growth</h3>
                <p className="font-body text-[#00113a] font-bold mt-1">KSh 4,500</p>
              </div>
              <div className="hidden md:block pr-4">
                <span className="material-symbols-outlined text-[#757682]">visibility</span>
              </div>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <span className="font-label text-sm font-semibold text-[#757682] uppercase tracking-widest">Spread the word</span>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-[#f0ede9] flex items-center justify-center text-[#002366] hover:bg-[#002366] hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined !text-2xl">share</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-[#f0ede9] flex items-center justify-center text-[#002366] hover:bg-[#0077b5] hover:text-white transition-all duration-300 group">
                <img 
                  className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all group-hover:brightness-0 group-hover:invert" 
                  alt="LinkedIn" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtRyPiu8OEaXx4UDE7gUGoW0EVQMwha5IgBCek55XnqLrm4BwxcXrqWUep5mVv3Q_wHtN0gXIyTbaHOTDs7BcHTJ4u-W6tNxT9gcUO3gjMD1H2W_OhpmYwOpuSwO7khN3kmuuCrOKpAXWQUNsoU0b0WMoZMUfgjO1BxnN2_yuGqXgYfux6sy-I_bGAUMyiIuJCOfP7J3BaG4zsfFRtnvswLn7xznn6dq2ffhSj_9ccYOy1sN6QMpWX5XgJCzlQjd7yNfrdPVaQ4Q"
                />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#f0ede9] flex items-center justify-center text-[#002366] hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 group">
                <img 
                  className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all group-hover:brightness-0 group-hover:invert" 
                  alt="Twitter" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtDrLqnCAoTXeG5C6rX370JDcKShCzxt0z6En6u0W9OCPGGtZDfW-3gKt9fAq0KCR-GfI5KnwYzT5Ty2ESUaOCrcY4B0hHAKWGmjp7sj3cKQCm5IOMW0h7mZtSMGoai7pejJpMz1tSdhXMyEUdMhXDpNZ3MENsBGJVYZIkKnNCanY0gJ62yiX0f-_C94S2Rk5k9mKjcrZI9VQLADqOJJ9wONP0ZGdSGWGz0DVmZ-fe69PaaC8PFuRWMopW3MaTv0P4lMkH_o1wZA"
                />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#f0ede9] flex items-center justify-center text-[#002366] hover:bg-[#25D366] hover:text-white transition-all duration-300 group">
                <img 
                  className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all group-hover:brightness-0 group-hover:invert" 
                  alt="WhatsApp" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYVl30miOK-pXlNcTOftspjLI-ZCsZYadseEo33z3L2YxFQILkn2Ku3zswMcO0uDnNL8YAuHfAiA9mlaWCf9fVkPm3jxHd5iZ7dsrS5Sl7ncq5y6TGq6ZLqqDyFngd8qATYyHMx6HbtZvOglx-6SNprG3mcMXHraw7RASJ9DJP9NxpdolhwUFyBQ9llLdxMGCn6roSxtlsM8VeglNplsi0Au6xQgsvzEyuu7yyP8uLrW2h0_7A9QYIrh7dKbe9D1AN2wad-z0Clg"
                />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/courses/1')}
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#00113a] to-[#002366] text-white rounded-full font-headline font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-[#00113a]/10"
            >
              View Course Page
            </button>
            <button 
              onClick={() => navigate('/instructor-dashboard')}
              className="w-full md:w-auto px-10 py-4 border-2 border-[#00113a] text-[#00113a] rounded-full font-headline font-bold text-lg hover:bg-[#00113a]/5 active:scale-95 transition-all"
            >
              Go to Dashboard
            </button>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="mt-12 w-full max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-grow bg-[#c5c6d2] opacity-30"></div>
            <h2 className="font-headline text-[#444650] font-bold text-xl">What's Next?</h2>
            <div className="h-[1px] flex-grow bg-[#c5c6d2] opacity-30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tip 1 */}
            <div className="flex flex-col gap-3 p-2 group cursor-pointer" onClick={() => navigate('/instructor-dashboard/settings')}>
              <div className="w-10 h-10 rounded-xl bg-[#ebe8e3] flex items-center justify-center group-hover:bg-[#ffdfa0] transition-colors">
                <span className="font-headline font-black text-[#795900]">1</span>
              </div>
              <p className="font-body text-sm text-[#1c1c19] leading-tight">
                Complete your <span className="font-bold">instructor bio</span> to build trust.
              </p>
            </div>
            {/* Tip 2 */}
            <div className="flex flex-col gap-3 p-2 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-[#ebe8e3] flex items-center justify-center group-hover:bg-[#ffdfa0] transition-colors">
                <span className="font-headline font-black text-[#795900]">2</span>
              </div>
              <p className="font-body text-sm text-[#1c1c19] leading-tight">
                Share on <span className="font-bold">social media</span> using our promo kit.
              </p>
            </div>
            {/* Tip 3 */}
            <div className="flex flex-col gap-3 p-2 group cursor-pointer" onClick={() => navigate('/instructor-dashboard/students')}>
              <div className="w-10 h-10 rounded-xl bg-[#ebe8e3] flex items-center justify-center group-hover:bg-[#ffdfa0] transition-colors">
                <span className="font-headline font-black text-[#795900]">3</span>
              </div>
              <p className="font-body text-sm text-[#1c1c19] leading-tight">
                Engage with your <span className="font-bold">first students</span> in the forum.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Logo Anchor */}
        <div className="mt-16 opacity-40 grayscale flex items-center gap-2">
          <span className="font-headline font-black text-[#00113a] text-xl tracking-tight">SkillsZone Africa</span>
        </div>
      </div>
    </main>
  );
}
