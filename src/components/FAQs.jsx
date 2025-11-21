const faqs = [
  {
    q: "How long does it take to find a home?",
    a: "Most clients secure a rental within 2–6 weeks depending on budget, seasonality and flexibility.",
  },
  {
    q: "Can I register at the address?",
    a: "We only propose properties that allow municipal registration and fit your visa status.",
  },
  {
    q: "Do you help with the 30% ruling?",
    a: "Yes. We pre-check eligibility and coordinate the application with your employer and tax advisor.",
  },
  {
    q: "Is school enrollment included?",
    a: "We can include an education track: shortlist schools, arrange tours, and manage enrollment timelines.",
  },
  {
    q: "What are your fees?",
    a: "Transparent, fixed-fee packages with no hidden costs. Get a tailored quote via the form below.",
  },
];

export default function FAQs() {
  return (
    <section id="faqs" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">Frequently asked</h2>
        <div className="mt-12 divide-y divide-slate-800 rounded-2xl border border-slate-800 overflow-hidden">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-slate-900/50 open:bg-slate-900/70">
              <summary className="cursor-pointer list-none px-6 py-5 text-white/90 font-medium flex items-center justify-between">
                <span>{f.q}</span>
                <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300/90 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
