import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import RootLayout from './pages/Root';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'work', element: <WorkPage /> },
      { path: 'work/:projectId', element: <ProjectDetailPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
