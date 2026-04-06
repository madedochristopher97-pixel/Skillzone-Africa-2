import React from 'react';

export default function InstructorStudents() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-headline font-black text-3xl text-primary tracking-tighter">Student Roster</h2>
          <p className="text-slate-500 font-body mt-2">Monitor progress and engage with your learners.</p>
        </div>
        <div className="relative group">
          <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
            <span className="material-symbols-outlined">search</span>
          </span>
          <input className="pl-10 pr-4 py-2 bg-surface-container-lowest border-none rounded-full text-sm focus:ring-2 focus:ring-secondary-fixed w-64 transition-all shadow-sm" placeholder="Search students..." type="text" />
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="px-8 py-5 font-headline font-bold text-xs text-slate-500 uppercase tracking-widest">Student</th>
              <th className="px-8 py-5 font-headline font-bold text-xs text-slate-500 uppercase tracking-widest">Enrolled Course</th>
              <th className="px-8 py-5 font-headline font-bold text-xs text-slate-500 uppercase tracking-widest">Progress</th>
              <th className="px-8 py-5 font-headline font-bold text-xs text-slate-500 uppercase tracking-widest">Joined</th>
              <th className="px-8 py-5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container">
            <tr className="hover:bg-surface-container-low/30 transition-colors">
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold">
                    JD
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">John Doe</p>
                    <p className="text-xs text-slate-400">john.doe@example.com</p>
                  </div>
                </div>
              </td>
              <td className="px-8 py-6 text-sm text-slate-600">Mastering React 18</td>
              <td className="px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[45%]"></div>
                  </div>
                  <span className="text-xs font-bold text-slate-500">45%</span>
                </div>
              </td>
              <td className="px-8 py-6 text-sm text-slate-500">2 days ago</td>
              <td className="px-8 py-6 text-right">
                <button className="text-primary font-bold text-xs hover:underline">Message</button>
              </td>
            </tr>
            <tr className="hover:bg-surface-container-low/30 transition-colors">
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold">
                    SA
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">Sarah Ahmed</p>
                    <p className="text-xs text-slate-400">sarah.a@example.com</p>
                  </div>
                </div>
              </td>
              <td className="px-8 py-6 text-sm text-slate-600">UI Design Fundamentals</td>
              <td className="px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[90%]"></div>
                  </div>
                  <span className="text-xs font-bold text-slate-500">90%</span>
                </div>
              </td>
              <td className="px-8 py-6 text-sm text-slate-500">1 week ago</td>
              <td className="px-8 py-6 text-right">
                <button className="text-primary font-bold text-xs hover:underline">Message</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
