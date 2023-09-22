import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Projects from "./Components/Projects";
import data from './Data/Data';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Layout /> },
        { path: "/frontend", element: <Projects data={data.FrontEndData} /> }, // Pass data as a prop
        { path: "/backend", element: <Projects data={data.BackEndData} /> },  // Pass data as a prop
        { path: "/internship", element: <Projects data={data.InternshipData} /> },  // Pass data as a prop
        { path: "blogs", element: <Projects data={data.BlogsData} /> },  // Pass data as a prop
        { path: "contact", element: <Projects /> },  // Pass data as a prop
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
