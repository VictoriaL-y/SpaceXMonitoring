import React from "react";
import "./SearchResultsList.css";

// a dropdown menu with the launches according to the search
const SearchResultsList = ({ results, setResults, setSearchBarResults, setSearchInput, setIsActive }) => {

    return (

        <div className="results-list">

            {results.map((result) => {
                return (
                    <div key={result.id} className="search-result"
                    // choose one specific launch with a click
                        onClick={() => {
                            setResults([result]); // assign this launch as the search's result
                            setSearchBarResults([]);
                            setSearchInput(`${result.name}: ${result.date_utc.slice(0, 10)}`); // write the launch's name and date in the search bar
                            setIsActive(false); // set the button (All) as inactive
                        }}
                    >
                        {result.name + ": " + result.date_utc.slice(0, 10)}
                    </div>
                )
            })}

        </div>

    )
}
export default SearchResultsList;