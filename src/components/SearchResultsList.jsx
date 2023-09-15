import React from "react";
import "./SearchResultsList.css";

const SearchResultsList = ({results, setResults, setSearchBarResults, setSearchInput}) => {

    return (

        <div className="results-list">

            {results.map((result) => {
                return (
                    <div key={result.id} className="search-result"
                        onClick={() => {
                            setResults([result]);
                            setSearchBarResults([]);
                            setSearchInput(`${result.name}: ${result.date_utc.slice(0, 10)}`)
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