import Projects from "../components/sections/homepage/Projects";
import Expertise from "../components/sections/homepage/Expertise";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/homepage/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Expertise />
      <Footer />
    </main>
  );
}
