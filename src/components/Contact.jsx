import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">Get your tailored plan</h2>
          <p className="mt-2 text-slate-300/80">Tell us about your move and we’ll reply within 24 hours.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Full name" className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="timeline" placeholder="Timeline (e.g., mid-Feb)" className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="budget" placeholder="Monthly budget (€)" className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <textarea name="message" rows="4" placeholder="Tell us about your needs (family, pets, schools, office location, etc.)" className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" disabled={status==="loading"} className="inline-flex items-center justify-center rounded-full bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 disabled:opacity-60">
              {status === "loading" ? "Sending..." : "Request a quote"}
            </button>
            {status === "success" && <p className="text-green-400">Thanks! We’ll be in touch shortly.</p>}
            {status === "error" && <p className="text-red-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
