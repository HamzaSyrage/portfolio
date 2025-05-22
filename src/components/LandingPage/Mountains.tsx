"use client";
import { motion } from "framer-motion";

export function Mountains() {
	return (
		<div className="absolute inset-x-0 top-[31rem] mx-auto w-full h-40 pointer-events-none">
			<div
				className="block w-full h-[500%] absolute top-0 z-[2]"
				style={{
					background: "linear-gradient(0deg, #121521 80%, transparent 90%)",
				}}
			/>
			{[
				{
					w: "w-64",
					x: "translate-x-24",
					y: "-translate-y-8",
					bottom: "-140%",
					delay: 2.0,
				},
				{
					w: "w-56",
					x: "-translate-x-8",
					y: "translate-y-4",
					bottom: "-108%",
					delay: 2.2,
				},
				{
					w: "w-80",
					x: "-translate-x-24",
					y: "translate-y-8",
					bottom: "-140%",
					delay: 2.4,
				},
			].map(({ w, x, y, bottom, delay }, i) => (
				<motion.div
					key={i}
					className={`absolute inset-x-0 mx-auto ${w} h-80 rotate-45 ${x} ${y} brightness-80`}
					style={{
						zIndex: 1 + i, // or 10 - i if you prefer higher numbers in front
						boxShadow:
							"-1em -0.2em 0.4em -1.1em #c2ccff, inset 0em 0em 0em 2px #c2ccff, inset 0.2em 0.3em 0.2em -0.2em #c2ccff, inset 10.2em 10.3em 2em -10em #d4e6ff2f",
						background: "#121521",
					}}
					initial={{ bottom: "-240%" }}
					animate={{ bottom }}
					transition={{ duration: 2, ease: "easeOut", delay }}
				>
					<div
						className="block w-48 h-48 absolute left-0 top-0 rounded-br-full"
						style={{
							background:
								"repeating-radial-gradient(at 100% 100%, transparent 0%, #c2ccff22 2px, transparent 4px)",
						}}
					/>
				</motion.div>
			))}
		</div>
	);
}
