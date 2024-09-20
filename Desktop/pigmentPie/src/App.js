import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ColorSchemeToggle from './Components/ColorSchemeToggle';
import ReactDOM from "react-dom/client";
import Header from './Components/Header';
import About from './Components/About';

function App() {
  return (
    <div className="min-h-screen">

      <div>
        <Header/>
      </div>      
      <Outlet/>
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold dark:text-gray-400">Hi there!!</h1>
      <p className="dark:text-gray-400">This is my new website in making..</p>
    </div>
  </div>
  );
}

function RootLayout() {
  return (
    <div>
      <App />
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
    ]
  }
])

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;

