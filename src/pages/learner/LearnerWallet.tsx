import { useState, useEffect, useRef } from 'react';
import {
  TrendingUp,
  ShoppingBag,
  Clock,
  ArrowUpCircle,
  ArrowDownCircle,
  Gift,
  Wallet,
  X,
  CreditCard,
  Smartphone,
  ChevronRight,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { KentePattern } from '../../components/PatternElements';

/* ─── Types ──────────────────────────────────────────────────────────── */
type TxType = 'credit' | 'debit' | 'bonus';
interface Transaction {
  id: number;
  type: TxType;
  title: string;
  datetime: string;
  amount: number;
}

type FilterTab = 'all' | 'credits' | 'debits';

/* ─── Sample data (replace with real API later) ──────────────────────── */
const SAMPLE_TRANSACTIONS: Transaction[] = [
  { id: 1, type: 'credit',  title: 'Referral Bonus — John Mwangi', datetime: 'Apr 12, 2026 · 10:34 AM', amount: 150 },
  { id: 2, type: 'debit',   title: 'Course Purchase — Python Mastery', datetime: 'Apr 10, 2026 · 03:12 PM', amount: 2800 },
  { id: 3, type: 'bonus',   title: 'Welcome Bonus', datetime: 'Apr 5, 2026 · 09:00 AM', amount: 250 },
  { id: 4, type: 'credit',  title: 'Referral Bonus — Amina Ochieng', datetime: 'Mar 28, 2026 · 08:45 AM', amount: 150 },
  { id: 5, type: 'debit',   title: 'Course Purchase — UI/UX Design', datetime: 'Mar 20, 2026 · 02:00 PM', amount: 1500 },
];

const QUICK_AMOUNTS = [500, 1000, 2500, 5000];

/* ─── Stat Card ──────────────────────────────────────────────────────── */
interface StatCardProps {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
  subtext: string;
}
function StatCard({ icon, iconBg, label, value, subtext }: StatCardProps) {
  return (
    <article className="bg-white rounded-2xl p-6 border border-[#c5c6d2]/20 shadow-sm flex items-start gap-4 flex-1 min-w-0">
      <span
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: iconBg }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">{label}</p>
        <p className="font-headline text-xl font-bold text-[#00113a] mt-0.5">{value}</p>
        <p className="text-xs text-[#6B7280] mt-1">{subtext}</p>
      </div>
    </article>
  );
}

