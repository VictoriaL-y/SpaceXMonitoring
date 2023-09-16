import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import "./SearchBar.css";

const SearchBar = ({ spaceXdata, setSearchBarResults, setResults, searchInput, setSearchInput, setIsFocused, setEnterClicked }) => {

    const [searchResults, setSearchResults] = useState([]);

    const getFilteredData = (value) => {
        if (spaceXdata.length > 0) {
            const results = spaceXdata.filter((launch) => {
                return (
                    value &&
                    launch &&
                    launch.name &&
                    (launch.name.toLowerCase().includes(value.toLowerCase()) ||
                        launch.date_utc.slice(0, 10).includes(value))
                );
            });

            !value ? setSearchResults(spaceXdata)
                : setSearchResults(results);

            setSearchBarResults(results);

        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        getFilteredData(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (searchResults.length === 0) {
                console.log("Nothing was found");
                setResults(["false"]);
            } else {
                setResults(searchResults);
            }
            setSearchBarResults([]);

            searchInput ? setEnterClicked(true) : setEnterClicked(false);
        }
    }

    const onRemove = () => {
        setSearchInput("");
        setSearchBarResults([])
        setResults(spaceXdata);
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