import { Link } from "react-router-dom";
import { Projects } from "../../assets/Projects";
import GoTo from "../shared/Goto";

export default function ProjectPreview() {
  const ProjectsPreview = Projects.slice(0, 3);
  return (
    <section className="content-section sec-content">
      <p className="subt">Projects</p>
      <ul className="preview">
        {ProjectsPreview.map((project) => (
          <li key={project.id}>
            <Link className="project" to={`/portfolio/projects`}>
              <h3 className="title">{project.title}</h3>
              <p className="subp">{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <GoTo to={"/portfolio/projects"}>View All Projects...</GoTo>
    </section>
  );
}
