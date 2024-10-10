import CanvasBG from "../components/CanvasBG";
import Contact from "../components/LandingPage/Contact";
import Content from "../components/LandingPage/Content";
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import ProjectPreview from "../components/LandingPage/ProjectPreview";
import Skills from "../components/LandingPage/Skills";
export default function LandingPage() {
  scrollTo(0, 0);
  return (
    <>
      <CanvasBG />
      <Header />
      <Hero />
      <CanvasBG />
      <Content />
      <CanvasBG />
      <ProjectPreview />
      <CanvasBG />
      <Skills />
      <Contact />
    </>
  );
}
