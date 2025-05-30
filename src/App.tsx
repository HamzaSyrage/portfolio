import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProjectsPage from "./Pages/ProjectsPage";
// import ProjectDeatailPage from "./Pages/ProjectDeatailPage";
// import IndexPage from "./Pages/IndexPage";
const router = createBrowserRouter([
	// { path: "/", element: <IndexPage /> },
	{ path: "/", element: <LandingPage /> },
	{ path: "/projects", element: <ProjectsPage /> },
	// { path: "/projects/:id", element: <ProjectDeatailPage /> },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
