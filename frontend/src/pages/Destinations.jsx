import "./Destinations.css";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import DestinationNav from "../components/DestinationsNavigation";
import axios from "axios";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await axios.get("/api/destinations");
        setDestinations(res.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching destinations");
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);


  return (
    <div className="destinations">
      <DestinationNav />
      <div className="destinations-container">
        {loading && (
          <div className="loader">
            <span className="shadow"></span>
            <span className="shadow"></span>
            <span className="shadow"></span>
            <span className="dot"></span>
            <span className="text">&nbsp;&nbsp;&nbsp;loading...</span>
          </div>
        )}
        {error && <p>{error}</p>}
        {destinations.slice(0, visibleCount).map((destination) => (
          <div className="destination-card" key={destination._id}>
            <img src={destination.image} alt={destination.name} />
            <div className="card__content">
              <h2 className="card__title">{destination.name}</h2>
              <p>
                <FaStar />
                {destination.rating}
              </p>
              <Link to="/">
                <MdArrowRightAlt className="arrow-right" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="show-btna">
        {visibleCount >= destinations.length ? (
          <button onClick={()=> setVisibleCount(6)}>Show Less</button>
        ) : (
          <button onClick={()=> setVisibleCount(destinations.length)}>Show More</button>
        )}
      </div>
    </div>
  );
};

export default Destinations;
