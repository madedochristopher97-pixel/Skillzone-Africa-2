import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Check,
  Upload,
  Edit3,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  User,
  AlignLeft,
} from 'lucide-react';

/* ─── Types ────────────────────────────────────────────────────── */
type TabId = 'template' | 'upload';
type FontSize = 'small' | 'medium' | 'large';

interface ColorPreset {
  id: string;
  label: string;
  primary: string;
  accent: string;
  text: string;
}

interface Template {
  id: string;
  name: string;
  description: string;
  render: (opts: RenderOpts) => React.ReactNode;
}

interface RenderOpts {
  title: string;
  instructor: string;
  category: string;
  fontSize: FontSize;
  preset: ColorPreset;
  showPhoto: boolean;
}

/* ─── Color presets ─────────────────────────────────────────────── */
const COLOR_PRESETS: ColorPreset[] = [
  { id: 'navy-amber',  label: 'Navy + Amber', primary: '#002366', accent: '#FFBF00', text: '#ffffff' },
  { id: 'dark-green',  label: 'Dark + Green', primary: '#1B5E20', accent: '#4CAF50', text: '#ffffff' },
  { id: 'white-navy',  label: 'White + Navy', primary: '#ffffff', accent: '#002366', text: '#002366' },
  { id: 'earth-gold',  label: 'Earth + Gold', primary: '#8B4513', accent: '#D4A017', text: '#ffffff' },
];

const FONT_SIZE_MAP: Record<FontSize, string> = {
  small:  'text-sm',
  medium: 'text-base',
  large:  'text-xl',
};

/* ─── Kente overlay ─────────────────────────────────────────────── */
const KenteOverlay = ({ opacity = 0.1 }: { opacity?: number }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }} aria-hidden="true">
    <defs>
      <pattern id="kente-tmpl" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect width="10" height="10" fill="#FFBF00" />
        <rect x="10" y="10" width="10" height="10" fill="#FFBF00" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#kente-tmpl)" />
  </svg>
);

/* ─── Circuit overlay ───────────────────────────────────────────── */
const CircuitOverlay = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.08 }} aria-hidden="true">
    <defs>
      <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <line x1="0" y1="20" x2="40" y2="20" stroke="#FFBF00" strokeWidth="1" />
        <line x1="20" y1="0" x2="20" y2="40" stroke="#FFBF00" strokeWidth="1" />
        <circle cx="20" cy="20" r="3" fill="none" stroke="#FFBF00" strokeWidth="1" />
        <circle cx="0"  cy="0"  r="2" fill="#FFBF00" />
        <circle cx="40" cy="40" r="2" fill="#FFBF00" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
);

/* ─── Africa silhouette (simplified SVG path) ───────────────────── */
const AfricaSilhouette = () => (
  <svg viewBox="0 0 200 240" className="absolute right-4 bottom-4 w-16 h-20 pointer-events-none" style={{ opacity: 0.15 }} aria-hidden="true" fill="white">
    <path d="M100,10 C80,10 60,25 55,45 C50,65 55,80 50,95 C45,110 35,120 38,140 C41,160 60,175 70,195 C80,215 90,230 100,225 C110,230 120,215 130,195 C140,175 159,160 162,140 C165,120 155,110 150,95 C145,80 150,65 145,45 C140,25 120,10 100,10Z" />
  </svg>
);

/* ─── Dot grid for Clean White ──────────────────────────────────── */
const DotGrid = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }} aria-hidden="true">
    <defs>
      <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="8" cy="8" r="1.5" fill="#002366" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

