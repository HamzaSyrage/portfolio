import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function GoTo(param: { to: string; children: ReactNode }) {
	return (
		<div className="flex justify-center items-center hover:scale-110 duration-100">
			<h2
				className="w-fit opacity-50 cursor-pointer p-4 
                 transition-opacity duration-[40ms] ease-in-out 
                 hover:opacity-100 
                 hover:[text-shadow:0_2px_16px_rgba(174,207,242,0.6)]"
			>
				<Link to={param!.to}>{param!.children}</Link>
			</h2>
		</div>
	);
}