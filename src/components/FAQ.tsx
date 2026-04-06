import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<'learners' | 'instructors'>('learners');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const learnersFaqs = [
    {
      question: "What is SkillZone Africa?",
      answer: "SkillZone Africa is an online learning platform built for African learners, offering courses in high-demand fields like technology, business, and creative arts, taught by industry experts with deep regional knowledge."
    },
    {
      question: "How do I get started?",
      answer: "Simply create a free account, browse the course catalog, and enroll in the subjects that interest you. Some courses are self-paced, while others follow a cohort-based live schedule."
    },
    {
      question: "How much does it cost to learn on SkillZone Africa?",
      answer: "Course prices vary by instructor and complexity. We offer a mix of free introductory courses, affordable single-skill workshops, and premium professional bootcamps with flexible payment plans."
    },
    {
      question: "Can I access courses on my phone?",
      answer: "Yes — SkillZone Africa is fully accessible on mobile devices. Our platform is optimized for mobile-first experiences, ensuring you can learn anytime, anywhere, even with varying internet speeds."
    },
    {
      question: "What happens after I complete a course?",
      answer: "You'll receive a certificate of completion recognized by our regional partners. You also gain lifetime access to course materials and our alumni network for networking and job opportunities."
    }
  ];

  const instructorsFaqs = [
    {
      question: "Who can become an instructor on SkillZone Africa?",
      answer: "Anyone with verified knowledge or expertise in a specific field can apply. We look for practitioners who are passionate about sharing their skills and helping others grow in the African context."
    },
    {
      question: "How do I earn money as an instructor?",
      answer: "You set your own course price. You earn a significant percentage of every enrollment. We also provide opportunities for paid private mentorship sessions and corporate training engagements."
    },
    {
      question: "Is it free to list my course?",
      answer: "Yes — listing your course on SkillZone Africa is completely free. We only take a service fee once you start making sales, which covers platform maintenance and marketing efforts."
    },
    {
      question: "How do I get paid?",
      answer: "Earnings are processed and paid out on a regular monthly schedule via bank transfer, mobile money, or other localized payment methods available in your country."
    },
    {
      question: "Do I need technical skills to upload my course?",
      answer: "Not at all. Our instructor dashboard is designed to be simple and intuitive. We provide guides and a support team to help you through the content creation and upload process."
    }
  ];

  const currentFaqs = activeTab === 'learners' ? learnersFaqs : instructorsFaqs;

  return (
    <section className="py-24 bg-[#F7F4EF]">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-black text-[#002366] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg font-body text-[#D48806] font-medium">Everything you need to know about SkillZone Africa</p>
        </div>
        {/* Tabs */}
        <div className="flex justify-center mb-12 gap-4">
          <button 
            className={`px-8 py-3 rounded-full font-headline font-bold transition-all border-2 ${activeTab === 'learners' ? 'bg-white border-[#FFBF00] text-[#002366] shadow-sm' : 'border-transparent bg-transparent text-[#002366] hover:bg-white/50'}`}
            onClick={() => { setActiveTab('learners'); setOpenFaq(null); }}
          >
            For Learners
          </button>
          <button 
            className={`px-8 py-3 rounded-full font-headline font-bold transition-all border-2 ${activeTab === 'instructors' ? 'bg-white border-[#FFBF00] text-[#002366] shadow-sm' : 'border-transparent bg-transparent text-[#002366] hover:bg-white/50'}`}
            onClick={() => { setActiveTab('instructors'); setOpenFaq(null); }}
          >
            For Instructors
          </button>
        </div>
        
        {/* FAQ Content */}
        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <div key={index} className="group bg-white/50 rounded-2xl px-6 border-b border-[#002366]/5 overflow-hidden">
              <button 
                className="w-full py-6 flex justify-between items-center text-left" 
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-headline font-bold text-[#002366]">{faq.question}</span>
                {openFaq === index ? (
                  <Minus className="text-[#D48806] shrink-0" />
                ) : (
                  <Plus className="text-[#D48806] shrink-0" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <p className="text-[#444650] font-body leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
