import { Projects } from "../assets/Projects";
import CanvasBG from "../components/CanvasBG";
import GoTo from "../components/Goto";
import ProjectDeatail from "../components/ProjectDeatail";

export default function ProjectsPage() {
  scrollTo(0, 0);
  return (
    <section className="projects-page">
      <h1 className="">Projects</h1>
      <CanvasBG />
      <ul>
        {Projects.map((project) => (
          <ProjectDeatail project={project} key={project.id} />
        ))}
      </ul>
      <GoTo to="/portfolio/">Back Home</GoTo>
    </section>
  );
}
