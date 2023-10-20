import { useContext } from "react";
import Navbar from "../components/NavBar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authcontext";

const RootLayout = () => {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/welcome" />;
    }

    return children;
  };

  return (
    <ProtectedRoute>
      <div className=" bg-[#02030C] h-screen w-screen">
        <Navbar />
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default RootLayout;
