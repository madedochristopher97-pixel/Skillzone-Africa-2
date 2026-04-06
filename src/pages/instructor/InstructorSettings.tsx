import React from 'react';

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

        <div className="flex justify-end gap-4 pt-4">
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
