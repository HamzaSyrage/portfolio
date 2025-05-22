import { motion } from "framer-motion";
import { SectionHeading } from "../shared/SectionHeading";

export default function Content() {
	return (
		<motion.section
			className="relative z-[1112] w-full text-center text-white px-4 pt-[16em] pb-[12em] overflow-hidden max-md:mt-[30rem]"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8 }}
		>
			{/* Animated Decorative Shapes */}
			<motion.div
				className="absolute left-0 right-0 top-1/4 mx-auto flex justify-center pointer-events-none z-0"
				initial={{ y: 20 }}
				whileInView={{ y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<motion.div
					className="w-40 h-40 rounded-full bg-[radial-gradient(circle,transparent_0,#c2ccff22_2px,transparent_4px)] brightness-75 shadow-[inset_0_0_0_2px_#c2ccff,inset_0.2em_0.3em_0.2em_-0.2em_#c2ccff,inset_-1.2em_2.3em_2em_-0.5em_#d4e6ff2f,-1em_-0.2em_0.4em_-1.1em_#c2ccff] translate-x-[-18em] z-10 bg-[#121521]"
					initial={{ scale: 0.8 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
				/>

				<motion.div
					className="w-40 h-40 rounded-2xl bg-[radial-gradient(circle,transparent_0,#c2ccff22_2px,transparent_4px)] brightness-75 shadow-[inset_0_0_0_2px_#c2ccff,inset_0.2em_0.3em_0.2em_-0.2em_#c2ccff,inset_10.8em_11.3em_2em_-10.5em_#d4e6ff2f,-1em_-0.2em_0.4em_-1.1em_#c2ccff] translate-x-[18em] translate-y-[12em] z-10 bg-[#121521]"
					initial={{ scale: 0.8 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}
				/>
			</motion.div>

			{/* Content with Viewport Animations */}
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.8, delay: 0.4 }}
			>
				<SectionHeading>About</SectionHeading>

				<motion.h3
					className="mt-2 mb-4 text-xl sm:text-2xl font-semibold text-center bg-gradient-to-t from-[#d8ecf8] to-[#98c0ef] bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(174,207,242,0.24)] z-10 relative"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
				>
					I'm a second year student at Damascus
					<br />
					University studying Information Technology.
				</motion.h3>

				<motion.h6
					className="max-w-[35em] mx-auto block text-[1em] font-normal text-[#d8ecf8be] z-10 relative"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.8 }}
				>
					Front-End Developer specializing in React.js and Next.js, with
					experience building responsive, user-centric web applications.
					Proficient in TypeScript, modern JavaScript, and scalable UI
					architecture. Known for writing clean, maintainable code and
					collaborating effectively with cross-functional teams to translate
					Figma designs into interactive interfaces. Continuously expanding
					technical skills. Flexible and available for full-time roles or
					freelance partnerships in front-end development.
				</motion.h6>
			</motion.div>
		</motion.section>
	);
}
