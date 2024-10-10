export type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: string;
  links: {
    repo: string;
    deploy: string;
  };
  madeWith: string[];
  deployed: boolean;
};

export const Projects: ProjectType[] = [
  {
    id: "p1",
    title: "Next Foodies App",
    description:
      "special thing about this project is that it's actually a fullstack application, so front-end and backend combined into one project. a brand new React project. which allows users to view meals, share meals, and be part of a foodies community.",
    image: "images/rename-1.png",
    links: {
      repo: "https://github.com/HamzaSyrage/Next-JS-Foodies",
      deploy: "",
    },
    madeWith: ["NEXT", "REACT", "sql-lite3", "node"],
    deployed: false,
  },
  {
    id: "p2",
    title: "React-Router-Auth-JWT",
    description:
      "Build a Multi-Page SPA with React Router, also implement user authentication. front-end React app communicates with a backend that enforces authentication. keep track of whether a user is logged in or not.",
    image: "images/rename-2.png",
    links: {
      repo: "https://github.com/HamzaSyrage/React-Router-Auth-JWT",
      deploy: "",
    },
    madeWith: ["React", "node", "react-router"],
    deployed: false,
  },
  {
    id: "p3",
    title: "React Food App",
    description:
      "food order app which allows users to browse different meals, add those meals to a cart, edit those meals in the cart, and then proceed to a checkout form where they can then finally, in the end, submit that order to a dummy backend.",
    image: "images/rename-5.png",
    links: {
      repo: "https://github.com/HamzaSyrage/react-food-app",
      deploy: "",
    },
    madeWith: ["React"],
    deployed: false,
  },
  {
    id: "p4",
    title: "React Project Management App",
    description:
      "This React Project Management application here where you can create projects, add tasks to projects, and view different projects where you can also clear tasks and delete projects.",
    image: "images/rename-4.png",
    links: {
      repo: "https://github.com/HamzaSyrage/react-project-management-app",
      deploy: "",
    },
    madeWith: ["React", "tailwind"],
    deployed: false,
  },
  {
    id: "p5",
    title: "React Time Challenge App",
    description:
      "This React Time Challenge here where you can set your name, add try out diffrent challenge, and then view your score.",
    image: "images/rename-3.png",
    links: {
      repo: "https://github.com/HamzaSyrage/React-Time-Challenge",
      deploy: "",
    },
    madeWith: ["React"],
    deployed: false,
  },
  {
    id: "p6",
    title: "React Investment Calculator App",
    description:
      "The Investment Calculator App can be used to calculate a specific parameter for an investment plan. The tabs represent the desired parameter to be found. For example, to calculate the return rate needed to reach an investment goal with particular inputs.",
    image: "images/rename-6.png",
    links: {
      repo: "https://github.com/HamzaSyrage/React-Investment-Calculator-App",
      deploy: "",
    },
    madeWith: ["React"],
    deployed: false,
  },
  {
    id: "p7",
    title: "React Tic-Tac-Toe App",
    description:
      "Did you know that tic-tac-toe has been around for over 3,000 years! This classic game contributes to kids skills in problem solving, spatial reasoning, hand-eye coordination, turn taking, & strategizing.  Teachers trust Toy Theater to provide safe & effective educational games. Free to play, priceless for learning.",
    image: "images/rename-7.png",
    links: {
      repo: "https://github.com/HamzaSyrage/react-tic-tac-toe-game",
      deploy: "",
    },
    madeWith: ["React"],
    deployed: false,
  },
  {
    id: "p8",
    title: "React Quiz App",
    description:
      "A multiple choice question (MCQ) is an assessment item consisting of a stem, which poses the question or problem, followed by a list of possible responses, also known as options or alternatives.",
    image: "images/rename-8.png",
    links: {
      repo: "https://github.com/HamzaSyrage/react-quiz-app",
      deploy: "",
    },
    madeWith: ["React"],
    deployed: false,
  },
  {
    id: "p8",
    title: "Vanilla Js Todo App",
    description:
      "At work and at home, having a to-do list may help you prioritize your work and personal tasks. This allows you to organize and complete the most crucial tasks first. To-do lists can be used to improve time management because all of your tasks are laid out clearly in advance.",
    image: "images/rename-9.png",
    links: {
      repo: "https://github.com/HamzaSyrage/Vanilla-JS-To-Do-App",
      deploy: "",
    },
    madeWith: ["React"],
    deployed: false,
  },
];
