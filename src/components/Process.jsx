const steps = [
  {
    id: 1,
    title: "Discovery Call",
    desc:
      "We learn about your timeline, budget, family situation, and preferences (neighborhoods, commute, schools, pets). You get a clear roadmap and a fixed-fee quote.",
  },
  {
    id: 2,
    title: "Neighborhood Brief",
    desc:
      "We craft a tailored brief with recommended areas like De Pijp, Oud-West, Zuid, or Amstelveen with pros/cons, rent levels, commute times and schools.",
  },
  {
    id: 3,
    title: "Home Viewings",
    desc:
      "We shortlist properties and arrange virtual or in-person viewings. We pre-screen for essentials: registration allowed, energy label, furnishings, pets.",
  },
  {
    id: 4,
    title: "Application & Contract",
    desc:
      "We prepare your dossier, negotiate terms, and review the lease. We check municipal registration and ensure the contract protects your interests.",
  },
  {
    id: 5,
    title: "Check-in & Utilities",
    desc:
      "We oversee key handover, inspection report, and set up energy, water, internet, and insurance. Optional: furniture packages and cleaning.",
  },
  {
    id: 6,
    title: "BSN Registration",
    desc:
      "We book your municipality appointment, prepare documents, and join you if desired. We also advise on DigiD, health insurance and bank accounts.",
  },
  {
    id: 7,
    title: "30% Ruling Guidance",
    desc:
      "We pre-qualify your eligibility, coordinate with your employer and tax advisor, and prepare your application to maximize approval chances.",
  },
  {
    id: 8,
    title: "Settling In",
    desc:
      "School enrollment guidance, GP registration, cycling routes, and local tips. We are on-call for your first 30 days for any questions.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">How it works</h2>
          <p className="mt-4 text-slate-300/80">
            A streamlined, end-to-end service designed for internationals relocating to Amsterdam.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.id} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-blue-500/40 transition-colors">
              <div className="text-sm text-blue-300/80">Step {s.id}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300/80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
