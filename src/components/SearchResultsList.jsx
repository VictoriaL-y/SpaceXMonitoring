import React from "react";
import "./SearchResultsList.css";
import CheckClickOutside from "./CheckClickOutside";

const SearchResultsList = ({results, setResults, setSearchBarResults}) => {
    
    return (
        <CheckClickOutside onClickOutside={() => setSearchBarResults([])}>

        <div className="results-list">
            

            {results.map((result) => {
                return (
                    <div key={result.id} className="search-result"
                        onClick={() => {
                            setResults([result]);
                            setSearchBarResults([]);
                        }}
                    >
                        {result.name + ": " + result.date_utc.slice(0, 10)}
                    </div>
                )
                
            })}

        </div>
        </CheckClickOutside>

    )
}
export default SearchResultsList;