import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <FAQs />
      <Contact />
      <footer className="py-10 border-t border-slate-800 text-center text-slate-400">© {new Date().getFullYear()} Amsterdam Relocation — All rights reserved</footer>
    </div>
  );
}

export default App;
