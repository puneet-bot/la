import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Components/Layout";
import Projects from "./Components/Projects";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Layout /> },
        { path: "/frontend", element: <Projects /> },
        { path: "/backend", element: <Projects /> },
        { path: "/internship", element: <Projects /> },
        { path: "blogs", element: <Projects /> },
        { path: "contact", element: <Projects /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
