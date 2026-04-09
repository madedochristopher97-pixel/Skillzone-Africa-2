import React from 'react';
import { Building2, PlusCircle, CreditCard } from 'lucide-react';

export default function InstructorSettings() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="font-headline font-black text-3xl text-primary tracking-tighter">Settings</h2>
        <p className="text-slate-500 font-body mt-2">Manage your account preferences and profile details.</p>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl p-8 space-y-8">
        <div>
          <h3 className="font-headline font-bold text-lg text-primary mb-4">Profile Information</h3>
          <div className="flex items-center gap-6 mb-6">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover border-4 border-surface-container-low"
            />
            <div>
              <button className="bg-surface-container-low text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-surface-variant transition-colors mb-2 block">
                Change Picture
              </button>
              <p className="text-xs text-slate-500">JPG, GIF or PNG. Max size of 800K</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-primary mb-2">Display Name</label>
              <input type="text" defaultValue="Fredrick" className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary-fixed transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-primary mb-2">Professional Title</label>
              <input type="text" defaultValue="Expert Mentor" className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary-fixed transition-all" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-primary mb-2">Bio</label>
              <textarea rows={4} defaultValue="Passionate educator with 10+ years of experience in software development and design." className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary-fixed transition-all"></textarea>
            </div>
          </div>
        </div>

        <hr className="border-surface-variant" />

        <div>
          <h3 className="font-headline font-bold text-lg text-primary mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-primary focus:ring-primary border-slate-300" />
              <span className="text-sm text-slate-700">Email me when a student enrolls in my course</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-primary focus:ring-primary border-slate-300" />
              <span className="text-sm text-slate-700">Email me when a student sends a direct message</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded text-primary focus:ring-primary border-slate-300" />
              <span className="text-sm text-slate-700">Send weekly digest of earnings and analytics</span>
            </label>
          </div>
        </div>

        <hr className="border-surface-variant" />

        <div>
           <h3 className="font-headline font-bold text-lg text-primary mb-4 flex items-center gap-2">
             <CreditCard size={20} />
             Payment Method
           </h3>
           <p className="text-sm text-slate-500 mb-6">Configure how you want to receive your course earnings.</p>
           <div className="space-y-4">
              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-primary text-sm font-headline">Bank Transfer</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full tracking-wider uppercase">Default</span>
                    </div>
                    <p className="text-sm font-bold text-slate-700 mt-1">Equity Bank Kenya</p>
                    <p className="text-xs text-slate-500">Account ending in 1234</p>
                  </div>
                </div>
                <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl font-bold text-xs hover:bg-slate-50 hover:text-primary transition-colors focus:ring-2 focus:ring-primary/20">
                  Edit Details
                </button>
              </div>
              
              <button className="w-full py-4 border-2 border-dashed border-slate-300 rounded-2xl text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                <PlusCircle size={18} />
                Add New Payment Method
              </button>
           </div>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-surface-variant mt-8">
          <button className="px-6 py-3 text-primary font-bold text-sm hover:bg-surface-container-low rounded-xl transition-colors">
            Cancel
          </button>
          <button className="bg-primary text-white px-8 py-3 rounded-xl font-headline font-bold text-sm hover:opacity-90 transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
