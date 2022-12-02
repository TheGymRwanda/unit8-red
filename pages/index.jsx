import Projects from "../components/sections/homepage/Projects";
import About from "../components/sections/homepage/About";
import Expertise from "../components/sections/homepage/Expertise";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/homepage/Hero";
import Blog from "../components/sections/homepage/Blog";
// import Gallery from "../components/sections/homepage/Gallery";
import dynamic from "next/dynamic";

const Gallery = dynamic(
  () => import("../components/sections/homepage/Gallery"),
  { ssr: false }
);
export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Expertise />
      <About />
      <Gallery />
      <Blog />
      <Footer />
    </main>
  );
}
