// import { useParams } from "react-router-dom";
// import { Projects } from "../assets/Projects";
import GoTo from "../components/shared/Goto";
// import ProjectDeatail from "../components/ProjectDeatail";
export default function ProjectDeatailPage() {
  // const param = useParams();
  // const index = Projects.findIndex((project) => project.id === param.id);
  // console.log(index);
  // console.log(param.id);
  scrollTo(0, 0);
  // if (index === -1) {
  //   return <div>not found</div>;
  // }
  return (
    <>
      <GoTo to="/portfolio/">Back Home</GoTo>
    </>
  );
}
