import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { IsAuthContext } from "../App";
import LoadingSpinner from "./LoadingSpinner";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(true);
  const { isAuth, setIsAuth } = useContext(IsAuthContext);
  useEffect(() => {
    const checkAuth = async () => {
      if (isAuth) {
        setIsVerifying(false);
        return;
      }
      const res = await fetch("http://127.0.0.1:5000/api/auth/verify", {
        method: "POST",
        body: JSON.stringify({
          email: sessionStorage.getItem("email"),
          token: sessionStorage.getItem("jwt"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setIsVerifying(false);
      // question: is there a better way of doing this, instead of having a state and showing a loading spinner?
      if (data.msg !== "Authorized") {
        navigate("/login");
      } else setIsAuth(true);
    };
    checkAuth();
  }, []);
  if (isVerifying) return <LoadingSpinner />;
  return children;
};

export default ProtectedRoute;
