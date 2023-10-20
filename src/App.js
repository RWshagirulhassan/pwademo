import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home";
import Dashboard from "./screens/Dashboard";
import PILAR from "./screens/Pilars";
import IBAR from "./screens/Ibar";
import Games from "./screens/Games";
import Community from "./screens/Community";
import RootLayout from "./screens/Rootlayout";
import SignInUp from "./screens/SignInUp";
import WelcomeScreen from "./screens/WelcomScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "PILAR",
        element: <PILAR />,
      },
      {
        path: "IBAR",
        element: <IBAR />,
      },
      {
        path: "Games",
        element: <Games />,
      },
      {
        path: "Community",
        element: <Community />,
      },
    ],
  },
  {
    path: "/welcome",
    element: <WelcomeScreen />,
  },
  {
    path: "/auth",
    element: <SignInUp />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
