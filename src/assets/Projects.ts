type TProjectLink = {
  repo: string;
  deploy?: string;
};

export type TProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  links: TProjectLink;
  madeWith: string[];
  deployed: boolean;
};

export const Projects: TProject[] = [
	{
		id: "p1",
		title: "Next Foodies App",
		description:
			"A full-stack application built with Next.js that combines both frontend and backend functionality in a single codebase. This modern food community platform allows users to discover curated meals, share their own recipes, and engage with other food enthusiasts. The app features server-side rendering for optimal performance and SEO benefits, along with a SQLite database for persistent storage.",
		image: "/images/rename-1.png",
		links: {
			repo: "https://github.com/HamzaSyrage/Next-JS-Foodies",
			deploy: "https://next-js-foodies-smoky.vercel.app/",
		},
		madeWith: ["Next.js", "React", "SQLite", "Node.js", "API Routes"],
		deployed: true,
	},
	{
		id: "p2",
		title: "React-Router-Auth-JWT",
		description:
			"A secure authentication system built with React Router and JWT. This application demonstrates advanced authentication flows where the React front-end communicates with a protected backend API. Features include user registration, login/logout functionality, and protected route management.",
		image: "/images/rename-2.png",
		links: {
			repo: "https://github.com/HamzaSyrage/React-Router-Auth-JWT",
			deploy: "",
		},
		madeWith: ["React", "node", "react-router", "React Query", "API"],
		deployed: false,
	},
	{
		id: "p3",
		title: "React Food App",
		description:
			"An interactive food ordering platform built with React. Users can browse a diverse menu, add items to their cart, modify quantities, and complete orders through a streamlined checkout process. The application integrates with a backend API for order processing and management.",
		image: "/images/rename-5.png",
		links: {
			repo: "https://github.com/HamzaSyrage/react-food-app",
			deploy: "https://hamzasyrage.github.io/react-food-app-frontend/",
		},
		madeWith: ["React", "API"],
		deployed: true,
	},
	{
		id: "p4",
		title: "React Project Management App",
		description:
			"A comprehensive project management solution built with React. This application enables users to create and organize projects, add and track tasks, and manage project workflows efficiently. Features include task assignment, progress tracking, and project archiving capabilities.",
		image: "/images/rename-4.png",
		links: {
			repo: "https://github.com/HamzaSyrage/react-project-management-app",
			deploy: "https://hamzasyrage.github.io/react-project-management-app/",
		},
		madeWith: ["React", "tailwind"],
		deployed: true,
	},
	{
		id: "p5",
		title: "React Time Challenge App",
		description:
			"An engaging time-based challenge application built with React. Users can personalize their experience by setting their name, select from various timed challenges, and track their performance through an intuitive scoring system. The app features progressive difficulty levels and performance analytics.",
		image: "/images/rename-3.png",
		links: {
			repo: "https://github.com/HamzaSyrage/React-Time-Challenge",
			deploy: "https://hamzasyrage.github.io/React-Time-Challenge",
		},
		madeWith: ["React"],
		deployed: true,
	},
	{
		id: "p6",
		title: "React Investment Calculator App",
		description:
			"A sophisticated financial planning tool built with React. This calculator allows users to model various investment scenarios by adjusting parameters such as initial investment, contribution amounts, time periods, and expected returns. The application provides detailed projections and visual representations of investment growth.",
		image: "/images/rename-6.png",
		links: {
			repo: "https://github.com/HamzaSyrage/React-Investment-Calculator-App",
			deploy: "https://hamzasyrage.github.io/React-Investment-Calculator-App",
		},
		madeWith: ["React"],
		deployed: true,
	},
	{
		id: "p7",
		title: "React Tic-Tac-Toe App",
		description:
			"A modern implementation of the classic Tic-Tac-Toe game built with React. This interactive application features a clean user interface, move history tracking, and win detection algorithms. The game promotes strategic thinking and provides an engaging experience for users of all ages.",
		image: "/images/rename-7.png",
		links: {
			repo: "https://github.com/HamzaSyrage/react-tic-tac-toe-game",
			deploy: "https://hamzasyrage.github.io/react-tic-tac-toe-game",
		},
		madeWith: ["React"],
		deployed: true,
	},
	{
		id: "p8",
		title: "React Quiz App",
		description:
			"An interactive quiz application built with React that delivers multiple-choice questions across various topics. The app features a user-friendly interface, real-time scoring, and performance feedback. Each question is carefully designed to test knowledge while providing an engaging learning experience.",
		image: "/images/rename-8.png",
		links: {
			repo: "https://github.com/HamzaSyrage/react-quiz-app",
			deploy: "https://hamzasyrage.github.io/react-quiz-app",
		},
		madeWith: ["React"],
		deployed: true,
	},
	{
		id: "p9",
		title: "Vanilla Js Todo App",
		description:
			"A lightweight and efficient task management application built with vanilla JavaScript. This app helps users organize their personal and professional responsibilities through an intuitive interface. Features include task creation, priority setting, completion tracking, and filtering options to enhance productivity.",
		image: "/images/rename-9.png",
		links: {
			repo: "https://github.com/HamzaSyrage/Vanilla-JS-To-Do-App",
			deploy: "https://hamzasyrage.github.io/Vanilla-JS-To-Do-App",
		},
		madeWith: ["vanilla js"],
		deployed: true,
	},
];
