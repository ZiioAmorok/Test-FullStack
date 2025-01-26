import React, { createContext, useState, useEffect } from "react";
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
        setError("Error fetching destinations");
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
