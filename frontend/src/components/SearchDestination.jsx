import "./SearchDestination.css"
import { VscSearch } from "react-icons/vsc";


const SearchDestination = () => {
  return (
    <div className="search-destination-container">
        <label htmlFor="search"><VscSearch className="search-icon" /></label>
        <input type="text" placeholder="Search..." className="search-destination" id="search" />
    </div>
  )
}

export default SearchDestination