/* ─── Template renderers (16:9 canvas) ─────────────────────────── */
const TEMPLATES: Template[] = [
  /* 1 — Modern Navy */
  {
    id: 'modern-navy',
    name: 'Modern Navy',
    description: 'Bold & professional. Great for business and tech courses.',
    render: ({ title, instructor, category, fontSize, preset }) => (
      <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: 'linear-gradient(135deg, #002366 0%, #003399 100%)' }}>
        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded" style={{ background: preset.accent, color: '#002366' }}>{category}</span>
        </div>
        {/* SkillZone watermark */}
        <span className="absolute bottom-2 right-2 text-[7px] font-bold text-white/40 tracking-widest uppercase">SkillZone Africa</span>
        {/* Main content */}
        <div className="flex-1 flex items-center px-5 pt-6">
          <p className={`font-headline font-bold text-white leading-tight ${FONT_SIZE_MAP[fontSize]}`} style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>{title}</p>
        </div>
        {/* Amber bottom strip */}
        <div className="px-5 py-2 flex items-center gap-2" style={{ background: preset.accent }}>
          <span className="text-[8px] font-bold text-[#002366] truncate">{instructor}</span>
        </div>
      </div>
    ),
  },
  /* 2 — Amber Energy */
  {
    id: 'amber-energy',
    name: 'Amber Energy',
    description: 'Energetic and eye-catching with Kente pattern overlay.',
    render: ({ title, instructor, fontSize }) => (
      <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFBF00 0%, #D48806 100%)' }}>
        <KenteOverlay opacity={0.08} />
        <div className="flex-1 flex items-center px-5 pt-5 relative z-10">
          <p className={`font-headline font-bold text-[#002366] leading-tight ${FONT_SIZE_MAP[fontSize]}`}>{title}</p>
        </div>
        <div className="px-5 py-2 flex items-center relative z-10" style={{ background: '#002366' }}>
          <span className="text-[8px] font-bold text-white truncate">{instructor}</span>
        </div>
      </div>
    ),
  },
  /* 3 — African Earth */
  {
    id: 'african-earth',
    name: 'African Earth',
    description: 'Warm and culturally rooted. Ideal for heritage & arts courses.',
    render: ({ title, instructor, fontSize }) => (
      <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)' }}>
        <AfricaSilhouette />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-5 relative z-10">
          <p className={`font-headline font-bold text-white leading-tight ${FONT_SIZE_MAP[fontSize]}`}>{title}</p>
          <p className="text-[8px] text-white/70 mt-2 font-semibold">{instructor}</p>
        </div>
        <div className="absolute bottom-2 left-3">
          <span className="text-[7px] font-bold text-white/40 tracking-widest uppercase">SkillZone Africa</span>
        </div>
      </div>
    ),
  },
  /* 4 — Clean White Pro */
  {
    id: 'clean-white',
    name: 'Clean White Pro',
    description: 'Professional and minimal. Best for corporate training.',
    render: ({ title, instructor, category, fontSize }) => (
      <div className="relative w-full h-full flex overflow-hidden bg-white">
        <DotGrid />
        {/* Amber accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: '#FFBF00' }} aria-hidden="true" />
        <div className="flex-1 flex flex-col justify-center pl-6 pr-4 relative z-10">
          <span className="text-[8px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">{category}</span>
          <p className={`font-headline font-bold text-[#002366] leading-tight ${FONT_SIZE_MAP[fontSize]}`}>{title}</p>
          <p className="text-[8px] text-[#6B7280] font-semibold mt-2">{instructor}</p>
        </div>
        {/* Photo placeholder */}
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full border-2 border-[#FFBF00] bg-[#f6f3ee] flex items-center justify-center">
          <User size={14} className="text-[#002366]/40" />
        </div>
      </div>
    ),
  },
  /* 5 — Tech Dark */
  {
    id: 'tech-dark',
    name: 'Tech Dark',
    description: 'Sleek dark theme with amber accents for tech & dev courses.',
    render: ({ title, instructor, fontSize }) => (
      <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#001133' }}>
        <CircuitOverlay />
        {/* Amber geometric accent lines */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-20" style={{ background: 'linear-gradient(45deg, transparent 50%, #FFBF00 50%)' }} aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-16 h-16 opacity-20" style={{ background: 'linear-gradient(225deg, transparent 50%, #FFBF00 50%)' }} aria-hidden="true" />
        <div className="flex-1 flex flex-col items-start justify-center px-5 relative z-10">
          <p className={`font-headline font-bold text-white leading-tight ${FONT_SIZE_MAP[fontSize]}`}>
            {title.split(' ').map((w, i) =>
              i === 0
                ? <span key={i} style={{ color: '#FFBF00' }}>{w} </span>
                : <span key={i}>{w} </span>
            )}
          </p>
          <p className="text-[8px] text-white/50 font-semibold mt-2">{instructor}</p>
        </div>
      </div>
    ),
  },
  /* 6 — Community Green */
  {
    id: 'community-green',
    name: 'Community Green',
    description: 'Warm community feel. Great for leadership & social courses.',
    render: ({ title, instructor, fontSize }) => (
      <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)' }}>
        {/* People icon watermark */}
        <svg className="absolute right-3 bottom-3 w-12 h-12 pointer-events-none" style={{ opacity: 0.15 }} fill="white" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
        <div className="flex-1 flex items-center px-5 pt-5">
          <p className={`font-headline font-bold text-white leading-tight ${FONT_SIZE_MAP[fontSize]}`}>{title}</p>
        </div>
        <div className="px-5 py-2 flex items-center gap-2" style={{ background: 'rgba(0,0,0,0.25)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFBF00]" aria-hidden="true" />
          <span className="text-[8px] font-bold text-white/80 truncate">{instructor}</span>
        </div>
      </div>
    ),
  },
];

/* ─── Template Card ─────────────────────────────────────────────── */
interface TemplateCardProps {
  template: Template;
  isSelected: boolean;
  onSelect: () => void;
  renderOpts: RenderOpts;
}
function TemplateCard({ template, isSelected, onSelect, renderOpts }: TemplateCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      aria-label={`Select ${template.name} template`}
      className={`group relative w-full text-left rounded-lg overflow-hidden transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#FFBF00] focus-visible:outline-none ${
        isSelected
          ? 'ring-2 ring-[#FFBF00] shadow-lg shadow-[#FFBF00]/20 scale-[1.01]'
          : 'hover:scale-[1.02] hover:ring-2 hover:ring-[#FFBF00]/60'
      }`}
      style={{ aspectRatio: '16/9' }}
    >
      {/* Render the template */}
      {template.render(renderOpts)}

      {/* Selection checkmark */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#FFBF00] flex items-center justify-center shadow-sm z-20"
          >
            <Check size={12} className="text-[#002366]" strokeWidth={3} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name label on hover */}
      <div className={`absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-3 py-1.5 text-left transition-opacity duration-200 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <p className="text-[9px] font-bold text-white truncate">{template.name}</p>
      </div>
    </button>
  );
}

/* ─── Live Preview Canvas ───────────────────────────────────────── */
interface PreviewProps {
  template: Template | null;
  opts: RenderOpts;
}
function LivePreview({ template, opts }: PreviewProps) {
  if (!template) {
    return (
      <div className="w-full bg-[#f6f3ee] rounded-xl flex items-center justify-center" style={{ aspectRatio: '16/9' }}>
        <p className="text-xs text-[#6B7280] font-semibold">Select a template to preview</p>
      </div>
    );
  }
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md" style={{ aspectRatio: '16/9' }}>
      {template.render(opts)}
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */
interface CourseThumbnailSelectorProps {
  courseTitle?: string;
  instructorName?: string;
  categoryName?: string;
}

export default function CourseThumbnailSelector({
  courseTitle = 'My Awesome Course',
  instructorName = 'Your Name',
  categoryName = 'Business & Finance',
}: CourseThumbnailSelectorProps) {
  const shouldReduceMotion = useReducedMotion();

  /* Tab */
  const [activeTab, setActiveTab] = useState<TabId>('template');

  /* Template selection */
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [appliedId, setAppliedId] = useState<string | null>(null);

  /* Customization fields */
  const [customTitle, setCustomTitle] = useState(courseTitle);
  const [customInstructor, setCustomInstructor] = useState(instructorName);
  const [customCategory, setCustomCategory] = useState(categoryName);
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [selectedPreset, setSelectedPreset] = useState<ColorPreset>(COLOR_PRESETS[0]);
  const [showPhoto, setShowPhoto] = useState(false);

  /* Upload */
  const fileRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const selectedTemplate = TEMPLATES.find(t => t.id === selectedId) ?? null;
  const appliedTemplate  = TEMPLATES.find(t => t.id === appliedId)  ?? null;

  const renderOpts: RenderOpts = {
    title: customTitle || courseTitle,
    instructor: customInstructor || instructorName,
    category: customCategory || categoryName,
    fontSize,
    preset: selectedPreset,
    showPhoto,
  };

  const handleApply = () => {
    if (selectedId) setAppliedId(selectedId);
  };

  const handleReset = () => {
    setAppliedId(null);
    setSelectedId(null);
  };

  /* ─ Applied state ─ */
  if (appliedId && appliedTemplate) {
    return (
      <div className="space-y-3">
        <label className="block font-headline font-bold text-primary text-sm tracking-tight uppercase">Course Thumbnail</label>
        <div className="bg-white rounded-2xl border border-[#c5c6d2]/30 p-5 space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#FFBF00]">Applied Template</p>
          {/* Applied preview */}
          <div className="rounded-xl overflow-hidden shadow-md" style={{ aspectRatio: '16/9', maxWidth: 400 }}>
            {appliedTemplate.render(renderOpts)}
          </div>
          {/* Actions */}
          <div className="flex gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => { setSelectedId(appliedId); setAppliedId(null); }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f6f3ee] text-[#002366] font-bold text-xs border-2 border-[#002366]/20 hover:border-[#002366]/40 transition-all"
            >
              <Edit3 size={13} /> Edit Template
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[#6B7280] font-bold text-xs border-2 border-[#c5c6d2]/40 hover:border-[#c5c6d2] transition-all"
            >
              <RefreshCw size={13} /> Replace
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <label className="block font-headline font-bold text-primary text-sm tracking-tight uppercase">Course Thumbnail</label>

      {/* ── Tab switcher ── */}
      <div className="relative flex gap-0 border-b-2 border-[#e5e2dd]">
        {([
          { id: 'template', label: '✦ Choose a Template', hint: 'Recommended' },
          { id: 'upload',   label: '↑ Upload Your Own Image' },
        ] as { id: TabId; label: string; hint?: string }[]).map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-3 text-sm font-bold transition-colors focus-visible:outline-none ${
              activeTab === tab.id ? 'text-[#002366]' : 'text-[#6B7280] hover:text-[#002366]'
            }`}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.label}
            {tab.hint && (
              <span className="ml-2 text-[9px] font-bold bg-[#FFBF00] text-[#002366] px-1.5 py-0.5 rounded-full">{tab.hint}</span>
            )}
            {activeTab === tab.id && (
              <motion.div
                layoutId="thumb-tab-indicator"
                className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-[#FFBF00]"
                transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ══════ TEMPLATE TAB ══════ */}
        {activeTab === 'template' && (
          <motion.div
            key="template-tab"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Gallery header */}
            <div>
              <h3 className="font-headline font-bold text-[#002366] text-base">Choose a Course Thumbnail Template</h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Professional templates designed for African educators. Customize with your course title and colors.</p>
            </div>

            {/* Template grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" role="listbox" aria-label="Thumbnail templates">
              {TEMPLATES.map(t => (
                <TemplateCard
                  key={t.id}
                  template={t}
                  isSelected={selectedId === t.id}
                  onSelect={() => setSelectedId(prev => prev === t.id ? null : t.id)}
                  renderOpts={renderOpts}
                />
              ))}
            </div>

            {/* ── Customization panel ── */}
            <AnimatePresence>
              {selectedId && (
                <motion.div
                  key="customize-panel"
                  initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                  animate={shouldReduceMotion ? false : { opacity: 1, height: 'auto' }}
                  exit={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="bg-white rounded-2xl border border-[#c5c6d2]/30 shadow-sm p-6 space-y-6">
                    <h4 className="font-headline font-bold text-[#002366] text-sm">Customize Your Template</h4>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* ── Left: Fields ── */}
                      <div className="space-y-5">
                        {/* Course Title */}
                        <div className="space-y-1.5">
                          <label htmlFor="tmpl-title" className="flex items-center gap-1.5 text-xs font-bold text-[#444650] uppercase tracking-wider">
                            <AlignLeft size={12} /> Course Title
                          </label>
                          <input
                            id="tmpl-title"
                            type="text"
                            value={customTitle}
                            onChange={e => setCustomTitle(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-xl border border-[#c5c6d2]/50 text-sm text-[#002366] font-semibold focus:outline-none focus:border-[#FFBF00] transition-colors bg-[#f6f3ee]"
                          />
                          {/* Font size slider */}
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wider">Size:</span>
                            {(['small', 'medium', 'large'] as FontSize[]).map(s => (
                              <button
                                key={s}
                                type="button"
                                onClick={() => setFontSize(s)}
                                className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase transition-all ${
                                  fontSize === s
                                    ? 'bg-[#002366] text-white'
                                    : 'bg-[#f6f3ee] text-[#6B7280] hover:bg-[#e5e2dd]'
                                }`}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Instructor */}
                        <div className="space-y-1.5">
                          <label htmlFor="tmpl-instructor" className="flex items-center gap-1.5 text-xs font-bold text-[#444650] uppercase tracking-wider">
                            <User size={12} /> Instructor Name
                          </label>
                          <input
                            id="tmpl-instructor"
                            type="text"
                            value={customInstructor}
                            onChange={e => setCustomInstructor(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-xl border border-[#c5c6d2]/50 text-sm text-[#002366] font-semibold focus:outline-none focus:border-[#FFBF00] transition-colors bg-[#f6f3ee]"
                          />
                        </div>

                        {/* Category */}
                        <div className="space-y-1.5">
                          <label htmlFor="tmpl-category" className="text-xs font-bold text-[#444650] uppercase tracking-wider block">Category Badge</label>
                          <input
                            id="tmpl-category"
                            type="text"
                            value={customCategory}
                            onChange={e => setCustomCategory(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-xl border border-[#c5c6d2]/50 text-sm text-[#002366] font-semibold focus:outline-none focus:border-[#FFBF00] transition-colors bg-[#f6f3ee]"
                          />
                        </div>

                        {/* Color presets */}
                        <div className="space-y-2">
                          <p className="text-xs font-bold text-[#444650] uppercase tracking-wider">Color Scheme</p>
                          <div className="flex flex-wrap gap-2">
                            {COLOR_PRESETS.map(p => (
                              <button
                                key={p.id}
                                type="button"
                                onClick={() => setSelectedPreset(p)}
                                aria-pressed={selectedPreset.id === p.id}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 text-[10px] font-bold transition-all ${
                                  selectedPreset.id === p.id
                                    ? 'border-[#FFBF00] bg-[#FFFBEE]'
                                    : 'border-[#c5c6d2]/40 hover:border-[#FFBF00]/60'
                                }`}
                              >
                                <span className="flex gap-0.5">
                                  <span className="w-3 h-3 rounded-sm" style={{ background: p.primary }} />
                                  <span className="w-3 h-3 rounded-sm" style={{ background: p.accent }} />
                                </span>
                                <span className="text-[#444650]">{p.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Photo toggle */}
                        <div className="flex items-center justify-between py-3 border-t border-[#c5c6d2]/20">
                          <div>
                            <p className="text-xs font-bold text-[#444650]">Add Instructor Photo</p>
                            <p className="text-[10px] text-[#6B7280]">Optional — shows on thumbnail</p>
                          </div>
                          <button
                            type="button"
                            role="switch"
                            aria-checked={showPhoto}
                            onClick={() => setShowPhoto(!showPhoto)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#FFBF00] focus-visible:outline-none ${
                              showPhoto ? 'bg-[#FFBF00]' : 'bg-[#c5c6d2]'
                            }`}
                          >
                            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${showPhoto ? 'translate-x-5' : 'translate-x-0.5'}`} />
                          </button>
                        </div>

                        {showPhoto && (
                          <motion.div
                            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                            animate={shouldReduceMotion ? false : { opacity: 1, height: 'auto' }}
                            exit={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                            className="border-2 border-dashed border-[#FFBF00]/40 rounded-xl p-4 text-center bg-[#FFFBEE]"
                          >
                            <div className="w-12 h-12 rounded-full bg-[#f6f3ee] flex items-center justify-center mx-auto mb-2">
                              <User size={20} className="text-[#6B7280]" />
                            </div>
                            <p className="text-[10px] text-[#6B7280] font-semibold">Upload your photo to appear on the thumbnail</p>
                          </motion.div>
                        )}
                      </div>

                      {/* ── Right: Live Preview ── */}
                      <div className="space-y-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#FFBF00]">Thumbnail Preview</p>
                        <LivePreview template={selectedTemplate} opts={renderOpts} />
                        <p className="text-[10px] text-[#6B7280] text-center">{TEMPLATES.find(t => t.id === selectedId)?.description}</p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-[#c5c6d2]/20">
                      <button
                        type="button"
                        onClick={handleApply}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFBF00] text-[#002366] font-bold text-sm hover:bg-[#D48806] transition-colors focus-visible:ring-2 focus-visible:ring-[#FFBF00] focus-visible:outline-none"
                      >
                        <Check size={15} /> Use This Template ✓
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedId(null)}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#002366] text-[#002366] font-bold text-sm hover:bg-[#002366]/5 transition-colors focus-visible:ring-2 focus-visible:ring-[#002366] focus-visible:outline-none"
                      >
                        <RefreshCw size={14} /> Try Another Template
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* ══════ UPLOAD TAB ══════ */}
        {activeTab === 'upload' && (
          <motion.div
            key="upload-tab"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {/* Dropzone */}
            <div
              role="button"
              tabIndex={0}
              aria-label="Upload thumbnail image"
              onClick={() => fileRef.current?.click()}
              onKeyDown={e => e.key === 'Enter' && fileRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={e => { e.preventDefault(); setDragOver(false); }}
              className={`h-48 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all focus-visible:ring-2 focus-visible:ring-[#FFBF00] focus-visible:outline-none ${
                dragOver
                  ? 'border-[#FFBF00] bg-[#FFFBEE]'
                  : 'border-[#c5c6d2]/50 bg-surface-container-low hover:bg-surface-container-highest/30'
              }`}
            >
              <Upload size={32} className="text-[#6B7280] mb-3" />
              <p className="text-sm font-medium text-[#002366]">
                Drag and drop or <span className="text-[#D48806] font-bold">click to upload</span>
              </p>
              <p className="text-[10px] text-[#6B7280] mt-1 uppercase tracking-widest">JPG, PNG (max 5MB)</p>
            </div>
            <input ref={fileRef} type="file" accept="image/jpeg,image/png" className="hidden" aria-hidden="true" />

            {/* Tips */}
            <div className="bg-[#f6f3ee] rounded-xl px-4 py-3 space-y-1.5">
              <p className="text-xs text-[#444650] font-semibold">
                💡 Tip: For best results use a <strong>1280×720px</strong> image (JPG or PNG, max 5MB)
              </p>
              <p className="text-xs text-[#6B7280]">
                Not sure what to upload?{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('template')}
                  className="font-bold text-[#D48806] hover:underline focus-visible:ring-1 focus-visible:ring-[#FFBF00] rounded"
                >
                  Use one of our free templates ↑
                </button>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
