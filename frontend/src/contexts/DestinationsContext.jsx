import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import axios from "axios";

export const DestinationsContext = createContext();

export const DestinationsProvider = ({ children }) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await axios.get("/api/destinations");
        setDestinations(res.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  return (
    <DestinationsContext.Provider value={{ destinations, loading, error }}>
      {children}
    </DestinationsContext.Provider>
  );
};

DestinationsProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default DestinationsProvider;

