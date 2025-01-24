import "./Destinations.css";
import { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import DestinationNav from "../components/DestinationsNavigation";
import axios from "axios";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const destinationsContainerRef = useRef(null);
  const showMoreRef = useRef(null);

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

  const handleShowMore = () => {
    setVisibleCount(destinations.length);
    setTimeout(() => {
      if (showMoreRef.current) {
        showMoreRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleShowLess = () => {
    setVisibleCount(6);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="destinations">
      <DestinationNav />
      <div className="destinations-container" ref={destinationsContainerRef}>
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

      <div className="show-btns" ref={showMoreRef}>
        {visibleCount >= destinations.length ? (
          <button onClick={handleShowLess}>
            Show Less <FaArrowUp className="arrow-btn-less" />
          </button>
        ) : (
          <button onClick={handleShowMore}>
            Show More <FaArrowDown className="arrow-btn" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Destinations;
