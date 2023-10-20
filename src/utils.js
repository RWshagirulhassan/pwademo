import { useContext } from "react";
import { AuthContext } from "./context/authcontext";

export function TokenLoader() {
  const { currentUser } = useContext(AuthContext);
  const token = currentUser.uid;
  return token;
}
