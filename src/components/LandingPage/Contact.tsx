import ContactEmail from "../ContactEmail";
import ContactGithub from "../ContactGithub";
import ContactLinkedin from "../ContactLinkedin";
import ContactTel from "../ContactTel";
import { SectionHeading } from "../shared/SectionHeading";

export default function Contact() {
	const contacts = [ContactEmail, ContactGithub, ContactLinkedin, ContactTel];

	return (
		<section className="relative z-[1112] text-white w-full text-center px-4 py-12 pb-0 overflow-hidden">
			<SectionHeading>Contact Me</SectionHeading>
			<ul className="flex py-4 gap-8 flex-wrap justify-center px-10 m-auto mt-12 mb-24">
				{contacts.map((Component, index) => (
					<li
						className="flex-1 flex justify-center min-w-[10rem] hover:scale-125 duration-300"
						key={index}
					>
						<Component />
					</li>
				))}
			</ul>
		</section>
	);
}
