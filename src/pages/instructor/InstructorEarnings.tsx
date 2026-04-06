import React from 'react';
import { Wallet, ArrowDown, Landmark, TrendingUp, CreditCard, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function InstructorEarnings() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto space-y-10"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-headline font-black text-3xl text-[#00113a]">Financial Overview</h1>
          <p className="text-slate-500 mt-1 font-medium">Track your revenue, payouts, and pending transactions.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#00113a] text-[#00113a] rounded-xl font-headline font-bold text-sm hover:bg-[#00113a]/5 transition-all">
          <Landmark size={18} strokeWidth={2} />
          Settlement Settings
        </button>
      </header>

      {/* Earnings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="bg-[#002366] p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-900/10 group relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-[#002366] transition-all duration-300">
              <Wallet size={24} />
            </div>
            <p className="text-blue-100/60 text-sm font-medium mb-1 tracking-tight">Available Balance</p>
            <h3 className="font-headline font-black text-3xl">KSh 42,500.00</h3>
            <button className="mt-8 w-full py-4 bg-primary text-white rounded-xl font-headline font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-black/10">
              Withdraw Funds
            </button>
          </div>
          <motion.div 
            className="absolute -right-8 -bottom-8 opacity-[0.05] text-white"
            whileHover={{ scale: 1.1, rotate: 15 }}
          >
            <Wallet size={160} strokeWidth={1} />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm group">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
            <TrendingUp size={24} />
          </div>
          <p className="text-slate-500 text-sm font-medium mb-1 tracking-tight">Total Revenue (All Time)</p>
          <h3 className="font-headline font-black text-3xl text-[#00113a]">KSh 842,500.00</h3>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-600">
            <TrendingUp size={14} />
            <span>+15.2% from last month</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm group">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
            <Clock size={24} />
          </div>
          <p className="text-slate-500 text-sm font-medium mb-1 tracking-tight">Pending Payout</p>
          <h3 className="font-headline font-black text-3xl text-[#00113a]">KSh 12,000.00</h3>
          <p className="mt-4 text-xs text-slate-400 font-medium italic">Settlement on Apr 15, 2024</p>
        </motion.div>
      </div>

      {/* Recent Payouts */}
      <section>
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="font-headline font-bold text-xl text-[#00113a]">Recent Payouts</h2>
        </div>
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-50">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 flex items-center gap-6 hover:bg-slate-50 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                  <CreditCard size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#002366]">Payout to Bank Account •••• 4242</p>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">Ref: SKZ-PO-2024-00{i}</p>
                </div>
                <div className="text-right">
                  <h4 className="font-headline font-bold text-[#002366]">-KSh 25,000</h4>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Completed</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 opacity-0 group-hover:opacity-100 transition-all cursor-pointer hover:bg-blue-600 hover:text-white">
                  <ArrowDown size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
