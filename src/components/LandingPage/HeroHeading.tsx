"use client";
import { motion } from "framer-motion";

export function HeroHeading() {
	return (
		<motion.div
			className="absolute inset-x-0 top-40 flex flex-col items-center justify-center pointer-events-none text-center"
			initial={{ opacity: 0, y: -16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
		>
			<h2
				className="text-7xl font-semibold font-['Hubot-Sans']"
				style={{
					background: "linear-gradient(0deg, #bad1f1 30%, #9dc3f7 100%)",
					backgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}
			>
				HAMZA
				<br />
				SYRAGE
			</h2>

			<motion.p
				className="mt-6 text-lg"
				style={{
					background: "linear-gradient(0deg, #d8ecf8 0%, #98c0ef 100%)",
					backgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					opacity: { duration: 2, ease: "easeOut", delay: 2 },
					y: { duration: 1.4, ease: "easeOut", delay: 2 },
				}}
			>
				Front-End Developer,
				<br />
				NEXT + React.
			</motion.p>
		</motion.div>
	);
}
