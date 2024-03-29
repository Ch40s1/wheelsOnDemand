import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import Home from './pages/Home';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import ProductInfo from './pages/ProductInfo.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Finish from './pages/Finish.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      // {

      //   path: '/location',
      //   element: <LocationPage />
      // },
      {
        path: '/product-info',
        element: <ProductInfo />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },{
        path: '/About',
        element: <About />
       }, {
          path: '/Contact',
          element: <Contact />
        },
        {
          path: '/finish',
          element: <Finish />
        },
      //     path: '/Cart',
      //     element: <Cart />
      // }


    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
