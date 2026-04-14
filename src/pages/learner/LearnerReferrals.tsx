import { useState, useCallback } from 'react';
import {
  Share2,
  UserPlus,
  Wallet,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Users,
  TrendingUp,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { SavannaPattern } from '../../components/PatternElements';

/* ─── Constants ──────────────────────────────────────────────────────── */
const REFERRAL_CODE = 'SKILLZ-CHR2024';
const SITE_URL = 'https://skillzone-africa.vercel.app';
const SHARE_MESSAGE = `Hey! I've been learning on SkillZone Africa and it's 🔥. Use my code ${REFERRAL_CODE} to sign up and start learning today!\n👉 ${SITE_URL}`;

/* ─── Types ──────────────────────────────────────────────────────────── */
interface Referral {
  id: number;
  name: string;
  joined: string;
  coursesBought: number;
  earnings: number;
  status: 'active' | 'pending' | 'inactive';
}

interface EarningEntry {
  id: number;
  date: string;
  friend: string;
  course: string;
  amount: number;
}

/* ─── Sample data ────────────────────────────────────────────────────── */
const SAMPLE_REFERRALS: Referral[] = [
  { id: 1, name: 'John M.', joined: 'Apr 10, 2026', coursesBought: 1, earnings: 87.5, status: 'active' },
  { id: 2, name: 'Amina O.', joined: 'Mar 28, 2026', coursesBought: 2, earnings: 150, status: 'active' },
  { id: 3, name: 'Brian K.', joined: 'Mar 15, 2026', coursesBought: 0, earnings: 0, status: 'pending' },
];

const SAMPLE_EARNINGS: EarningEntry[] = [
  { id: 1, date: 'Apr 10, 2026', friend: 'J*** M***', course: 'Python Mastery', amount: 87.5 },
  { id: 2, date: 'Mar 28, 2026', friend: 'A*** O***', course: 'UI/UX Design Fundamentals', amount: 87.5 },
  { id: 3, date: 'Mar 20, 2026', friend: 'A*** O***', course: 'Data Science 101', amount: 62.5 },
];

/* ─── Step Card ──────────────────────────────────────────────────────── */
interface StepCardProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}
function StepCard({ step, icon, title, description }: StepCardProps) {
  return (
    <article className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-[#c5c6d2]/20 shadow-sm relative">
      {/* Step number */}
      <span className="absolute top-4 right-4 text-xs font-bold text-[#c5c6d2] bg-[#f6f3ee] px-2 py-0.5 rounded-full">
        0{step}
      </span>
      {/* Icon */}
      <span className="w-14 h-14 rounded-2xl bg-[#FFBF00]/15 flex items-center justify-center mb-4" aria-hidden="true">
        {icon}
      </span>
      <h3 className="font-headline font-bold text-[#00113a] text-base mb-2">{title}</h3>
      <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
    </article>
  );
}

/* ─── Share Platform Button ──────────────────────────────────────────── */
interface SharePlatformProps {
  label: string;
  color: string;
  textColor?: string;
  icon: React.ReactNode;
  onClick: () => void;
}
function SharePlatformBtn({ label, color, textColor = 'white', icon, onClick }: SharePlatformProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      style={{ background: color, color: textColor }}
    >
      {icon}
      {label}
    </button>
  );
}

