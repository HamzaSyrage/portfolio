import { AccentLines } from "./AccentLines";
import { HeroHeading } from "./HeroHeading";
import { Mountains } from "./Mountains";
import { SectionHeading } from "../shared/SectionHeading";

export default function Hero() {
	return (
		<div className="relative h-screen flex flex-col items-center justify-center overflow-hidden z-[-1]">
			<AccentLines />
			<SectionHeading>Portfolio</SectionHeading>
			<HeroHeading />
			<Mountains />
			<div className="h-[40rem] pointer-events-none" />
		</div>
	);
}
