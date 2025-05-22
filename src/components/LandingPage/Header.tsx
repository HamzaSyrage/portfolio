import { motion } from "framer-motion";
import { useState } from "react";

interface HeaderProps {
	onProjectsClick?: () => void;
}

export default function Header({ onProjectsClick }: HeaderProps) {
	const [isHovering, setIsHovering] = useState(false);

	function handleClick() {
		if (onProjectsClick) {
			onProjectsClick();
		}
		// You can add your navigation logic here
		// navigate("/portfolio/projects");
	}

	return (
		<motion.header
			className="flex w-full justify-center text-blue-200 p-8 absolute top-0 left-0 right-0 mx-auto"
			initial={{ opacity: 0, y: -16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				opacity: { duration: 2, ease: "easeIn", delay: 2 },
				y: { duration: 1.4, ease: "easeOut", delay: 2 },
			}}
		>
			{/* GitHub Link */}
			<motion.h2
				className="text-base absolute left-10 md:left-56 right-96 mx-auto mt-1 w-fit font-['Hubot-Sans'] opacity-50 cursor-pointer transition-opacity duration-75 ease-in-out hover:opacity-100"
				whileHover={{
					textShadow: "0 2px 16px rgba(174, 207, 242, 0.6)",
					transition: { duration: 0.04 },
				}}
			>
				<a
					href="https://github.com/HamzaSyrage"
					target="_blank"
					rel="My GitHub Account"
					className="no-underline text-inherit"
				>
					GitHub
				</a>
			</motion.h2>

			{/* Central Spot */}
			<motion.div
				className="absolute left-0 right-0 mx-auto w-fit"
				onHoverStart={() => setIsHovering(true)}
				onHoverEnd={() => setIsHovering(false)}
			>
				<motion.div
					className="w-7 h-7 rounded-full bg-black shadow-[0_0_1em_0_#98c0ef] transition-shadow duration-1000 ease-in-out"
					whileHover={{
						boxShadow: "-0.3em 0.1em 0.2em 0 #98c0ef",
					}}
				/>
			</motion.div>

			{/* Contact/Projects Button */}
			<motion.button
				className="absolute left-[min(46em,60vw)] right-0 mx-auto w-32 h-10 cursor-pointer rounded-full border-none transition-all duration-500 border border-[#c2ccff33] opacity-100 pt-1 bg-[#121521] text-[#9dc3f7] whitespace-nowrap  overflow-hidden translate-y-[-0.5rem]"
				onClick={handleClick}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				{/* Button Background Glow */}
				<motion.div
					className="absolute inset-0 rounded-full w-full h-full opacity-10 pointer-events-none"
					style={{
						background:
							"radial-gradient(farthest-side at 50% 100%, #c2ccff, transparent)",
					}}
					whileHover={{
						opacity: 0.3,
						background:
							"#c2ccff1e radial-gradient(farthest-side at 50% 100%, #c2ccff, transparent)",
					}}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				/>

				{/* Animated Border Glow */}
				<motion.span
					className="absolute -inset-px rounded-full border border-transparent pointer-events-none"
					style={{
						mask: "linear-gradient(transparent, transparent), linear-gradient(white, white)",
						maskClip: "padding-box, border-box",
						maskComposite: "intersect",
					}}
					animate={isHovering ? "hover" : "default"}
				>
					<motion.div
						className="absolute h-full aspect-square"
						style={{
							background:
								"radial-gradient(circle at 50% 50%, hsla(0, 0%, 100%, 0.75), transparent 50%), radial-gradient(circle at 50% 50%, #c2ccff 50%, transparent)",
							offsetPath: "rect(0 100% 100% 0 round 33px)",
						}}
						animate={{
							offsetDistance: ["0%", "100%"],
						}}
						transition={{
							duration: isHovering ? 2 : 24,
							repeat: Infinity,
							ease: "linear",
						}}
					/>
					<motion.div
						className="absolute h-full aspect-square"
						style={{
							background:
								"radial-gradient(circle at 50% 50%, hsla(0, 0%, 100%, 0.75), transparent 50%), radial-gradient(circle at 50% 50%, #c2ccff 50%, transparent)",
							offsetPath: "rect(0 100% 100% 0 round 33px)",
						}}
						animate={{
							offsetDistance: ["50%", "150%"],
						}}
						transition={{
							duration: isHovering ? 2 : 24,
							repeat: Infinity,
							ease: "linear",
						}}
					/>
				</motion.span>

				<span
					className="text-lg leading-[142%]"
					style={{
						background: "linear-gradient(0deg, #d8ecf8, #98c0ef)",
						backgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					Projects
				</span>
			</motion.button>

			{/* Spotlight Effect */}
			<motion.div
				className="pointer-events-none absolute left-0 right-0 top-0 mx-auto transition-[filter] duration-1000 ease-in-out h-[42em] w-full overflow-hidden"
				animate={
					isHovering
						? {
								filter: "hue-rotate(-380deg)",
						  }
						: {}
				}
				transition={{
					duration: 10,
					repeat: isHovering ? Infinity : 0,
					ease: "linear",
				}}
			>
				{/* Spotlight Beam 1 */}
				<motion.div
					className="rounded-b-[50%] absolute left-0 right-0 mx-auto top-12 w-[30em] h-[max(42em,86vh)] -z-10"
					style={{
						backgroundImage:
							"conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(124, 145, 182, 0.3) 49%, rgba(124, 145, 182, 0.5) 50%, rgba(124, 145, 182, 0.3) 51%, transparent 55%)",
						transformOrigin: "50% 0",
						filter: "blur(15px) opacity(0.5)",
					}}
					initial={{ rotate: 0, scale: 0 }}
					animate={{ rotate: 20, scale: 1 }}
					transition={{
						scale: { duration: 2, ease: "easeInOut" },
						rotate: { duration: 2, ease: "easeInOut" },
					}}
				>
					<motion.div
						animate={{
							rotate: [0, -1, 2, -2, 1, 0],
							scale: [1, 1.2, 1.3, 1.2, 1.1, 1],
							filter: [
								"blur(15px) opacity(0.5)",
								"blur(16px) opacity(0.6)",
								"blur(14px) opacity(0.4)",
								"blur(15px) opacity(0.6)",
								"blur(13px) opacity(0.4)",
								"blur(15px) opacity(0.5)",
							],
						}}
						transition={{
							duration: 17,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="w-full h-full"
					/>
				</motion.div>

				{/* Spotlight Beam 2 */}
				<motion.div
					className="rounded-b-[50%] absolute left-0 right-0 mx-auto top-12 w-[30em] h-[max(42em,86vh)] -z-10"
					style={{
						backgroundImage:
							"conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(124, 145, 182, 0.3) 49%, rgba(124, 145, 182, 0.5) 50%, rgba(124, 145, 182, 0.3) 51%, transparent 55%)",
						transformOrigin: "50% 0",
						filter: "blur(15px) opacity(0.5)",
					}}
					initial={{ rotate: 0, scale: 0 }}
					animate={{ rotate: -20, scale: 1 }}
					transition={{
						scale: { duration: 2, ease: "easeInOut" },
						rotate: { duration: 2, ease: "easeInOut" },
					}}
				>
					<motion.div
						animate={{
							rotate: [0, 1, -2, 2, -1, 0],
							scale: [1, 1.2, 1.3, 1.2, 1.1, 1],
							filter: [
								"blur(15px) opacity(0.5)",
								"blur(16px) opacity(0.6)",
								"blur(14px) opacity(0.4)",
								"blur(15px) opacity(0.6)",
								"blur(13px) opacity(0.4)",
								"blur(15px) opacity(0.5)",
							],
						}}
						transition={{
							duration: 14,
							repeat: Infinity,
							ease: "easeInOut",
							direction: "reverse",
						}}
						className="w-full h-full"
					/>
				</motion.div>

				{/* Spotlight Beam 3 */}
				<motion.div
					className="rounded-b-[50%] absolute left-0 right-0 mx-auto top-12 w-[30em] h-[max(42em,86vh)] -z-10"
					style={{
						backgroundImage:
							"conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(124, 145, 182, 0.3) 49%, rgba(124, 145, 182, 0.5) 50%, rgba(124, 145, 182, 0.3) 51%, transparent 55%)",
						transformOrigin: "50% 0",
						filter: "blur(15px) opacity(0.5)",
					}}
					initial={{ rotate: 0, scale: 0 }}
					animate={{ rotate: 0, scale: 1 }}
					transition={{
						scale: { duration: 2, ease: "easeInOut" },
						rotate: { duration: 2, ease: "easeInOut" },
					}}
				>
					<motion.div
						animate={{
							rotate: [0, -1, 2, -2, 1, 0],
							scale: [1, 1.2, 1.3, 1.2, 1.1, 1],
							filter: [
								"blur(15px) opacity(0.5)",
								"blur(16px) opacity(0.6)",
								"blur(14px) opacity(0.4)",
								"blur(15px) opacity(0.6)",
								"blur(13px) opacity(0.4)",
								"blur(15px) opacity(0.5)",
							],
						}}
						transition={{
							duration: 21,
							repeat: Infinity,
							ease: "easeInOut",
							direction: "reverse",
						}}
						className="w-full h-full"
					/>
				</motion.div>
			</motion.div>
		</motion.header>
	);
}
