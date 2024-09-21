import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ColorSchemeToggle from './Components/ColorSchemeToggle';
import ReactDOM from "react-dom/client";
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold dark:text-gray-400">Hi there!!</h1>
      <p className="dark:text-gray-400">This is my new website in making..</p>
      <ColorSchemeToggle/>
    </div>
  );
}

function RootLayout() {
  return (
    <div className="min-h-screen">
      <nav>
        <Header />
      </nav>
      <main>
        <Outlet /> {/* Outlet renders child routes like App, About, Projects */}
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <App/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "projects",
        element:<Projects/>
      }
    ]
  }
])

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;

