import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearnerProfile() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold text-[#00113a]">My Profile</h1>
        <p className="text-[#6B7280]">Manage your personal information.</p>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-[#c5c6d2]/20 overflow-hidden">
        {/* Cover Photo & Avatar */}
        <div className="h-32 bg-[#00113a] relative">
          <div className="absolute -bottom-12 left-8 flex items-end gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" 
                  alt="Aisha" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#ffbf00] rounded-full flex items-center justify-center text-[#6d5000] hover:bg-[#e6ac00] transition-colors border-2 border-white">
                <Camera size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-16 p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="font-headline text-2xl font-bold text-[#00113a]">Aisha Bello</h2>
              <p className="text-[#6B7280]">Data Science Enthusiast</p>
            </div>
            <Link to="/learner-dashboard/settings" className="px-6 py-2 bg-[#f6f3ee] text-[#00113a] rounded-full font-bold text-sm hover:bg-[#e5e2dd] transition-colors inline-block">
              Edit Profile
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-[#00113a] border-b border-[#c5c6d2]/20 pb-2">Personal Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f6f3ee] flex items-center justify-center text-[#444650]">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">Full Name</p>
                    <p className="font-medium text-[#00113a]">Aisha Bello</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f6f3ee] flex items-center justify-center text-[#444650]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">Email Address</p>
                    <p className="font-medium text-[#00113a]">aisha.bello@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f6f3ee] flex items-center justify-center text-[#444650]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">Phone Number</p>
                    <p className="font-medium text-[#00113a]">+234 801 234 5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f6f3ee] flex items-center justify-center text-[#444650]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">Location</p>
                    <p className="font-medium text-[#00113a]">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-lg text-[#00113a] border-b border-[#c5c6d2]/20 pb-2">Bio</h3>
              <p className="text-[#444650] leading-relaxed">
                Passionate about leveraging data to solve real-world problems in Africa. Currently upskilling in Data Science and Machine Learning. Looking forward to connecting with other tech enthusiasts!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
