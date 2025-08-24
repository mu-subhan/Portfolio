import Experience from "@/component/Experience";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Projects from "../component/Project";
import Skills from "../component/Skills";


export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer/>
    </main>
  );
}