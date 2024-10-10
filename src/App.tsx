import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectDeatailPage from "./Pages/ProjectDeatailPage";
import IndexPage from "./Pages/IndexPage";
const router = createBrowserRouter([
  { path: "/", element: <IndexPage /> },
  { path: "/portfolio/", element: <LandingPage /> },
  { path: "/portfolio/projects", element: <ProjectsPage /> },
  { path: "/portfolio/projects/:id", element: <ProjectDeatailPage /> },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
