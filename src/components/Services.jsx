const services = [
  {
    title: "Home Search",
    items: [
      "Market overview and area guide",
      "Daily property shortlists",
      "Viewings arranged and attended",
      "Offer strategy and negotiation",
      "Lease review and registration checks",
    ],
  },
  {
    title: "Legal & Admin",
    items: [
      "BSN appointment booking and prep",
      "30% ruling pre-check and application",
      "DigiD guidance and health insurance",
      "Bank account and liability insurance",
    ],
  },
  {
    title: "Set-up & Settle",
    items: [
      "Check-in, inspection and key handover",
      "Utilities: energy, water, internet",
      "Furniture rental and delivery",
      "School search and enrollment",
      "On-call support for 30 days",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What we do</h2>
          <p className="mt-4 text-slate-300/80">Pick a package or mix-and-match what you need.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-slate-300/80">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
