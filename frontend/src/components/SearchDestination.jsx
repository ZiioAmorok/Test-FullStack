import "./SearchDestination.css";
import { VscSearch } from "react-icons/vsc";
import { useState } from "react";

const SearchDestination = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

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
      <input 
        type="text" 
        placeholder="Search..." 
        className={`search-input ${isSearchVisible ? "active" : ""}`} 
        id="search" 
      />
    </div>
  );
};

export default SearchDestination;
