export default function Stats() {
  const stats = [
    { label: 'Learners', value: '10,000+' },
    { label: 'Instructors', value: '500+' },
    { label: 'Countries', value: '8' },
    { label: 'Courses', value: '1,000+' },
  ];

  return (
    <section className="relative bg-[#00113a] py-16 px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/Patterns.jfif')] bg-repeat bg-[length:300px] mix-blend-plus-lighter pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="font-headline font-black text-4xl text-[#ffbf00] mb-2">{stat.value}</div>
            <div className="text-[#758dd5] font-medium uppercase tracking-widest text-xs">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
