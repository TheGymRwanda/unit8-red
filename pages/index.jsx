import About from "../components/sections/homepage/About";
import Expertise from "../components/sections/homepage/Expertise";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/homepage/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Expertise />
      <About />
      <Footer />
    </main>
  );
}
