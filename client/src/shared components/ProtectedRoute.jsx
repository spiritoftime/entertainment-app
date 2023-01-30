import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Bookmarks from "../pages/Bookmarks Page/Bookmarks";
import LoadingSpinner from "./LoadingSpinner";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
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
      // .then((res) => {
      if (data.msg !== "Authorized") {
        navigate("/login");
      }
      // });
    };
    checkAuth();
  }, []);
  if (isVerifying) return <LoadingSpinner />;
  return children;
};

export default ProtectedRoute;