/* ─── Status Badge ───────────────────────────────────────────────────── */
function StatusBadge({ status }: { status: Referral['status'] }) {
  const map = {
    active:   { bg: 'bg-green-100',  text: 'text-green-700',  label: 'Active'   },
    pending:  { bg: 'bg-amber-100',  text: 'text-amber-700',  label: 'Pending'  },
    inactive: { bg: 'bg-gray-100',   text: 'text-gray-500',   label: 'Inactive' },
  }[status];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${map.bg} ${map.text}`}>
      {map.label}
    </span>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────── */
export default function LearnerReferrals() {
  const shouldReduceMotion = useReducedMotion();

  const [codeCopied, setCodeCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [msgCopied, setMsgCopied]   = useState(false);
  const [msgExpanded, setMsgExpanded] = useState(false);

  /* Use sample data to show populated state; replace with [] for true empty */
  const referrals: Referral[]     = SAMPLE_REFERRALS;
  const earnings: EarningEntry[]  = SAMPLE_EARNINGS;

  /* Stats derived from data */
  const totalReferrals     = referrals.length;
  const successfulEnroll   = referrals.filter(r => r.coursesBought > 0).length;
  const totalEarned        = referrals.reduce((acc, r) => acc + r.earnings, 0);
  const thisMonthEarned    = earnings
    .filter(e => e.date.startsWith('Apr'))
    .reduce((acc, e) => acc + e.amount, 0);

  const copyToClipboard = useCallback((text: string, setter: (v: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    });
  }, []);

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(SHARE_MESSAGE)}`, '_blank');
  };
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_MESSAGE)}`, '_blank');
  };
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}`, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: 'SkillZone Africa', text: SHARE_MESSAGE, url: SITE_URL });
    } else {
      copyToClipboard(`${SHARE_MESSAGE}`, setLinkCopied);
    }
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto space-y-10"
    >
      {/* ── Page Header ─────────────────────────────── */}
      <header>
        <h1 className="font-headline text-3xl font-bold text-[#002366]">Refer &amp; Earn</h1>
        <p className="text-[#6B7280] mt-1">
          Share SkillZone with friends and earn 2.5% of every course they purchase.
        </p>
      </header>

      {/* ── Hero Banner ─────────────────────────────── */}
      <section
        aria-label="Referral program hero"
        className="relative bg-[#002366] rounded-[2rem] overflow-hidden shadow-lg"
      >
        <SavannaPattern />
        <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-10 items-center">
          {/* Left */}
          <div className="space-y-5">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-white leading-tight">
              Earn KSh every time a<br />friend enrolls
            </h2>
            <p className="text-white/75 text-sm leading-relaxed">
              For every course your referral purchases, you automatically receive 2.5%
              of the course price directly into your wallet.
            </p>
            {/* Example box */}
            <div className="bg-[#FFBF00] rounded-2xl px-5 py-4 inline-block max-w-xs">
              <p className="text-xs font-bold text-[#00113a]/60 uppercase tracking-wider mb-1">Example</p>
              <p className="text-sm font-semibold text-[#00113a]">
                Friend buys KSh 3,500 course
              </p>
              <p className="text-base font-bold text-[#00113a] mt-1">
                → You earn: <span className="text-xl">KSh 87.50</span> instantly ✨
              </p>
            </div>
          </div>
          {/* Right — illustration */}
          <div className="flex items-center justify-center" aria-hidden="true">
            <div className="relative flex items-center gap-3">
              {/* Person 1 */}
              <div className="w-16 h-16 rounded-full bg-[#FFBF00]/20 border-2 border-[#FFBF00]/40 flex items-center justify-center">
                <Users size={28} className="text-[#FFBF00]" />
              </div>
              {/* Dotted connector with coin */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-16 border-t-2 border-dashed border-[#FFBF00]/40" />
                <span className="text-2xl animate-bounce" style={{ animationDuration: '2s' }}>💰</span>
                <div className="w-16 border-t-2 border-dashed border-[#FFBF00]/40" />
              </div>
              {/* Person 2 */}
              <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                <UserPlus size={28} className="text-white/70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────── */}
      <section aria-label="How the referral program works">
        <h2 className="font-headline text-xl font-bold text-[#00113a] mb-5">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StepCard
            step={1}
            icon={<Share2 size={22} className="text-[#D48806]" />}
            title="Share Your Code"
            description="Copy your unique referral code or link and share it with friends via WhatsApp, social media, or any channel."
          />
          <StepCard
            step={2}
            icon={<UserPlus size={22} className="text-[#D48806]" />}
            title="Friend Signs Up"
            description="Your friend creates a SkillZone account using your referral code during registration."
          />
          <StepCard
            step={3}
            icon={<Wallet size={22} className="text-[#D48806]" />}
            title="Earn Automatically"
            description="When they purchase any course, 2.5% of the price goes straight into your wallet in real time."
          />
        </div>
      </section>

      {/* ── Referral Code Card ───────────────────────── */}
      <section aria-label="Your referral code" className="bg-white rounded-3xl p-8 border border-[#c5c6d2]/20 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-3">
          Your Referral Code
        </p>
        {/* Code display */}
        <div className="bg-[#FFFBEE] rounded-2xl flex items-center justify-center py-6 mb-6 border border-[#FFBF00]/30">
          <span className="font-headline text-3xl font-bold text-[#002366] tracking-wider select-all">
            {REFERRAL_CODE}
          </span>
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => copyToClipboard(REFERRAL_CODE, setCodeCopied)}
            id="copy-code-btn"
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${
              codeCopied
                ? 'bg-green-500 text-white'
                : 'bg-[#FFBF00] text-[#002366] hover:bg-[#D48806]'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {codeCopied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Check size={16} /> Copied! ✓
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Copy size={16} /> Copy Code
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            onClick={handleNativeShare}
            id="share-link-btn"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 border-[#002366] text-[#002366] hover:bg-[#002366]/5 transition-all focus-visible:ring-2 focus-visible:ring-[#002366] focus-visible:outline-none"
          >
            <Share2 size={16} />
            {linkCopied ? 'Link Copied!' : 'Share Link'}
          </button>
        </div>
      </section>

      {/* ── Share Via ────────────────────────────────── */}
      <section aria-label="Share via platform">
        <h2 className="font-headline text-lg font-bold text-[#00113a] mb-4">Share Via</h2>
        <div className="flex flex-wrap gap-3">
          <SharePlatformBtn
            label="WhatsApp"
            color="#25D366"
            icon={
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            }
            onClick={shareToWhatsApp}
          />
          <SharePlatformBtn
            label="Twitter / X"
            color="#000000"
            icon={
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 5.252zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            }
            onClick={shareToTwitter}
          />
          <SharePlatformBtn
            label="Facebook"
            color="#1877F3"
            icon={
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            }
            onClick={shareToFacebook}
          />
          <SharePlatformBtn
            label="Copy Link"
            color="#f6f3ee"
            textColor="#00113a"
            icon={<Copy size={14} />}
            onClick={() => copyToClipboard(`${SITE_URL}?ref=${REFERRAL_CODE}`, setLinkCopied)}
          />
        </div>
      </section>

      {/* ── Pre-written Share Message ─────────────────── */}
      <section aria-label="Pre-written share message" className="bg-white rounded-3xl border border-[#c5c6d2]/20 shadow-sm overflow-hidden">
        <button
          onClick={() => setMsgExpanded(!msgExpanded)}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f6f3ee] transition-colors"
          aria-expanded={msgExpanded}
          aria-controls="share-message-body"
        >
          <span className="flex items-center gap-2 font-bold text-[#00113a]">
            <Sparkles size={16} className="text-[#FFBF00]" />
            Ready-to-use Share Message
          </span>
          {msgExpanded ? <ChevronUp size={18} className="text-[#6B7280]" /> : <ChevronDown size={18} className="text-[#6B7280]" />}
        </button>

        <AnimatePresence initial={false}>
          {msgExpanded && (
            <motion.div
              id="share-message-body"
              initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
              animate={shouldReduceMotion ? false : { height: 'auto', opacity: 1 }}
              exit={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-1 space-y-4">
                <div className="bg-[#f6f3ee] rounded-2xl p-4 text-sm text-[#444650] leading-relaxed whitespace-pre-line font-mono">
                  {SHARE_MESSAGE}
                </div>
                <button
                  onClick={() => copyToClipboard(SHARE_MESSAGE, setMsgCopied)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    msgCopied
                      ? 'bg-green-500 text-white'
                      : 'bg-[#002366] text-white hover:bg-[#00113a]'
                  }`}
                >
                  {msgCopied ? <><Check size={15} /> Message Copied!</> : <><Copy size={15} /> Copy Message</>}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── Referral Stats ───────────────────────────── */}
      <section aria-label="Referral performance statistics">
        <h2 className="font-headline text-xl font-bold text-[#00113a] mb-5">Your Referral Performance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Total Referrals',        value: totalReferrals,   icon: <Users size={18} className="text-[#002366]" />,    bg: 'rgba(0,35,102,0.08)' },
            { label: 'Successful Enrollments', value: successfulEnroll, icon: <UserPlus size={18} className="text-green-600" />, bg: 'rgba(34,197,94,0.10)' },
            { label: 'Total Earned',           value: `KSh ${totalEarned.toLocaleString('en-KE', { minimumFractionDigits: 2 })}`,     icon: <TrendingUp size={18} className="text-[#D48806]" />,  bg: 'rgba(255,191,0,0.12)' },
            { label: 'This Month',             value: `KSh ${thisMonthEarned.toLocaleString('en-KE', { minimumFractionDigits: 2 })}`,  icon: <Calendar size={18} className="text-purple-500" />,   bg: 'rgba(168,85,247,0.10)' },
          ].map((s) => (
            <article
              key={s.label}
              className="bg-white rounded-2xl p-5 border border-[#c5c6d2]/20 shadow-sm flex flex-col gap-3"
            >
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: s.bg }}
                aria-hidden="true"
              >
                {s.icon}
              </span>
              <div>
                <p className="font-headline text-xl font-bold text-[#00113a]">{s.value}</p>
                <p className="text-xs text-[#6B7280] mt-0.5">{s.label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Referrals Table ──────────────────────────── */}
      <section aria-label="Referred friends table">
        <h2 className="font-headline text-xl font-bold text-[#00113a] mb-4">Your Referrals</h2>
        <div className="bg-white rounded-2xl border border-[#c5c6d2]/20 shadow-sm overflow-hidden">
          {referrals.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-14 px-8 text-center">
              <div className="w-16 h-16 bg-[#f6f3ee] rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-[#c5c6d2]" />
              </div>
              <p className="font-headline font-bold text-[#00113a]">No referrals yet</p>
              <p className="text-sm text-[#6B7280] mt-1">Share your code to start earning!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#c5c6d2]/20">
                    <th className="text-left px-6 py-4 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Name</th>
                    <th className="text-left px-6 py-4 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Joined</th>
                    <th className="text-left px-6 py-4 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Courses Bought</th>
                    <th className="text-left px-6 py-4 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Your Earnings</th>
                    <th className="text-left px-6 py-4 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c5c6d2]/10">
                  {referrals.map((r) => (
                    <tr key={r.id} className="hover:bg-[#f6f3ee]/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#00113a]">{r.name}</td>
                      <td className="px-6 py-4 text-[#6B7280]">{r.joined}</td>
                      <td className="px-6 py-4 text-center text-[#00113a] font-semibold">{r.coursesBought}</td>
                      <td className="px-6 py-4 font-bold text-green-600">
                        {r.earnings > 0 ? `KSh ${r.earnings.toFixed(2)}` : '—'}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={r.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* ── Earnings Breakdown Timeline ──────────────── */}
      <section aria-label="Earnings breakdown timeline">
        <h2 className="font-headline text-xl font-bold text-[#00113a] mb-4">Earnings Breakdown</h2>
        <div className="bg-white rounded-2xl border border-[#c5c6d2]/20 shadow-sm overflow-hidden">
          {earnings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-14 px-8 text-center">
              <div className="w-16 h-16 bg-[#f6f3ee] rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-[#c5c6d2]" />
              </div>
              <p className="font-headline font-bold text-[#00113a]">No earnings yet</p>
              <p className="text-sm text-[#6B7280] mt-1">Your referral commissions will appear here.</p>
            </div>
          ) : (
            <ul className="divide-y divide-[#c5c6d2]/10" aria-label="Earnings timeline">
              {earnings.map((e, idx) => (
                <motion.li
                  key={e.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={shouldReduceMotion ? false : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  className="flex items-center gap-4 px-6 py-4"
                >
                  {/* Timeline dot */}
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0" aria-hidden="true" />
                  {/* Date */}
                  <span className="text-xs text-[#6B7280] w-24 flex-shrink-0">{e.date}</span>
                  {/* Friend */}
                  <span className="text-sm font-semibold text-[#444650] flex-shrink-0 hidden sm:block">{e.friend}</span>
                  {/* Course */}
                  <span className="flex-1 text-sm text-[#6B7280] truncate">{e.course}</span>
                  {/* Amount */}
                  <span className="font-bold text-green-600 flex-shrink-0">+KSh {e.amount.toFixed(2)}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </motion.div>
  );
}
