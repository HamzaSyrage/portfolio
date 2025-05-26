import { Phone } from "lucide-react";

export default function ContactTel() {
	return (
		<a
			href="tel:+963941845197"
			target="_blank"
			rel="Tel"
			aria-label="Tel"
			className="flex items-center gap-4"
		>
			<Phone />
			<p className="text-[#d8ecf8be] whitespace-nowrap">+963 941 845 197</p>
		</a>
	);
}
