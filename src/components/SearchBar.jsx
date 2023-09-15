import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./SearchBar.css";

const SearchBar = ({ spaceXdata, setResults }) => {
    const [searchInput, setSearchInput] = useState("");

        const getFilteredData = (value) => {
        if(spaceXdata.length > 0) {
            const results = spaceXdata.filter((launch) => {
                return (
                    value &&
                    launch &&
                    launch.name &&
                    (launch.name.toLowerCase().includes(value.toLowerCase()) ||
                    launch.date_utc.slice(0, 10).includes(value))
                );
            });
        
            setResults(results)
            console.log(results)
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        getFilteredData(e.target.value)
    };


    return (
        <div className="input-wrapper">
            <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />

            <input
            name="searchLaunch"
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />

        </div>
    )
}

export default SearchBar;