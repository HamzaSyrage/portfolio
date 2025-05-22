"use client";
import { motion } from "framer-motion";

export function AccentLines() {
	return (
		<div className="pointer-events-none absolute inset-0 w-full h-[42rem] -z-[2]">
			{/* Horizontal Lines */}
			<div className="absolute inset-0 mx-auto h-full w-full">
				<motion.div
					className="absolute top-24 inset-x-0 mx-auto w-full h-px opacity-0"
					style={{
						background:
							"linear-gradient(90deg, transparent, rgba(186, 215, 247, 0.18), transparent)",
					}}
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 2, ease: "easeOut", delay: 2.4 }}
				/>
				<motion.div
					className="top-44 inset-x-0 mx-auto w-full h-px opacity-0 relative"
					style={{
						background:
							"linear-gradient(90deg, transparent, rgba(186, 215, 247, 0.18), transparent)",
					}}
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 2, ease: "easeOut", delay: 2.4 }}
				>
					{["rotate(45deg)", "rotate(-45deg)"].map((rot, i) => (
						<motion.div
							key={i}
							className="absolute w-20 h-px opacity-12 bg-[#9dc3f7] right-96"
							style={{ transform: `${rot} translate(-2.5em, 2.5em)` }}
							initial={{ opacity: 0, scale: 0, rotate: 360 }}
							animate={{
								opacity: 0.12,
								scale: 1,
								rotate: rot === "rotate(45deg)" ? 45 : -45,
							}}
							transition={{ duration: 2, ease: "easeOut", delay: 2.4 }}
						/>
					))}
				</motion.div>

				{[64, 96, 464].map((top, index) => (
					<motion.div
						key={index}
						className={`absolute top-[${top}px] inset-x-0 mx-auto w-full h-px opacity-0 relative`}
						style={{
							background:
								"linear-gradient(90deg, transparent, rgba(186, 215, 247, 0.18), transparent)",
						}}
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 2, ease: "easeOut", delay: 2.4 }}
					>
						{["left-96", "right-96"].map((pos, i) => (
							<motion.div
								key={i}
								className={`absolute w-1 h-1 rounded-full bg-[#9dc3f7] ${pos} -translate-y-px`}
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 2, ease: "easeOut", delay: 4.4 }}
							/>
						))}
					</motion.div>
				))}
			</div>

			{/* Vertical Lines */}
			<div className="absolute inset-0 mx-auto h-full w-full">
				{["left-96", "left-[34rem]", "right-96", "right-[34rem]"].map(
					(pos, index) => (
						<motion.div
							key={index}
							className={`absolute inset-y-0 ${pos} w-px h-full opacity-0`}
							style={{ background: "rgba(186, 215, 247, 0.18)" }}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 2, ease: "easeOut", delay: 2 }}
						/>
					)
				)}
			</div>
		</div>
	);
}
