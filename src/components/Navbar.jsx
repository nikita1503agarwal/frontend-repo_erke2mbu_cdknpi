import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#process", label: "Process" },
    { href: "#services", label: "Services" },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-tight text-lg">
            Amsterdam Relocation
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-200/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors">
              Get Started
            </a>
          </nav>

          <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-200/90 hover:text-white" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
