import { SkillsList } from "../../assets/skills";
import { SectionHeading } from "../shared/SectionHeading";

export default function Skills() {
	return (
		<section className="relative z-[1112] text-white w-full text-center px-4 py-12 overflow-hidden">
			<SectionHeading>Skills</SectionHeading>

			<ul className="list-none flex flex-wrap gap-4 justify-center mt-12">
				{SkillsList.length > 0 &&
					SkillsList.map((skill, index) => (
						<li
							key={index}
							className="text-[#d8ecf8] px-6 py-6 rounded-2xl brightness-75 uppercase text-sm font-medium border-2 border-[#c2ccff] bg-[#121521]"
							style={{
								background:
									"repeating-radial-gradient(at 50% 50%, transparent 0%, #c2ccff22 2px, transparent 4px)",
								boxShadow:
									"-1em -0.2em 0.4em -1.1em #c2ccff, inset 0em 0em 0em 2px #c2ccff, inset 0.2em 0.3em 0.2em -0.2em #c2ccff, inset -1.2em 2.3em 2em -0.5em #d4e6ff2f",
							}}
						>
							{skill}
						</li>
					))}
			</ul>
		</section>
	);
}
