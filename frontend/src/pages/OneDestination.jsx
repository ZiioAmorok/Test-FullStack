import "./OneDestination.css";
import { useContext, useEffect, useState } from "react";
import { DestinationsContext } from "../contexts/DestinationsContext";
import { useParams } from "react-router-dom";
import DestinationsNavigation from "../components/DestinationsNavigation";
import { BsAirplane } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

const OneDestination = () => {
  const { id } = useParams();
  const { destinations } = useContext(DestinationsContext);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollHeight(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  if (!destinations || destinations.length === 0) {
    return <p>Loading...</p>;
  }

  const selectedDestination = destinations.find((one) => one._id === id);

  if (!selectedDestination) {
    return <p>Destination not found</p>;
  }

  return (
    <>
      {/* Dynamický progress bar */}
      <div className="scrollPath"></div>
      <div className="progressbar" style={{ height: `${scrollHeight}%` }}></div>
      <BsAirplane className="scrollIcon" style={{ top: `${scrollHeight}%` }} />

      <section>
        <div className="video-hero">
          <DestinationsNavigation />
          <video
            className="video-background"
            src={`/videos/${selectedDestination.name}.mp4`}
            autoPlay
            loop
            muted
          />
          <div className="hero-content">
            <h2>{selectedDestination.name}</h2>
            <p>{selectedDestination.rating}  <FaStar /></p>
          </div>
        </div>
      </section>

      <div className="blurBorder" />

      <section className="section-aboutdes">
        <div className="about-dest">
          <h1>{selectedDestination.description}</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nisi architecto, delectus eveniet laborum qui mollitia impedit porro
            culpa, optio minima blanditiis harum at a, aperiam similique minus
            beatae sint! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Deleniti, dolorem sunt libero modi nam voluptatum. Dolores
            fugiat rem cum ab animi quidem temporibus voluptatibus architecto.
            Repellendus nam optio libero qui? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Distinctio quis iure ipsum, fuga
            incidunt porro odio ab ut voluptas deleniti nobis beatae a maiores
            repudiandae enim deserunt dolore placeat soluta. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odio fugit voluptatum, animi
            cum eveniet voluptatem omnis nostrum maxime possimus delectus modi
            iure perferendis facere ea. Asperiores tenetur totam vitae natus!
          </p>
        </div>
      </section>
    </>
  );
};

export default OneDestination;
