import { Github } from "lucide-react";

export default function ContactGithub() {
	return (
		<a
			href="https://github.com/HamzaSyrage/"
			target="_blank"
			rel="GitHub"
			aria-label="GitHub"
			className="flex items-center gap-4"
		>
			<Github />
			<p className="text-[#d8ecf8be] whitespace-nowrap">HamzaSyrage</p>
		</a>
	);
}
