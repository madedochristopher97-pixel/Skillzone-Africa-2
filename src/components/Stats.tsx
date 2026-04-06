export default function Stats() {
  const stats = [
    { label: 'Learners', value: '10,000+' },
    { label: 'Instructors', value: '500+' },
    { label: 'Countries', value: '8' },
    { label: 'Courses', value: '1,000+' },
  ];

  return (
    <section className="bg-[#00113a] py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
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
