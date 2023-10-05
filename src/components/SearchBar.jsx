import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import "./SearchBar.css";

const SearchBar = ({ spaceXdata, setSearchBarResults, setResults, searchInput, setSearchInput, setIsFocused, setIsActive }) => {

    const [searchResults, setSearchResults] = useState([]);

    const getFilteredData = (value) => {
        // we should get a response (data) from the API
        if (spaceXdata.length > 0) {
            const results = spaceXdata.filter((launch) => {
                if (value &&
                    launch &&
                    launch.name) {
                    // user entered only the launch's name or date
                    if (value.split(":").length === 1) {
                        return (
                            launch.name.toLowerCase().includes(value.toLowerCase()) ||
                            launch.date_utc.slice(0, 10).includes(value)
                        );
                        // user entered only the launch's name with ":" sign at the end
                    } else if (value.substr(value.length - 1) === ':') {
                        return (
                            launch.name.toLowerCase().includes(value.toLowerCase().split(":")[0])
                        );
                    } else {
                        // user entered the name and the date in ths format: "name: YYYY-MM-DD"
                        return (
                            launch.name.toLowerCase().includes(value.toLowerCase().split(":")[0]) &&
                            launch.date_utc.slice(0, 10).includes(value.split(": ")[1])
                        );
                    };
                };
            });

            setSearchResults(results); // get the search result: successful or not
            setSearchBarResults(results); // set the dropdown menu's options
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        getFilteredData(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            // get a list with all the launches if the search field was empty
            if (searchInput === "") {
                setResults(spaceXdata);
                setIsActive(true);
            }
            // the search was unsuccessful, get a message
            else if (searchResults.length === 0) {
                console.log("Nothing was found");
                setResults(["false"]);
                setIsActive(false);

            // if we have already chosed the search result from the dropdown menu
            } else if (searchInput.split(": ").length === 2) {
                setIsActive(false);

            // get the search's result
            } else {
                setResults(searchResults);
                setIsActive(false);
            }
            setSearchBarResults([]); // the search was completed, so clear the dropdown menu
        }
    }

    const onRemove = () => {
        setSearchInput(""); // clear the searchBar input field
        setSearchBarResults([]); // clear the dropdown menu
        setResults(spaceXdata); // show all the launches (an unfiltered response from the API)
        setIsActive(true);
    }

    return (
        <div className="input-wrapper">
            <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />

            <input
                id="searchLaunch"
                name="searchLaunch"
                placeholder="Search here..."
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={searchInput} />

            <button onClick={onRemove} className={!searchInput ? "notDisplayed" : null}>
                <FontAwesomeIcon icon={faXmark} />
            </button>

        </div>
    )
}

export default SearchBar;