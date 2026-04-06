import React from 'react';

export default function InstructorEarnings() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-headline font-black text-3xl text-primary tracking-tighter">Earnings & Payouts</h2>
          <p className="text-slate-500 font-body mt-2">Track your revenue and manage withdrawal methods.</p>
        </div>
        <button className="bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded-xl font-headline font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all">
          <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
          Withdraw Funds
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-primary text-white p-8 rounded-3xl">
          <p className="text-primary-fixed-dim text-sm font-bold uppercase tracking-widest mb-2">Available Balance</p>
          <h3 className="text-4xl font-headline font-black">KSh 12,400</h3>
          <p className="text-sm mt-4 text-primary-fixed-dim">Next payout scheduled for 15th Apr</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-3xl">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">Pending Clearance</p>
          <h3 className="text-4xl font-headline font-black text-primary">KSh 4,200</h3>
          <p className="text-sm mt-4 text-slate-500">From recent course sales</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-3xl">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">Lifetime Earnings</p>
          <h3 className="text-4xl font-headline font-black text-primary">KSh 148,500</h3>
          <p className="text-sm mt-4 text-slate-500">Since joining SkillsZone</p>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl p-8">
        <h3 className="font-headline font-bold text-lg text-primary mb-6">Recent Transactions</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border-b border-surface-variant last:border-0">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">arrow_downward</span>
              </div>
              <div>
                <p className="font-bold text-sm text-primary">Course Sale: Mastering React 18</p>
                <p className="text-xs text-slate-500">Today, 10:42 AM</p>
              </div>
            </div>
            <span className="font-bold text-green-600">+ KSh 4,500</span>
          </div>
          <div className="flex items-center justify-between p-4 border-b border-surface-variant last:border-0">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-surface-container-low text-slate-600 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <div>
                <p className="font-bold text-sm text-primary">Withdrawal to Bank Account</p>
                <p className="text-xs text-slate-500">Mar 28, 2024</p>
              </div>
            </div>
            <span className="font-bold text-primary">- KSh 25,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
