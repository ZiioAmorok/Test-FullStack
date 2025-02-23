import axios from "axios";

const LoginLogoutBtn = () => {
const isLoggedIn = sessionStorage.getItem('isLoggin') === 'true';

  const handleLoginActions = async () => {
    if (isLoggedIn) {
      try {
        await axios.post("/api/users/logout", { withCredentials: true });
        sessionStorage.removeItem("isLoggin");
        window.location.href = "/";
      } catch (err) {
        console.error("Logout error", err);
      }
    } else {
      window.location.href = "/auth";
    }
  };

  return (
    <button className="login-logoutBtn" onClick={handleLoginActions}>
      {isLoggedIn ? "LOGOUT" : "LOGIN"}
    </button>
  );
};

export default LoginLogoutBtn;
