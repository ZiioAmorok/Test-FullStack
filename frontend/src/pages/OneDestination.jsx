import "./OneDestination.css";
import { useContext } from "react";
import { DestinationsContext } from "../contexts/DestinationsContext";
import { useParams } from "react-router-dom";
import DestinationsNavigation from "../components/DestinationsNavigation";

const OneDestination = () => {
  const { id } = useParams();
  const { destinations } = useContext(DestinationsContext);
  console.log(destinations);

  if (!destinations || destinations.length === 0) {
    return <p>Loading...</p>;
  }
  const selectedDestination = destinations.find((one) => one._id === id);

  if (!selectedDestination) {
    return <p>Destination not found</p>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(/${selectedDestination.name}.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <DestinationsNavigation />
      <h2>{selectedDestination.name}</h2>
      <p>{selectedDestination.rating}</p>
    </div>
  );
};

export default OneDestination;
