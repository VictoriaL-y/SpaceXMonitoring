import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import "./SearchBar.css";

const SearchBar = ({ spaceXdata, setSearchBarResults, setResults, searchInput, setSearchInput }) => {
    // const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const getFilteredData = (value) => {
        if (spaceXdata.length > 0) {
            const results = spaceXdata.filter((launch) => {
                console.log(value !== "")
                return (
                    value &&
                    launch &&
                    launch.name &&
                    (launch.name.toLowerCase().includes(value.toLowerCase()) ||
                        launch.date_utc.slice(0, 10).includes(value))
                );
            });

            console.log(value)


            !value ? setSearchResults(spaceXdata)
                : setSearchResults(results);


            // {!value && setSearchResults([])}
            // console.log(searchResults)

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
            // getFilteredData(e.target.value);
            console.log(searchResults)
            if (searchResults.length === 0) {
                console.log("Nothing was found");
                setResults(["false"]);
            } else {
                setResults(searchResults);
            }
            setSearchBarResults([]);
        }
    }

    const onRemove = () => {
        setSearchInput("");
        setSearchBarResults([])
        setResults(spaceXdata);
        // console.log(searchInput)
    }


    return (
        <div className="input-wrapper">
            <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />

            <input
                name="searchLaunch"
                placeholder="Search here"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={searchInput} />
            <button onClick={onRemove} className={!searchInput ? "notDisplayed" : "displayed"}>
                <FontAwesomeIcon icon={faXmark} />
            </button>

        </div>
    )
}

export default SearchBar;