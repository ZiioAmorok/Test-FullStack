import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navigation";

const Home = () => {
const isLoggedIn = sessionStorage.getItem('isLoggin');

  return (
    <div className="home">
      <Navbar />
      <section >
        <div className="welcome">
          <h1>Welcome to Traveling Blog. <i className="fa-solid fa-earth-americas"></i> </h1>
          <p>Find your favorite destinations around the world.</p>
          {!isLoggedIn ? <Link to="/auth">
            <button className="authBtn" role="button">
              <span className="text">
                <i className="fa-solid fa-chevron-right"></i> Login / Register
              </span>
            </button>
          </Link> : null}
          
        </div>
      </section>

      <section>
        
      </section>
    </div>
  );
};

export default Home;
