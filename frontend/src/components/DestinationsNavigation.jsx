import "./DestinationsNavigation.css";
import SearchDestination from "./SearchDestination";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";

const DestinationsNavigation = () => {
  return (
    <div className="destinations-navigation">
      <Link to="/">
        <ImHome className="home-icon" />
      </Link>
      
      <SearchDestination />
    </div>
  );
};

export default DestinationsNavigation;
