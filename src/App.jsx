
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from './components/Contact';
import Error from './components/Error';

// Create a router with error handling
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />, // Handle errors here
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />, // Handle errors here
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />, // Handle errors here
  },
  {
    path: "*",
    element: <Error />, // Catch-all route for 404 errors
  }
]);

function App() {
  return (
    <div className="app">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
