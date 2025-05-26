import { Linkedin } from "lucide-react";

export default function ContactLinkedin() {
	return (
		<a
			href="https://www.linkedin.com/in/hamzasyrage/"
			target="_blank"
			rel="LinkedIn"
			aria-label="LinkedIn"
			className="flex items-center gap-4"
		>
			<Linkedin />
			<p className="text-[#d8ecf8be] whitespace-nowrap">Hamza Syrage</p>
		</a>
	);
}
