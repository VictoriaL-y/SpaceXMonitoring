import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import "./SearchBar.css";

const SearchBar = ({ spaceXdata, setSearchBarResults, setResults, searchInput, setSearchInput, setIsFocused }) => {

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
    }

//     useEffect(() => {
//         console.log('isFocused: ', isFocused);
// }, [isFocused]);

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