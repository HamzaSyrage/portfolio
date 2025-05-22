import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Btn(props: any) {
	const controlsOuter = useAnimation();
	const controlsInner = useAnimation();

	const [hovered, setHovered] = useState(false);

	const dashArray = 260;

	useEffect(() => {
		controlsOuter.start({
			strokeDashoffset: [0, hovered ? -dashArray : -dashArray],
			transition: {
				repeat: Infinity,
				ease: "linear",
				duration: hovered ? 2 : 8,
			},
		});
		controlsInner.start({
			strokeDashoffset: [0, hovered ? dashArray : dashArray],
			transition: {
				repeat: Infinity,
				ease: "linear",
				duration: hovered ? 1.5 : 6,
			},
		});
	}, [controlsInner, controlsOuter, hovered]);

	const gradientTextStyle = {
		background: "linear-gradient(0deg, #d8ecf8, #98c0ef)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
	};

	return (
		<button
			{...props}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="relative w-32 h-10 cursor-pointer rounded-[20em] bg-[#121521] border border-[#c2ccff33] overflow-visible select-none"
			style={{ paddingTop: "0.3em" }}
		>
			{/* Outer SVG outline */}
			<svg
				className="absolute top-0 left-0 w-full h-full pointer-events-none"
				viewBox="0 0 128 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.rect
					x="0.5"
					y="0.5"
					width="127"
					height="37"
					rx="20"
					ry="20"
					stroke="#9dc3f7"
					strokeWidth="1"
					strokeDasharray={dashArray}
					strokeLinecap="round"
					animate={controlsOuter}
					initial={{ strokeDashoffset: 0 }}
				/>
			</svg>

			{/* Inner SVG outline - slightly inset */}
			<svg
				className="absolute top-[2px] left-[2px] pointer-events-none"
				style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
				viewBox="0 0 124 34"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.rect
					x="0.5"
					y="0.5"
					width="123"
					height="33"
					rx="18"
					ry="18"
					stroke="#c2ccff"
					strokeWidth="1"
					strokeDasharray={dashArray - 20}
					strokeLinecap="round"
					animate={controlsInner}
					initial={{ strokeDashoffset: 0 }}
				/>
			</svg>

			{/* Glow effect behind text */}
			<span
				className="absolute inset-0 rounded-[20em] pointer-events-none"
				style={{
					boxShadow: hovered
						? "0 0 10px 2px #c2ccff88, 0 0 20px 4px #9dc3f7aa"
						: "0 0 6px 1px #c2ccff44",
					transition: "box-shadow 0.3s ease-in-out",
				}}
			/>

			{/* Button text */}
			<span
				className="relative text-lg font-semibold select-none"
				style={gradientTextStyle}
			>
				Projects
			</span>
		</button>
	);
}
