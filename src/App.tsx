import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import AboutPage from './pages/About';
import WorkPage from './pages/Work';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/work', element: <WorkPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
