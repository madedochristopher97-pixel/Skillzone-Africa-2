import { Award, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearnerCertificates() {
  const certificates = [
    {
      id: 1,
      title: 'Effective Communication',
      date: 'October 15, 2024',
      issuer: 'SkillsZone Africa',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Personal Finance 101',
      date: 'September 28, 2024',
      issuer: 'SkillsZone Africa',
      image: 'https://images.pexels.com/photos/5466785/pexels-photo-5466785.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold text-[#00113a]">My Certificates</h1>
        <p className="text-[#6B7280]">View and share your earned certificates.</p>
      </div>

      {certificates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#c5c6d2]/20 hover:shadow-md transition-all group">
              <div className="h-48 relative bg-[#f6f3ee] p-6 flex flex-col items-center justify-center text-center border-b border-[#c5c6d2]/20">
                <Award className="w-16 h-16 text-[#ffbf00] mb-4" />
                <h3 className="font-headline font-bold text-lg text-[#00113a] leading-tight">{cert.title}</h3>
                <p className="text-xs text-[#6B7280] mt-2">Issued by {cert.issuer}</p>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#444650] mb-6">Earned on {cert.date}</p>
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#00113a] text-white font-bold text-sm hover:bg-[#002366] transition-colors">
                    <Download size={16} />
                    Download
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-[#f6f3ee] text-[#00113a] font-bold text-sm hover:bg-[#f6f3ee] transition-colors">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[2rem] p-12 text-center border border-[#c5c6d2]/20">
          <div className="w-20 h-20 bg-[#f6f3ee] rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-10 h-10 text-[#c5c6d2]" />
          </div>
          <h3 className="font-headline text-xl font-bold text-[#00113a] mb-2">No certificates yet</h3>
          <p className="text-[#6B7280] max-w-md mx-auto mb-8">Complete courses to earn certificates and showcase your new skills to the world.</p>
          <Link to="/learner-dashboard/explore" className="bg-[#00113a] text-white px-8 py-3 rounded-full font-bold hover:bg-[#002366] transition-colors inline-block">
            Explore Courses
          </Link>
        </div>
      )}
    </div>
  );
}
