import { Mail } from "lucide-react";

export default function ContactEmail() {
	return (
		<a
			href="mailto:hamzasyrage@gmail.com"
			target="_blank"
			rel="Email"
			aria-label="Email"
			className="flex items-center gap-4"
		>
			<Mail />
			<p className="text-[#d8ecf8be] whitespace-nowrap">
				hamzasyrage@gmail.com
			</p>
		</a>
	);
}