/* ─── Transaction Row ────────────────────────────────────────────────── */
function TxRow({ tx }: { tx: Transaction }) {
  const config = {
    credit: {
      bg: 'bg-green-100',
      icon: <ArrowUpCircle size={18} className="text-green-600" />,
      amountClass: 'text-green-600',
      prefix: '+',
    },
    debit: {
      bg: 'bg-red-100',
      icon: <ArrowDownCircle size={18} className="text-red-500" />,
      amountClass: 'text-red-500',
      prefix: '-',
    },
    bonus: {
      bg: 'bg-amber-100',
      icon: <Gift size={18} className="text-amber-600" />,
      amountClass: 'text-green-600',
      prefix: '+',
    },
  }[tx.type];

  return (
    <li className="flex items-center gap-4 py-4 border-b border-[#c5c6d2]/20 last:border-0">
      <span
        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${config.bg}`}
        aria-hidden="true"
      >
        {config.icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#00113a] truncate">{tx.title}</p>
        <p className="text-xs text-[#6B7280] mt-0.5">{tx.datetime}</p>
      </div>
      <span className={`text-sm font-bold flex-shrink-0 ${config.amountClass}`}>
        {config.prefix}KSh {tx.amount.toLocaleString()}
      </span>
    </li>
  );
}

/* ─── Add Funds Modal ────────────────────────────────────────────────── */
interface AddFundsModalProps {
  onClose: () => void;
}
function AddFundsModal({ onClose }: AddFundsModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const [payMethod, setPayMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [amount, setAmount] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-funds-title"
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
    >
      {/* Backdrop */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet */}
      <motion.div
        initial={shouldReduceMotion ? false : { y: '100%', opacity: 0.5 }}
        animate={shouldReduceMotion ? false : { y: 0, opacity: 1 }}
        exit={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 z-10 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 id="add-funds-title" className="font-headline text-xl font-bold text-[#00113a]">
            Add Funds to Wallet
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-[#f6f3ee] flex items-center justify-center text-[#444650] hover:bg-[#e5e2dd] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Payment Method */}
        <fieldset className="mb-6">
          <legend className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-3">Payment Method</legend>
          <div className="flex gap-3">
            {(['mpesa', 'card'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setPayMethod(m)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                  payMethod === m
                    ? 'border-[#002366] bg-[#002366]/5 text-[#002366]'
                    : 'border-[#c5c6d2]/40 text-[#444650] hover:border-[#002366]/40'
                }`}
                aria-pressed={payMethod === m}
              >
                {m === 'mpesa' ? <Smartphone size={16} /> : <CreditCard size={16} />}
                {m === 'mpesa' ? 'M-Pesa' : 'Card'}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Amount */}
        <div className="mb-4">
          <label htmlFor="add-funds-amount" className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-2 block">
            Amount (KSh)
          </label>
          <input
            id="add-funds-amount"
            type="number"
            min="100"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border-2 border-[#c5c6d2]/40 rounded-xl px-4 py-3 text-[#00113a] font-semibold text-lg focus:outline-none focus:border-[#002366] transition-colors"
          />
        </div>

        {/* Quick amounts */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {QUICK_AMOUNTS.map((q) => (
            <button
              key={q}
              onClick={() => setAmount(String(q))}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
                Number(amount) === q
                  ? 'bg-[#FFBF00] border-[#FFBF00] text-[#00113a]'
                  : 'border-[#c5c6d2]/40 text-[#444650] hover:border-[#FFBF00] hover:bg-[#FFBF00]/10'
              }`}
            >
              KSh {q.toLocaleString()}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          disabled={!amount || Number(amount) < 100}
          className="w-full bg-[#FFBF00] text-[#00113a] font-bold py-4 rounded-xl text-base flex items-center justify-center gap-2 hover:bg-[#D48806] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add Funds <ChevronRight size={18} />
        </button>
      </motion.div>
    </div>
  );
}

/* ─── Withdraw Modal ─────────────────────────────────────────────────── */
interface WithdrawModalProps {
  balance: number;
  onClose: () => void;
}
function WithdrawModal({ balance, onClose }: WithdrawModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const [destination, setDestination] = useState<'mpesa' | 'bank'>('mpesa');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const isValid = Number(amount) >= 500 && Number(amount) <= balance;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="withdraw-title"
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        initial={shouldReduceMotion ? false : { y: '100%', opacity: 0.5 }}
        animate={shouldReduceMotion ? false : { y: 0, opacity: 1 }}
        exit={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 z-10 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 id="withdraw-title" className="font-headline text-xl font-bold text-[#00113a]">
            Withdraw Funds
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-[#f6f3ee] flex items-center justify-center text-[#444650] hover:bg-[#e5e2dd] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Current balance */}
        <div className="bg-[#f6f3ee] rounded-2xl p-4 mb-6 flex items-center justify-between">
          <span className="text-sm text-[#6B7280] font-semibold">Available Balance</span>
          <span className="font-headline font-bold text-[#00113a]">
            KSh {balance.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
          </span>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label htmlFor="withdraw-amount" className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-2 block">
            Amount (KSh)
          </label>
          <input
            id="withdraw-amount"
            type="number"
            min="500"
            max={balance}
            placeholder="Min. KSh 500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border-2 border-[#c5c6d2]/40 rounded-xl px-4 py-3 text-[#00113a] font-semibold text-lg focus:outline-none focus:border-[#002366] transition-colors"
          />
        </div>

        {/* Destination */}
        <fieldset className="mb-6">
          <legend className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-3">Send To</legend>
          <div className="flex gap-3">
            {(['mpesa', 'bank'] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDestination(d)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                  destination === d
                    ? 'border-[#002366] bg-[#002366]/5 text-[#002366]'
                    : 'border-[#c5c6d2]/40 text-[#444650] hover:border-[#002366]/40'
                }`}
                aria-pressed={destination === d}
              >
                {d === 'mpesa' ? <Smartphone size={16} /> : <CreditCard size={16} />}
                {d === 'mpesa' ? 'M-Pesa' : 'Bank Transfer'}
              </button>
            ))}
          </div>
          {destination === 'mpesa' && (
            <p className="text-xs text-[#6B7280] mt-2 px-1">
              Sends to your registered M-Pesa number from Account Settings.
            </p>
          )}
        </fieldset>

        {/* Processing note */}
        <p className="text-xs text-[#6B7280] bg-[#f6f3ee] rounded-xl px-4 py-3 mb-6">
          ⏱ Withdrawals processed within 24 hours to your registered account.
        </p>

        {/* CTA */}
        <button
          disabled={!isValid}
          className="w-full bg-[#002366] text-white font-bold py-4 rounded-xl text-base flex items-center justify-center gap-2 hover:bg-[#00113a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirm Withdrawal <ChevronRight size={18} />
        </button>
      </motion.div>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────── */
