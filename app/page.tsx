import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DoraemonAssistant from "./components/DoraemonAssistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060608] text-gray-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Content Sections in Exact Order */}
      <div className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Contact */}
        <Contact />
      </div>

      {/* 6. Footer */}
      <Footer />

      {/* Interactive Doraemon Assistant */}
      <DoraemonAssistant />
    </main>
  );
}
