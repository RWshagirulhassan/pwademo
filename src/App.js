import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/authcontext";
import { useContext } from "react";
import HomePage from "./screens/HomePageScreen";
import SignInUp from "./screens/SignInUp";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/authentication" />;
    }

    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <HomePage></HomePage>
              </ProtectedRoute>
            }
          />
          <Route path="authentication" element={<SignInUp></SignInUp>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