export default function LearnerWallet() {
  const shouldReduceMotion = useReducedMotion();

  /* State */
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  /* Demo data — zero for first-run feel; swap with real values */
  const balance = 0;
  const totalEarned = 0;
  const totalSpent = 0;
  const pending = 0;

  /* Use sample transactions to demo populated state; replace with [] for real first-run empty */
  const allTransactions: Transaction[] = SAMPLE_TRANSACTIONS;

  const filteredTx = allTransactions.filter((tx) => {
    if (activeFilter === 'credits') return tx.type === 'credit' || tx.type === 'bonus';
    if (activeFilter === 'debits')  return tx.type === 'debit';
    return true;
  });

  const filterTabs: { id: FilterTab; label: string }[] = [
    { id: 'all',     label: 'All' },
    { id: 'credits', label: 'Credits' },
    { id: 'debits',  label: 'Debits' },
  ];

  const statCards: StatCardProps[] = [
    {
      icon: <TrendingUp size={20} className="text-[#D48806]" />,
      iconBg: 'rgba(255,191,0,0.15)',
      label: 'Total Earned',
      value: `KSh ${totalEarned.toLocaleString('en-KE', { minimumFractionDigits: 2 })}`,
      subtext: 'From referrals',
    },
    {
      icon: <ShoppingBag size={20} className="text-[#002366]" />,
      iconBg: 'rgba(0,35,102,0.10)',
      label: 'Total Spent',
      value: `KSh ${totalSpent.toLocaleString('en-KE', { minimumFractionDigits: 2 })}`,
      subtext: 'On courses',
    },
    {
      icon: <Clock size={20} className="text-orange-500" />,
      iconBg: 'rgba(251,146,60,0.15)',
      label: 'Pending',
      value: `KSh ${pending.toLocaleString('en-KE', { minimumFractionDigits: 2 })}`,
      subtext: 'Processing referral earnings',
    },
  ];

  return (
    <>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* ── Page Header ─────────────────────────── */}
        <header>
          <h1 className="font-headline text-3xl font-bold text-[#002366]">My Wallet</h1>
          <p className="text-[#6B7280] mt-1">
            Manage your funds, referral earnings, and course payments.
          </p>
        </header>

        {/* ── Balance Card ─────────────────────────── */}
        <section aria-label="Available balance" className="relative bg-[#002366] rounded-[2rem] p-8 overflow-hidden shadow-lg">
          {/* Kente background pattern */}
          <KentePattern />

          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FFBF00] mb-2">
              Available Balance
            </p>
            <p className="font-headline text-5xl font-bold text-white mb-6" style={{ fontSize: '3rem' }}>
              KSh {balance.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowAddFunds(true)}
                id="add-funds-btn"
                className="flex items-center gap-2 bg-[#FFBF00] text-[#002366] font-bold px-6 py-3 rounded-xl hover:bg-[#D48806] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <ArrowUp size={16} />
                Add Funds
              </button>
              <button
                onClick={() => setShowWithdraw(true)}
                id="withdraw-btn"
                className="flex items-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <ArrowDown size={16} />
                Withdraw
              </button>
            </div>

            <p className="text-xs text-white/60 mt-4">Minimum withdrawal: KSh 500</p>
          </div>
        </section>

        {/* ── Stats Row ─────────────────────────────── */}
        <section aria-label="Wallet statistics" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {statCards.map((card) => (
            <StatCard key={card.label} {...card} iconBg={card.iconBg} />
          ))}
        </section>

        {/* ── Transaction History ───────────────────── */}
        <section aria-label="Transaction history">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h2 className="font-headline text-xl font-bold text-[#00113a]">Transaction History</h2>

            {/* Filter tabs */}
            <div role="tablist" aria-label="Filter transactions" className="flex bg-[#f6f3ee] rounded-xl p-1 gap-1">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeFilter === tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeFilter === tab.id
                      ? 'bg-white text-[#002366] shadow-sm'
                      : 'text-[#6B7280] hover:text-[#00113a]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#c5c6d2]/20 shadow-sm overflow-hidden">
            {filteredTx.length === 0 ? (
              /* Empty state */
              <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                <div className="w-20 h-20 bg-[#f6f3ee] rounded-full flex items-center justify-center mb-5">
                  <Wallet className="w-10 h-10 text-[#c5c6d2]" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[#00113a] mb-2">
                  No transactions yet
                </h3>
                <p className="text-sm text-[#6B7280] max-w-xs">
                  Your referral earnings and course payments will appear here.
                </p>
              </div>
            ) : (
              <ul className="divide-y-0 px-6" aria-label="Transactions">
                <AnimatePresence initial={false}>
                  {filteredTx.map((tx) => (
                    <motion.div
                      key={tx.id}
                      initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                      animate={shouldReduceMotion ? false : { opacity: 1, x: 0 }}
                      exit={shouldReduceMotion ? false : { opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <TxRow tx={tx} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </ul>
            )}
          </div>
        </section>
      </motion.div>

      {/* ── Modals ─────────────────────────────────── */}
      <AnimatePresence>
        {showAddFunds && <AddFundsModal onClose={() => setShowAddFunds(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showWithdraw && <WithdrawModal balance={balance} onClose={() => setShowWithdraw(false)} />}
      </AnimatePresence>
    </>
  );
}
