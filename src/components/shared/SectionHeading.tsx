"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeading({ children }: { children: ReactNode }) {
	return (
		<motion.div
			className="relative mx-auto h-fit opacity-0 flex flex-col items-center mt-16 md:mt-24 px-4"
			initial={{ opacity: 0, y: -32 }}
			animate={{ opacity: 0.7, y: 0 }}
			transition={{
				opacity: { duration: 2, ease: "easeIn" },
				y: { duration: 1.4, ease: "easeOut" },
			}}
		>
			<div className="relative w-fit">
				<p
					className="text-base"
					style={{
						background: "linear-gradient(0deg, #d8ecf8 0%, #98c0ef 100%)",
						backgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					{children}
				</p>

				<motion.div
					className="hidden sm:block absolute top-1/2 right-full w-16 h-px"
					style={{
						background: "linear-gradient(-90deg, #9dc3f7 0%, transparent 100%)",
					}}
					initial={{ opacity: 0, x: -60 }}
					animate={{ opacity: 0.3, x: 0 }}
					transition={{ duration: 1.4, ease: "easeOut" }}
				/>
				<motion.div
					className="hidden sm:block absolute top-1/2 left-full w-16 h-px"
					style={{
						background: "linear-gradient(90deg, #9dc3f7 0%, transparent 100%)",
					}}
					initial={{ opacity: 0, x: 60 }}
					animate={{ opacity: 0.3, x: 0 }}
					transition={{ duration: 1.4, ease: "easeOut" }}
				/>
			</div>
		</motion.div>
	);
}
