import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/api/users/auth", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (error) {
        setAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (auth === null) {
    return <div>Checking authentication...</div>;
  }


  return auth ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
