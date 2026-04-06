import { Bell, Lock, Globe, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearnerSettings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold text-[#00113a]">Settings</h1>
        <p className="text-[#6B7280]">Manage your account preferences.</p>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-[#c5c6d2]/20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[600px]">
          {/* Settings Nav */}
          <div className="bg-[#f6f3ee] p-6 border-r border-[#c5c6d2]/20">
            <nav className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#00113a] text-white font-semibold transition-colors">
                <Bell size={18} />
                Notifications
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#444650] hover:bg-white font-semibold transition-colors">
                <Lock size={18} />
                Security
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#444650] hover:bg-white font-semibold transition-colors">
                <CreditCard size={18} />
                Billing
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#444650] hover:bg-white font-semibold transition-colors">
                <Globe size={18} />
                Preferences
              </button>
            </nav>
          </div>

          {/* Settings Content */}
          <div className="md:col-span-3 p-8">
            <h2 className="font-headline text-2xl font-bold text-[#00113a] mb-6">Notification Preferences</h2>
            
            <div className="space-y-8">
              {/* Email Notifications */}
              <div>
                <h3 className="font-bold text-lg text-[#00113a] mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-[#c5c6d2] text-[#00113a] focus:ring-[#00113a]" defaultChecked />
                    <div>
                      <p className="font-semibold text-[#00113a]">Course Updates</p>
                      <p className="text-sm text-[#6B7280]">Announcements and updates from your instructors.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-[#c5c6d2] text-[#00113a] focus:ring-[#00113a]" defaultChecked />
                    <div>
                      <p className="font-semibold text-[#00113a]">Promotions & Recommendations</p>
                      <p className="text-sm text-[#6B7280]">New courses and personalized recommendations.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-[#c5c6d2] text-[#00113a] focus:ring-[#00113a]" />
                    <div>
                      <p className="font-semibold text-[#00113a]">SkillsZone Newsletter</p>
                      <p className="text-sm text-[#6B7280]">Weekly insights and stories from the community.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Push Notifications */}
              <div className="pt-8 border-t border-[#c5c6d2]/20">
                <h3 className="font-bold text-lg text-[#00113a] mb-4">Push Notifications</h3>
                <div className="space-y-4">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-[#c5c6d2] text-[#00113a] focus:ring-[#00113a]" defaultChecked />
                    <div>
                      <p className="font-semibold text-[#00113a]">Learning Reminders</p>
                      <p className="text-sm text-[#6B7280]">Reminders to keep up with your daily learning goals.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-[#c5c6d2] text-[#00113a] focus:ring-[#00113a]" defaultChecked />
                    <div>
                      <p className="font-semibold text-[#00113a]">Direct Messages</p>
                      <p className="text-sm text-[#6B7280]">Messages from instructors or peers.</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="pt-8 flex justify-end">
                <Link to="/learner-dashboard" className="bg-[#00113a] text-white px-8 py-3 rounded-full font-bold hover:bg-[#002366] transition-colors inline-block">
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
