import "./Destinations.css";
import { useContext, useRef, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import DestinationNav from "../components/DestinationsNavigation";
import { DestinationsContext } from "../contexts/DestinationsContext";

const Destinations = () => {
  const { destinations, loading, error } = useContext(DestinationsContext);
  const [visibleCount, setVisibleCount] = useState(6);
  const destinationsContainerRef = useRef(null);
  const showMoreRef = useRef(null);

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
    <div>
      <DestinationNav />
    <section className="bg-destinations">
    <svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2400 800">
      <g fill="hsl(0, 0.00%, 8.10%)" transform="matrix(1,0,0,1,0,-194.62789916992188)">
      <path d="M 0 350.1476795040187 Q 450 588.4182266791299 600 384.38774154963056 Q 1050 531.754739413468 1200 385.14716312714654 Q 1650 552.5047952134322 1800 355.5941064668444 Q 2250 487.84247057539733 2400 253.25576253623615 L 2400 800 L 0 800 L 0 413.86456566755646 Z" transform="matrix(1,0,0,1,0,134)" opacity="0.05"></path>
      <path d="M 0 350.1476795040187 Q 450 588.4182266791299 600 384.38774154963056 Q 1050 531.754739413468 1200 385.14716312714654 Q 1650 552.5047952134322 1800 355.5941064668444 Q 2250 487.84247057539733 2400 253.25576253623615 L 2400 800 L 0 800 L 0 413.86456566755646 Z" transform="matrix(1,0,0,1,0,268)" opacity="0.53"></path>
      <path d="M 0 350.1476795040187 Q 450 588.4182266791299 600 384.38774154963056 Q 1050 531.754739413468 1200 385.14716312714654 Q 1650 552.5047952134322 1800 355.5941064668444 Q 2250 487.84247057539733 2400 253.25576253623615 L 2400 800 L 0 800 L 0 413.86456566755646 Z" transform="matrix(1,0,0,1,0,402)"></path>
  </g>
</svg>

      <h1 className="destinations-heading">Discover Our Destinations</h1>
    </section>
    <section>
      <div className="destinations">
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
              <img src={destination.image} alt={destination.name} loading="lazy"/>
              <div className="card__content">
                <h2 className="card__title">{destination.name}</h2>
                <p>
                  <FaStar />
                  {destination.rating}
                </p>
                <Link to={`/one/${destination._id}`}>
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
    </section>
    </div>
  );
};

export default Destinations;
