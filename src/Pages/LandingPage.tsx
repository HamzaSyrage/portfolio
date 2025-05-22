import CanvasBG from "../components/shared/CanvasBG";
import Contact from "../components/LandingPage/Contact";
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import ProjectPreview from "../components/LandingPage/ProjectPreview";
import Skills from "../components/LandingPage/Skills";
import About from "../components/LandingPage/About";
// import { Analytics } from "@vercel/analytics/react";
export default function LandingPage() {
	scrollTo(0, 0);
	return (
		<>
			<CanvasBG />
			<Header />
			{/* <Analytics /> */}
			<Hero />
			<CanvasBG />
			<About />
			<CanvasBG />
			<ProjectPreview />
			<CanvasBG />
			<Skills />
			<Contact />
		</>
	);
}
