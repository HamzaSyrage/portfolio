import { Projects } from "../assets/Projects";
import CanvasBG from "../components/shared/CanvasBG";
import GoTo from "../components/shared/Goto";
import ProjectDetail from "../components/ProjectDetail";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  scrollTo(0, 0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="projects-page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className=""
      >
        Projects
      </motion.h1>
      <CanvasBG />
      <motion.ul variants={container} initial="hidden" animate="show">
        {Projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectDetail project={project} />
          </motion.div>
        ))}
      </motion.ul>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
      >
        <GoTo to="/portfolio/">Back Home</GoTo>
      </motion.div>
    </section>
  );
}
