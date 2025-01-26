import "./OneDestination.css";
import { useContext } from "react";
import { DestinationsContext } from "../contexts/DestinationsContext";
import { useParams } from "react-router-dom";

const OneDestination = () => {
  const { id } = useParams();
  const { destinations } = useContext(DestinationsContext);
  document.body.style.background = `${destinations.image}`
  
  return (
    <div>
      {destinations
        .filter((one) => one._id === id)
        .map((oneDest) => (
          <div key={oneDest._id}>
            <h2>{oneDest.name}</h2>
            <p>{oneDest.rating}</p>
            <img src={oneDest.image} alt={oneDest.name} />
          </div>
        ))}
    </div>
  );
};

export default OneDestination;
