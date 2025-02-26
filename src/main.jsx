import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import ResumePage from "./pages/ResumePage";
import ProjectsWindowPage from "./pages/ProjectsWindowPage";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {82iwer,gfdsbvc xz
      //   path: 'profile/:id',
      //   element: <ProfilePage />,
      // },
      {
        path: 'about',
        element: <AboutPage />,
      },
      // image.png
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
      {
        path: "/projects",
        element: <ProjectsWindowPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
