export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-600/10 rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Seamless Relocation to Amsterdam
            </h1>
            <p className="mt-6 text-lg text-slate-200/90 leading-relaxed">
              We handle every step: home viewings, BSN registration, 30% ruling, schools, utilities and more. All with local experts who speak your language.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#process" className="inline-flex items-center rounded-full bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 transition-colors">
                See the process
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-white/10 text-white px-6 py-3 hover:bg-white/20 border border-white/10">
                Get a quote
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-300/70">Average move-in time: 2–6 weeks, depending on preference and availability.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 p-2">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
