'use client'

const cities = ['Yiwu', 'Shenzhen', 'Guangzhou', 'Ningbo', 'Dongguan', 'Hangzhou']
const repeated = [...cities, ...cities, ...cities, ...cities]

export default function CityMarquee() {
  return (
    <div className="w-full overflow-hidden bg-deep-navy py-5 my-0">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((city, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-6 text-white/70 font-display font-semibold text-lg uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan shrink-0" />
            {city}
          </span>
        ))}
      </div>
    </div>
  )
}
