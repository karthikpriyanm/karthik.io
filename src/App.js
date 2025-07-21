import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";


export default function App() {
  const [activePage, setActivePage] = useState("Home");
  import("./index")
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Header />
      <div className="flex flex-1">
        <SideNav activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-1 p-10 overflow-y-auto">
          {activePage === "Home" && <Home />}
          {activePage === "Contact" && <Contact />}
          {activePage === "Resume" && <Resume />}
          {activePage === "Skills" && <Skills />}
          {activePage === "Projects" && <Projects />}
          {activePage === "About" && <About />}
        </main>
      </div>
      <Footer />
    </div>
  );
}