import "./OneDestination.css";
import { useContext } from "react";
import { DestinationsContext } from "../contexts/DestinationsContext";
import { useParams } from "react-router-dom";
import DestinationsNavigation from "../components/DestinationsNavigation";

const OneDestination = () => {
  const { id } = useParams();
  const { destinations } = useContext(DestinationsContext);

  if (!destinations || destinations.length === 0) {
    return <p>Loading...</p>;
  }

  const selectedDestination = destinations.find((one) => one._id === id);

  if (!selectedDestination) {
    return <p>Destination not found</p>;
  }
  
  return (
    <>
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
          <p>{selectedDestination.rating}</p>
        </div>
      </div>
      </section>

      <div className="blurBorder" />
      
      <section style={{minHeight:'100vh', backgroundColor:'black'}}>

      </section>
    </>
  );
};

export default OneDestination;
