import { Link } from "react-router-dom";
import { Projects } from "../../assets/Projects";
import GoTo from "../shared/Goto";
import { SectionHeading } from "../shared/SectionHeading";

export default function ProjectPreview() {
	const ProjectsPreview = Projects.slice(0, 3);

	return (
		<section className="relative z-[1112] text-white w-full text-center px-4 py-12 overflow-hidden">
			<SectionHeading>Projects</SectionHeading>

			<ul className="flex justify-center items-stretch gap-6 max-w-7xl mx-auto my-12">
				{ProjectsPreview.map((project) => (
					<li key={project.id} className="flex-1 max-w-sm">
						<Link
							className="group relative block h-full p-4 transition-all duration-200 hover:scale-110 cursor-pointer rounded-lg border border-[#3a4578]/30 hover:border-[#3a4578]/60"
							to="/portfolio/projects"
							style={{
								background:
									"repeating-radial-gradient(at 50% 50%, transparent 0%, #c2ccff22 2px, transparent 4px)",
							}}
						>
							{/* Hover overlay */}
							<div className="absolute inset-0 bg-[#ffffff11] scale-0 group-hover:scale-100 transition-transform duration-100 rounded-lg"></div>

							<div className="relative z-10 text-center h-full flex flex-col justify-center">
								<h3 className="text-lg font-semibold mb-3 text-transparent bg-gradient-to-b from-[#d8ecf8] to-[#98c0ef] bg-clip-text drop-shadow-[0_2px_16px_rgba(174,207,242,0.24)]">
									{project.title}
								</h3>
								<p className="text-[#d8ecf8be] text-xs font-normal leading-relaxed">
									{project.description}
								</p>
							</div>
						</Link>
					</li>
				))}
			</ul>

			<GoTo to="/portfolio/projects">View All Projects...</GoTo>
		</section>
	);
}
