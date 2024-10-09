import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ColorSchemeToggle from './Components/ColorSchemeToggle';
import ReactDOM from "react-dom/client";
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Foodie from './Components/Foodie';
import MoviesGPT from './Components/MoviesGPT';
import Streamify from './Components/Streamify';

function App() {
  return (
    <div >
     <About/>
    </div>
  );
}

function RootLayout() {
  return (
    <div className="min-h-screen">
      <nav>
        <Header />
      </nav>
      <main className='flex-grow'>
        <Outlet /> {/* Outlet renders child routes like App, About, Projects */}
      </main>
      <div>
        <div className="footer-line"></div>
        <Footer />
      </div>
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
        element:<Projects/>,
      },
      {
        path: "foodie",
        element: <Foodie/>
      },
      {
        path: "moviesGPT",
        element: <MoviesGPT/>
      },
      {
        path: "streamify",
        element: <Streamify/>
      }
    ]
  }
])

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;

