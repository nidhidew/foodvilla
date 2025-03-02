import "./App.css";
import AboutComponent from "./Components/AboutComponent";
import BodyComponent from "./Components/BodyComponent";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponents from "./Components/HeaderComponents";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Error } from "./Components/Error";
import ContactComponent from "./Components/ContactComponent";
import RestrauntPageComponent from "./Components/RestrauntPageComponent";

function App() {
  return (
    <>
      <HeaderComponents />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />
      },
      {
        path: "/about",
        element: <AboutComponent />
      },
      {
        path: "/contact",
        element: <ContactComponent />
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntPageComponent />
      }
    ]
  },
  
]);

export default App;
