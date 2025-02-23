import "./SearchDestination.css";
import { VscSearch } from "react-icons/vsc";
import { useState, useContext } from "react";
import { DestinationsContext } from "../contexts/DestinationsContext";
import { Link } from "react-router-dom"

const SearchDestination = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [search, setSearch] = useState("");
  const { destinations } = useContext(DestinationsContext);

  const filteredDestinations = destinations.filter((one) =>
    one.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSearchVisibility = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <div className="search-container">
      <button
        onClick={toggleSearchVisibility}
        className="search-icon-button"
        aria-label="Toggle search input"
      >
        <VscSearch className="search-icon" />
      </button>
      <div className="search-input-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className={`search-input ${isSearchVisible ? "active" : ""}`}
          id="search"
        />
        {search  && isSearchVisible ? (
          <ul className="search-results">
            {filteredDestinations.map((one) => (
              <Link key={one._id} onClick={()=> setIsSearchVisible(false)} to={`/one/${one._id}`}>
                <li >{one.name}</li>
              </Link>
            ))}
          </ul>
        ): null}
      </div>
    </div>
  );
};

export default SearchDestination;
