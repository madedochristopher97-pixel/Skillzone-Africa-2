import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CourseBuilder() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [difficulty, setDifficulty] = useState('Beginner');
  const [visibility, setVisibility] = useState('public');
  const [publishImmediately, setPublishImmediately] = useState(true);

  const steps = [
    { num: 1, label: 'Course Details' },
    { num: 2, label: 'Course Content' },
    { num: 3, label: 'Pricing' },
    { num: 4, label: 'Publish' },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/instructor-dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/instructor-dashboard');
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Progress Stepper */}
      <header className="mb-16">
        <div className="flex items-center justify-between relative w-full max-w-3xl mx-auto">
          {/* Progress Line Background */}
          <div className="absolute top-5 left-0 w-full h-[2px] bg-surface-container-highest -z-10"></div>
          
          {steps.map((step) => {
            const isCompleted = step.num < currentStep;
            const isActive = step.num === currentStep;
            const isUpcoming = step.num > currentStep;

            return (
              <div key={step.num} className={`flex flex-col items-center gap-3 ${isUpcoming ? 'opacity-50' : ''}`}>
                {isCompleted ? (
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </div>
                ) : isActive ? (
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold border-4 border-surface shadow-sm ring-2 ring-secondary-fixed/20">
                    {step.num}
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-surface-container-low border-2 border-primary flex items-center justify-center text-primary font-bold">
                    {step.num}
                  </div>
                )}
                <span className={`text-xs font-headline uppercase tracking-tighter ${isActive || isCompleted ? 'font-bold text-primary' : 'font-medium text-slate-400'}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </header>

      {/* Form Area */}
      <div>
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="font-headline font-extrabold text-4xl text-primary tracking-tight mb-2">Step 1: Course Details</h2>
              <p className="text-slate-500 max-w-lg">Let’s lay the foundation for your legacy. Describe your course to help students understand what they will achieve.</p>
            </div>
            
            <div className="space-y-10">
              {/* Title Input */}
              <div className="space-y-3">
                <label className="block font-headline font-bold text-primary text-sm tracking-tight uppercase">Course Title</label>
                <input 
                  className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 focus:bg-surface-container-lowest transition-all p-4 font-medium text-lg text-primary placeholder:text-slate-400" 
                  placeholder="e.g. Modern Architecture Foundations in West Africa" 
                  type="text"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Category Dropdown */}
                <div className="space-y-3">
                  <label className="block font-headline font-bold text-primary text-sm tracking-tight uppercase">Category</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-surface-container-low border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 p-4 font-medium text-primary">
                      <option>Business & Finance</option>
                      <option>Creative Arts</option>
                      <option>Technology & Software</option>
                      <option>Modern Agriculture</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
                  </div>
                </div>
                
                {/* Difficulty Toggle */}
                <div className="space-y-3">
                  <label className="block font-headline font-bold text-primary text-sm tracking-tight uppercase">Difficulty Level</label>
                  <div className="flex p-1 bg-surface-container-low rounded-xl">
                    {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <button 
                        key={level}
                        onClick={() => setDifficulty(level)}
                        className={`flex-1 py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
                          difficulty === level 
                            ? 'bg-secondary-fixed text-on-secondary-fixed' 
                            : 'text-primary hover:bg-surface-container-highest/50'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Description Area */}
              <div className="space-y-3">
                <label className="block font-headline font-bold text-primary text-sm tracking-tight uppercase">Course Description</label>
                <textarea 
                  className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 focus:bg-surface-container-lowest transition-all p-4 font-medium text-primary placeholder:text-slate-400 resize-none" 
                  placeholder="Share the story and value of this course..." 
                  rows={6}
                ></textarea>
              </div>
              
              {/* Thumbnail Section */}
              <div className="space-y-3">
                <label className="block font-headline font-bold text-primary text-sm tracking-tight uppercase">Course Thumbnail</label>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {/* Dropzone */}
                  <div className="md:col-span-3 h-48 border-2 border-dashed border-outline-variant rounded-2xl flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-container-highest/30 transition-all group cursor-pointer">
                    <span className="material-symbols-outlined text-4xl text-slate-400 mb-3 group-hover:text-primary transition-colors">cloud_upload</span>
                    <p className="text-sm font-medium text-primary">Drag and drop or <span className="text-secondary font-bold">click to upload</span></p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">JPG, PNG (max. 5MB)</p>
                  </div>
                  
                  {/* Preview Image */}
                  <div className="md:col-span-2 relative h-48 group">
                    <img 
                      alt="Course Thumbnail Preview" 
                      className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-sm" 
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                    />
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-surface-container-lowest/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider shadow-[0_32px_64px_-12px_rgba(28,28,25,0.06)]">Preview Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Curriculum Builder Column */}
            <div className="lg:col-span-7 space-y-6">
              <header className="mb-8">
                <h2 className="text-3xl font-bold text-primary font-headline leading-tight">Step 2: Course Curriculum</h2>
                <p className="text-slate-500 text-lg mt-2">Organize your course into modules and lessons.</p>
              </header>
              
              {/* Module 1 */}
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 flex items-center justify-between bg-surface-container-low/50">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-slate-400 cursor-grab">drag_indicator</span>
                    <h3 className="font-bold text-primary font-headline">Module 1: Introduction to Accounting</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary cursor-pointer">expand_more</span>
                </div>
                <div className="p-6 space-y-4">
                  {/* Lesson 1.1 */}
                  <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-colors border-l-4 border-secondary">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary">movie</span>
                      <div>
                        <p className="text-sm font-bold text-primary">Lesson 1.1: Welcome & Course Overview</p>
                        <p className="text-xs text-slate-500">Video • 05:00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">edit</span></button>
                      <button className="p-2 text-slate-400 hover:text-red-600"><span className="material-symbols-outlined text-lg">delete</span></button>
                    </div>
                  </div>
                  
                  {/* Lesson 1.2 */}
                  <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-slate-400">movie</span>
                      <div>
                        <p className="text-sm font-bold text-primary">Lesson 1.2: Basic Principles</p>
                        <p className="text-xs text-slate-500">Video • 12:45</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">edit</span></button>
                      <button className="p-2 text-slate-400 hover:text-red-600"><span className="material-symbols-outlined text-lg">delete</span></button>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 flex items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-xl text-primary font-bold hover:bg-primary/5 transition-colors">
                    <span className="material-symbols-outlined text-lg">add</span>
                    Add Lesson
                  </button>
                </div>
              </div>
              
              {/* Module 2 */}
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 flex items-center justify-between bg-surface-container-low/50">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-slate-400 cursor-grab">drag_indicator</span>
                    <h3 className="font-bold text-primary font-headline">Module 2: The Accounting Equation</h3>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_more</span>
                </div>
                <div className="p-6">
                  <button className="w-full py-3 flex items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-xl text-primary font-bold hover:bg-primary/5 transition-colors">
                    <span className="material-symbols-outlined text-lg">add</span>
                    Add Lesson
                  </button>
                </div>
              </div>
              
              {/* Add New Module */}
              <button className="w-full py-8 border-2 border-dashed border-primary/30 rounded-2xl bg-primary/5 flex flex-col items-center justify-center gap-2 text-primary hover:bg-primary/10 transition-all">
                <span className="material-symbols-outlined text-3xl">library_add</span>
                <span className="font-bold font-headline">Add New Module</span>
              </button>
            </div>
            
            {/* Lesson Edit Panel */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 bg-surface-container-lowest rounded-3xl p-8 shadow-xl border border-surface-container-high">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-xl font-bold text-primary font-headline">Edit Lesson</h4>
                  <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">close</span></button>
                </div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2 font-headline">Lesson Title</label>
                    <input 
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-0 focus:border-b-2 focus:border-secondary focus:bg-surface-container-lowest transition-all" 
                      type="text" 
                      defaultValue="Welcome & Course Overview"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2 font-headline">Video Content</label>
                    <div className="relative aspect-video rounded-2xl bg-surface-container-high overflow-hidden group">
                      <img 
                        className="w-full h-full object-cover opacity-60" 
                        alt="Video thumbnail with accounting software" 
                        src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
                      />
                      <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                          <span className="material-symbols-outlined text-primary fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                        </div>
                        <button type="button" className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-full hover:scale-105 transition-transform">Replace Video</button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2 font-headline">Lesson Resources</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center gap-3 bg-surface-container-low/30 hover:bg-surface-container-low transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-3xl text-slate-400">upload_file</span>
                      <div className="text-center">
                        <p className="text-sm font-bold text-primary">Click to upload resources</p>
                        <p className="text-xs text-slate-500 mt-1">PDF, Excel, or Zip files (Max 50MB)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2 font-headline">Lesson Description</label>
                    <textarea 
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-0 focus:border-b-2 focus:border-secondary focus:bg-surface-container-lowest transition-all" 
                      rows={4}
                      defaultValue="In this introductory lesson, we will cover the fundamental concepts of accounting and how this course will help you master financial management."
                    ></textarea>
                  </div>
                  
                  <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-container transition-colors font-headline" type="button">
                    Update Lesson
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="space-y-12">
            <header className="mb-8">
              <h2 className="font-headline font-extrabold text-4xl text-primary tracking-tight mb-2">Step 3: Set Your Value</h2>
              <p className="text-slate-500 max-w-3xl text-lg">Establish a pricing strategy that reflects the depth of your expertise while remaining accessible to the next generation of African talent.</p>
            </header>
            
            <div className="flex flex-col xl:flex-row gap-16">
              {/* Left: Main Pricing Form (60%) */}
              <section className="xl:w-3/5 space-y-12">
                {/* Basic Pricing */}
                <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-surface-variant space-y-10">
                  <div className="flex items-center justify-between border-b border-surface-variant pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">payments</span>
                      </div>
                      <h3 className="font-headline text-2xl font-bold text-primary">Course Economics</h3>
                    </div>
                    <span className="text-[10px] font-bold px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed rounded-full tracking-widest uppercase">Pricing Phase 01</span>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <div className="flex justify-between items-end">
                        <label className="block text-sm font-bold text-primary font-headline">Standard Course Price</label>
                        <span className="text-[10px] text-slate-500 font-bold uppercase">Currency: KES (KSh)</span>
                      </div>
                      <div className="relative group">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40 font-bold text-xl group-focus-within:text-primary transition-colors">KSh</div>
                        <input className="w-full pl-20 pr-8 py-6 bg-surface-container-low border-2 border-transparent focus:border-secondary-container focus:bg-surface-container-lowest rounded-3xl transition-all font-bold text-2xl text-primary placeholder-primary/10" placeholder="2,500" type="number" />
                      </div>
                      <p className="text-xs text-slate-500 px-2">Recommendation: KSh 1,500 - 3,500 for entry-level workshops.</p>
                    </div>
                    {/* Discount Toggle Section */}
                    <div className="pt-10 border-t border-surface-variant">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h4 className="font-headline font-bold text-primary text-lg">Limited-Time Discount</h4>
                          <p className="text-sm text-slate-500">Attract early learners with a special launch price.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                          <div className="w-14 h-7 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-secondary-container"></div>
                        </label>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6 p-6 bg-surface-container-low rounded-3xl border border-surface-variant">
                        <div className="space-y-3">
                          <label className="block text-xs font-bold text-primary font-headline uppercase tracking-wider">Discounted Price (KSh)</label>
                          <input className="w-full px-6 py-4 bg-surface-container-lowest border-2 border-transparent focus:border-secondary-container rounded-2xl transition-all font-bold text-lg text-primary" placeholder="1,999" type="number" />
                        </div>
                        <div className="space-y-3">
                          <label className="block text-xs font-bold text-primary font-headline uppercase tracking-wider">Discount Reason</label>
                          <div className="relative">
                            <select className="w-full px-6 py-4 bg-surface-container-lowest border-2 border-transparent focus:border-secondary-container rounded-2xl transition-all font-bold text-primary appearance-none">
                              <option>Launch Offer</option>
                              <option>Seasonal Sale</option>
                              <option>Community Discount</option>
                              <option>Early Bird</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enrollment Tiers */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pl-2">
                    <div className="w-2 h-8 bg-secondary-container rounded-full"></div>
                    <h3 className="font-headline text-2xl font-bold text-primary">Value-Added Tiers</h3>
                  </div>
                  <div className="grid gap-6">
                    {/* Standard Tier (Locked/Mandatory) */}
                    <div className="bg-surface-container-lowest/60 p-8 rounded-3xl flex items-center justify-between border-2 border-dashed border-surface-variant">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary/40">
                          <span className="material-symbols-outlined text-3xl">video_library</span>
                        </div>
                        <div>
                          <h4 className="font-headline font-bold text-primary/60">Standard Tier</h4>
                          <p className="text-sm text-slate-500 font-medium">Self-paced video access + PDF course notes</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Base Access</span>
                        <span className="text-primary/40 font-bold font-headline">KSh 0.00 extra</span>
                      </div>
                    </div>
                    {/* Premium Tier Toggle */}
                    <div className="bg-surface-container-lowest p-8 rounded-3xl border-2 border-secondary-container shadow-xl shadow-secondary-container/5 space-y-8 group transition-all hover:border-secondary">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-inner">
                            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-3">
                              <h4 className="font-headline font-bold text-primary text-xl tracking-tight">Premium Mentor Tier</h4>
                              <span className="text-[10px] bg-secondary-container text-on-secondary-container font-bold px-2 py-0.5 rounded uppercase tracking-tighter">Most Popular</span>
                            </div>
                            <p className="text-sm text-slate-500 font-medium mt-1">Certificate of Completion + 1-on-1 Mentor Support</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                          <div className="w-14 h-7 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-secondary"></div>
                        </label>
                      </div>
                      <div className="bg-surface p-6 rounded-2xl space-y-6">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-secondary text-sm mt-0.5">info</span>
                          <p className="text-sm text-slate-500 leading-relaxed">Setting a premium tier increases conversion by providing a high-value option for serious students who value certification and direct feedback.</p>
                        </div>
                        <div className="space-y-3">
                          <label className="block text-xs font-bold text-primary font-headline uppercase tracking-wider">Additional Premium Surcharge (KSh)</label>
                          <div className="relative max-w-xs">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary font-bold text-lg">+ KSh</span>
                            <input className="w-full pl-24 pr-6 py-5 bg-surface-container-lowest border-2 border-secondary-container/30 focus:border-secondary rounded-2xl transition-all font-bold text-xl text-primary" placeholder="5,000" type="number" />
                          </div>
                          <p className="text-[10px] text-slate-500 font-medium italic">This amount is added to the standard price. Total Premium Price: <span className="text-secondary font-bold">KSh 6,999</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Right: Strategy & Preview (40%) */}
              <aside className="xl:w-2/5 space-y-12">
                {/* Strategy Tips Box */}
                <div className="relative overflow-hidden group rounded-3xl">
                  {/* Editorial Background Decorative Elements */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl group-hover:bg-secondary-container/40 transition-colors"></div>
                  <div className="relative bg-primary-container p-10 text-white space-y-10 border border-white/5 shadow-2xl">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary-container text-2xl">menu_book</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary-container">The Modern Griot Series</span>
                      </div>
                      <h3 className="font-headline text-3xl font-extrabold leading-tight">Mastering Your Pricing Story</h3>
                    </div>
                    <div className="space-y-8">
                      <div className="flex gap-5 relative">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-headline font-bold text-secondary-container text-lg">01</div>
                        <div className="space-y-1">
                          <h4 className="font-headline font-bold text-lg text-white">Psychological Framing</h4>
                          <p className="text-sm leading-relaxed text-blue-100/80">Pricing at <span className="text-white font-bold">KSh 1,999</span> instead of KSh 2,000 creates a powerful subconscious "charm price" effect, making the investment feel more accessible.</p>
                        </div>
                      </div>
                      <div className="flex gap-5 relative">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-headline font-bold text-secondary-container text-lg">02</div>
                        <div className="space-y-1">
                          <h4 className="font-headline font-bold text-lg text-white">Local Benchmarking</h4>
                          <p className="text-sm leading-relaxed text-blue-100/80">Top-tier African digital courses currently average between <span className="text-white font-bold">KSh 2,500 and KSh 7,500</span>. Aligning here builds immediate market credibility.</p>
                        </div>
                      </div>
                      <div className="flex gap-5 relative">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-headline font-bold text-secondary-container text-lg">03</div>
                        <div className="space-y-1">
                          <h4 className="font-headline font-bold text-lg text-white">The Decoy Strategy</h4>
                          <p className="text-sm leading-relaxed text-blue-100/80">By offering a <span className="text-white font-bold">Premium Tier</span> with clear additional value, you make your Standard option appear as a "no-brainer" bargain for price-sensitive learners.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/10">
                      <a className="inline-flex items-center gap-2 text-xs font-bold text-secondary-container hover:text-white transition-colors group/link" href="#">
                        READ THE FULL PRICING MANIFESTO
                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_right_alt</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Catalog Preview Card */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-2">
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Marketplace Live Preview</h4>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-secondary uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                      Live Update
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 border border-surface-variant group transition-all hover:-translate-y-2">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <img alt="Course Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-lg">Tech & Design</span>
                      </div>
                      <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white/90">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-xs font-bold">4.9 (New Release)</span>
                      </div>
                    </div>
                    <div className="p-8 space-y-6">
                      <h5 className="font-headline font-extrabold text-primary text-2xl leading-[1.2]">Mastering UI/UX for the African Digital Market</h5>
                      <div className="flex items-center justify-between pt-6 border-t border-surface-variant">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full ring-2 ring-white overflow-hidden shadow-sm">
                            <img alt="Instructor" src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800" />
                          </div>
                          <div className="space-y-0.5">
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Instructor</p>
                            <p className="text-xs font-bold text-primary">Fredrick</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="block text-[10px] text-slate-400 font-bold line-through tracking-tighter">KSh 2,500</span>
                          <div className="flex items-baseline justify-end gap-1">
                            <span className="text-xs font-bold text-secondary uppercase">KSh</span>
                            <span className="text-3xl font-headline font-extrabold text-secondary tracking-tight">1,999</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        )}
        
        {currentStep === 4 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-primary-container leading-tight tracking-tight">Ready to Share Your Knowledge?</h1>
              <p className="text-on-surface-variant mt-4 text-lg max-w-2xl">Review your course details one last time before making it live to students across Africa.</p>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Settings */}
              <div className="lg:col-span-8 space-y-12">
                {/* Section 1: Final Course Review */}
                <section className="bg-surface-container-low rounded-3xl p-8 overflow-hidden relative">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-56 h-40 shrink-0 rounded-2xl overflow-hidden shadow-sm">
                      <img alt="Strategic Business Growth" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlV1HmnvK0jYbVjW2_doaDPJ-gkROGICGOkcjJXQ-DpNtAqT7ilHFQLswcWqLK3ErtwrSVc4Al1FDO7hTUhW0JrDY_HmvU8kCKe-1RNSht7yoCIiHWPF2lWoApx5JcDFPOiSldzlhp5ZzWIn_ft6u-xQA9R9w32H3JaAfseSfzIBf68T0tAymB-lDl63gF4mLbk9QjH7COj-s8GAPxcU9sfsorSK1xwYFVmcLby_zumISJWSKar0ifj-wI_aHfOMT_uoMwwTyZlg"/>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold text-secondary uppercase tracking-widest">• Business</span>
                      </div>
                      <h2 className="text-2xl font-bold text-primary-container">Strategic Business Growth</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] text-primary-container font-bold uppercase opacity-60">Price</p>
                          <p className="text-xl font-bold text-on-surface-variant">KSh 4,500</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-primary-container font-bold uppercase opacity-60">Status</p>
                          <p className="text-xl font-bold text-on-surface-variant">Draft</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2: Visibility Settings */}
                <section className="space-y-6">
                  <h3 className="text-xl font-bold text-primary-container flex items-center gap-2">
                    <span className="material-symbols-outlined">visibility</span>
                    Visibility Settings
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="group cursor-pointer">
                      <input 
                        checked={visibility === 'public'} 
                        onChange={() => setVisibility('public')}
                        className="hidden peer" 
                        name="visibility" 
                        type="radio"
                      />
                      <div className="p-6 rounded-2xl border-2 border-transparent bg-surface-container-low peer-checked:bg-white peer-checked:border-secondary-container transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <span className="material-symbols-outlined text-primary-container">public</span>
                          <div className="w-5 h-5 rounded-full border-2 border-outline peer-checked:bg-secondary-container peer-checked:border-secondary-container flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white hidden peer-checked:block"></div>
                          </div>
                        </div>
                        <p className="font-bold text-primary-container">Public</p>
                        <p className="text-xs text-on-surface-variant mt-1">Listed on the SkillsZone marketplace for everyone.</p>
                      </div>
                    </label>
                    <label className="group cursor-pointer">
                      <input 
                        checked={visibility === 'unlisted'} 
                        onChange={() => setVisibility('unlisted')}
                        className="hidden peer" 
                        name="visibility" 
                        type="radio"
                      />
                      <div className="p-6 rounded-2xl border-2 border-transparent bg-surface-container-low peer-checked:bg-white peer-checked:border-secondary-container transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <span className="material-symbols-outlined text-primary-container">link</span>
                          <div className="w-5 h-5 rounded-full border-2 border-outline peer-checked:bg-secondary-container peer-checked:border-secondary-container flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white hidden peer-checked:block"></div>
                          </div>
                        </div>
                        <p className="font-bold text-primary-container">Unlisted</p>
                        <p className="text-xs text-on-surface-variant mt-1">Only accessible via a direct private link.</p>
                      </div>
                    </label>
                  </div>
                </section>

                {/* Section 3: Scheduling */}
                <section className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary-container flex items-center gap-2">
                      <span className="material-symbols-outlined">calendar_today</span>
                      Publishing Schedule
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-on-surface-variant uppercase">Publish Immediately</span>
                      <button 
                        onClick={() => setPublishImmediately(!publishImmediately)}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${publishImmediately ? 'bg-secondary-container' : 'bg-surface-container-highest'}`}
                      >
                        <span className={`${publishImmediately ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}></span>
                      </button>
                    </div>
                  </div>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity ${publishImmediately ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary-container uppercase ml-1">Date (MM/DD/YYYY)</label>
                      <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-secondary-container transition-all" placeholder="10 / 24 / 2024" type="text"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary-container uppercase ml-1">Time (HH:MM AM/PM)</label>
                      <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-secondary-container transition-all" placeholder="09:00 AM" type="text"/>
                    </div>
                  </div>
                </section>

                {/* Action Footer */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-surface-container-highest">
                  <button 
                    onClick={() => navigate('/instructor-dashboard')}
                    className="w-full md:w-[280px] h-[52px] flex items-center justify-center bg-transparent border-2 border-primary-container text-primary-container rounded-xl font-headline font-bold text-sm uppercase tracking-widest hover:bg-primary-container hover:text-white transition-all"
                  >
                    Save as Draft
                  </button>
                </div>
              </div>

              {/* Right Column: Sidebar Guidance */}
              <div className="lg:col-span-4 sticky top-12">
                <div className="bg-surface-container-low rounded-3xl p-8 space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-primary-container mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">assignment_turned_in</span>
                      Publishing Checklist
                    </h4>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-primary-container text-xs font-bold">check</span>
                        </div>
                        <div>
                          <p className="font-bold text-on-surface text-sm">All lessons uploaded</p>
                          <p className="text-xs text-on-surface-variant mt-1">12 modules ready for playback.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-primary-container text-xs font-bold">check</span>
                        </div>
                        <div>
                          <p className="font-bold text-on-surface text-sm">Pricing set</p>
                          <p className="text-xs text-on-surface-variant mt-1">Currency: KSh. No discounts applied.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-primary-container text-xs font-bold">check</span>
                        </div>
                        <div>
                          <p className="font-bold text-on-surface text-sm">Course description complete</p>
                          <p className="text-xs text-on-surface-variant mt-1">SEO tags and summary optimized.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border-l-4 border-secondary-container">
                    <p className="text-xs font-bold text-primary-container uppercase mb-2">Instructor Tip</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed">Courses published on Tuesdays tend to get 20% more initial engagement. Consider scheduling for the next upcoming Tuesday!</p>
                  </div>
                  <div className="pt-4">
                    <button className="text-primary-container font-bold text-xs flex items-center gap-2 hover:translate-x-1 transition-transform">
                      <span className="material-symbols-outlined text-sm">help</span>
                      Need help with publishing?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4 border-t border-surface-container-highest">
          <button 
            onClick={handleBack}
            className="w-full md:w-[280px] h-[52px] flex items-center justify-center space-x-2 border-2 border-[#002366] text-[#002366] rounded-xl font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#002366] hover:text-white transition-all"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Back</span>
          </button>
          {currentStep < 4 ? (
            <button 
              onClick={handleNext}
              className="w-full md:w-[280px] h-[52px] flex items-center justify-center bg-[#FFBF00] text-[#002366] rounded-xl font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#D48806] transition-all ml-auto"
            >
              Save & Continue
            </button>
          ) : (
            <button 
              onClick={() => navigate('/course-published-success')}
              className="w-full md:w-[280px] h-[52px] flex items-center justify-center bg-[#FFBF00] text-[#002366] rounded-xl font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#D48806] transition-all ml-auto"
            >
              Publish Course
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
