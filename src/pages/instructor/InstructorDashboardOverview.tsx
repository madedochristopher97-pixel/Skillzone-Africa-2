import React from 'react';
import { Link } from 'react-router-dom';

export default function InstructorDashboardOverview() {
  return (
    <div className="space-y-12">
      {/* Welcome Header */}
      <section>
        <h2 className="font-headline font-black text-4xl text-primary tracking-tighter">Welcome back, Fredrick</h2>
        <p className="text-slate-500 font-body mt-2">Your academy is growing. Here’s how you’re performing this month.</p>
      </section>
      {/* Stats Bento Grid */}
      <section className="grid grid-cols-12 gap-6">
        {/* Large Earnings Card */}
        <div className="col-span-12 md:col-span-5 bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300">
          <div>
            <span className="bg-secondary-fixed/30 text-secondary font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">Total Revenue</span>
            <h3 className="text-5xl font-headline font-black text-secondary mt-6">KSh 48,500</h3>
          </div>
          <div className="mt-8 flex items-center gap-2 text-green-600 font-bold text-sm">
            <span className="material-symbols-outlined">trending_up</span>
            <span>+12.4% from last month</span>
          </div>
        </div>
        {/* Total Students Card */}
        <div className="col-span-12 md:col-span-3 bg-primary-container p-8 rounded-3xl text-white">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-on-primary-container">group</span>
            <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Global Reach</span>
          </div>
          <h3 className="text-4xl font-headline font-black mt-8">312</h3>
          <p className="text-on-primary-container text-sm mt-1">Total Students</p>
        </div>
        {/* Active Courses Card */}
        <div className="col-span-12 md:col-span-4 bg-surface-container-low p-8 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary">menu_book</span>
            <h3 className="text-4xl font-headline font-black text-primary mt-8">4</h3>
            <p className="text-slate-500 text-sm mt-1">Active Courses</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10 scale-150">
            <span className="material-symbols-outlined text-[120px]">school</span>
          </div>
        </div>
      </section>
      {/* Earnings Chart Section */}
      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-10 rounded-3xl">
          <div className="flex justify-between items-center mb-12">
            <h3 className="font-headline font-bold text-xl text-primary">Monthly Earnings</h3>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-xs font-bold"><div className="w-3 h-3 rounded-full bg-primary"></div> Revenue</span>
              <span className="flex items-center gap-2 text-xs font-bold"><div className="w-3 h-3 rounded-full bg-secondary"></div> Goal</span>
            </div>
          </div>
          <div className="relative h-64 flex">
            {/* Y-axis labels and gridlines */}
            <div className="absolute inset-0 flex flex-col justify-between pb-8 z-0">
              {['KSh 50k', 'KSh 40k', 'KSh 30k', 'KSh 20k', 'KSh 10k', 'KSh 0'].map((label, i) => (
                <div key={i} className="flex items-center w-full relative">
                  <span className="text-[#6B7280] text-[11px] font-body w-16 text-right pr-4 shrink-0 absolute -top-2">{label}</span>
                  <div className="flex-1 border-t border-[#F0EDE8] ml-16"></div>
                </div>
              ))}
            </div>
            
            {/* Bars */}
            <div className="flex items-end justify-between w-full pl-16 z-10 gap-4 h-full pb-8">
              {/* Jan */}
              <div className="flex-1 flex flex-col items-center h-full justify-end relative">
                <div className="w-full bg-primary/10 rounded-t-xl relative h-[60%] group hover:bg-primary/20 transition-all">
                  <div className="absolute bottom-0 w-full bg-primary rounded-t-xl h-[60%]"></div>
                </div>
                <span className="text-xs font-bold text-slate-400 absolute -bottom-6">JAN</span>
              </div>
              {/* Feb */}
              <div className="flex-1 flex flex-col items-center h-full justify-end relative">
                <div className="w-full bg-primary/10 rounded-t-xl relative h-[45%] group hover:bg-primary/20 transition-all">
                  <div className="absolute bottom-0 w-full bg-primary rounded-t-xl h-[45%]"></div>
                </div>
                <span className="text-xs font-bold text-slate-400 absolute -bottom-6">FEB</span>
              </div>
              {/* Mar */}
              <div className="flex-1 flex flex-col items-center h-full justify-end relative">
                <div className="w-full bg-primary/10 rounded-t-xl relative h-[85%] group hover:bg-primary/20 transition-all">
                  <div className="absolute bottom-0 w-full bg-primary rounded-t-xl h-[85%]"></div>
                  <div className="absolute bottom-[85%] left-1/2 -translate-x-1/2 -translate-y-2 w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <span className="text-xs font-bold text-slate-400 absolute -bottom-6">MAR</span>
              </div>
              {/* Apr */}
              <div className="flex-1 flex flex-col items-center h-full justify-end relative">
                <div className="w-full bg-primary/10 rounded-t-xl relative h-[70%] group hover:bg-primary/20 transition-all">
                  <div className="absolute bottom-0 w-full bg-primary rounded-t-xl h-[70%]"></div>
                </div>
                <span className="text-xs font-bold text-slate-400 absolute -bottom-6">APR</span>
              </div>
              {/* May */}
              <div className="flex-1 flex flex-col items-center h-full justify-end relative">
                <div className="w-full bg-primary/10 rounded-t-xl relative h-[95%] group hover:bg-primary/20 transition-all">
                  <div className="absolute bottom-0 w-full bg-primary rounded-t-xl h-[95%]"></div>
                  <div className="absolute bottom-[95%] left-1/2 -translate-x-1/2 -translate-y-2 w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <span className="text-xs font-bold text-slate-400 absolute -bottom-6">MAY</span>
              </div>
              {/* Jun */}
              <div className="flex-1 flex flex-col items-center h-full justify-end relative">
                <div className="w-full bg-primary/10 rounded-t-xl relative h-[65%] group hover:bg-primary/20 transition-all">
                  <div className="absolute bottom-0 w-full bg-primary rounded-t-xl h-[65%]"></div>
                </div>
                <span className="text-xs font-bold text-slate-400 absolute -bottom-6">JUN</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-secondary-fixed p-8 rounded-3xl flex-1 flex flex-col justify-center">
            <p className="text-on-secondary-fixed/60 text-xs font-bold uppercase tracking-widest mb-2">Learning Pulse</p>
            <h4 className="text-2xl font-headline font-bold text-on-secondary-fixed">84% Engagement</h4>
            <div className="mt-6 w-full bg-[#E0DDD8] h-2 rounded-full overflow-hidden">
              <div className="bg-[#FFBF00] h-full w-[84%]"></div>
            </div>
          </div>
          <div className="bg-[#e5e2dd] p-8 rounded-3xl flex-1">
            <h4 className="font-headline font-bold text-primary mb-4">Quick Tip</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Courses with high-quality thumbnails get 3.5x more clicks. Refresh your visuals today!</p>
            <button className="mt-4 text-primary font-bold text-xs flex items-center gap-1 group">
              Read Guide
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
      {/* My Courses Table */}
      <section className="pb-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="font-headline font-bold text-2xl text-primary">My Courses</h3>
            <p className="text-slate-500 text-sm mt-1">Manage and track your educational impact.</p>
          </div>
          <Link to="/instructor-dashboard/courses" className="text-primary font-bold text-sm flex items-center gap-2 hover:opacity-70">
            View all <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-8 py-5 font-headline font-bold text-xs text-slate-500 uppercase tracking-widest">Course Title</th>
                <th className="px-8 py-5 font-headline font-bold text-xs text-slate-500 uppercase tracking-widest">Students</th>
                <th className="px-8 py-5 font-headline font-bold text-xs text-slate-500 uppercase tracking-widest">Avg Rating</th>
                <th className="px-8 py-5 font-headline font-bold text-xs text-slate-500 uppercase tracking-widest">Revenue</th>
                <th className="px-8 py-5 font-headline font-bold text-xs text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <div>
                      <p className="font-bold text-primary">Mastering React 18</p>
                      <p className="text-xs text-slate-400">Created Mar 12, 2024</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 font-medium">145</td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-1 text-secondary">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="text-xs text-slate-500 font-bold ml-1">4.8</span>
                  </div>
                </td>
                <td className="px-8 py-6 font-bold text-primary">KSh 22,400</td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-tighter">Published</span>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="material-symbols-outlined text-slate-400 hover:text-primary transition-all">more_vert</button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">brush</span>
                    </div>
                    <div>
                      <p className="font-bold text-primary">UI Design Fundamentals</p>
                      <p className="text-xs text-slate-400">Created Feb 28, 2024</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 font-medium">98</td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-1 text-secondary">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs text-slate-500 font-bold ml-1">5.0</span>
                  </div>
                </td>
                <td className="px-8 py-6 font-bold text-primary">KSh 18,600</td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-tighter">Published</span>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="material-symbols-outlined text-slate-400 hover:text-primary transition-all">more_vert</button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-slate-500">
                      <span className="material-symbols-outlined">monitoring</span>
                    </div>
                    <div>
                      <p className="font-bold text-primary">Data Science Basics</p>
                      <p className="text-xs text-slate-400">Drafted 2 days ago</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 font-medium">0</td>
                <td className="px-8 py-6">
                  <span className="text-xs text-slate-400 italic">No ratings</span>
                </td>
                <td className="px-8 py-6 font-bold text-primary">KSh 0</td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-tighter">Draft</span>
                    <button className="px-3 py-1 bg-[#FFBF00] hover:bg-[#D48806] text-[#002366] text-[10px] font-bold rounded-full uppercase tracking-tighter transition-colors flex items-center gap-1">
                      Publish Now &rarr;
                    </button>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="material-symbols-outlined text-slate-400 hover:text-primary transition-all">more_vert</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
