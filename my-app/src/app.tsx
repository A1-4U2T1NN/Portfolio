import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ProjectGallery from "./pages/ProjectGallery";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/Projects" element={<ProjectGallery />} />
      <Route path="/*" element={<NotFound />} />
    </Route>,
  ),
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
