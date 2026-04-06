export default function JourneySteps() {
  const steps = [
    { id: 1, title: 'Discover', desc: 'Browse thousands of specialized courses across multiple fields.', color: 'bg-[#00113a]', textColor: 'text-white' },
    { id: 2, title: 'Enroll', desc: 'Quick checkout and instant access to your learning materials.', color: 'bg-[#ffbf00]', textColor: 'text-[#6d5000]', offset: true },
    { id: 3, title: 'Practice', desc: 'Interactive labs, quizzes, and direct projects to build your portfolio.', color: 'bg-[#00113a]', textColor: 'text-white' },
    { id: 4, title: 'Achieve', desc: 'Earn verified certificates and showcase your skills to employers.', color: 'bg-[#ffbf00]', textColor: 'text-[#6d5000]', offset: true },
  ];

  return (
    <section className="py-24 px-8 bg-[#e5e2dd]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-4xl text-[#00113a] mb-4">Start your journey today</h2>
          <p className="text-[#444650] text-lg">Four simple steps to mastery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.id} className={`flex flex-col items-center text-center space-y-4 ${step.offset ? 'md:mt-12' : ''}`}>
              <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center ${step.textColor} text-3xl font-black shadow-xl`}>
                {step.id}
              </div>
              <h4 className="font-bold text-xl text-[#00113a]">{step.title}</h4>
              <p className="text-[#444650] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
