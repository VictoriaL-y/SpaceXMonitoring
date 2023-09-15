import React from "react";
import "./SearchResultsList.css";

const SearchResultsList = (results) => {
    return (

        <div className="results-list">

            {results.results.map((result) => {
                console.log(result)
                return (
                    <div key={result.id} className="search-result"
                        onClick={() => alert(`You clicked on ${result.name}`)}
                    >
                        {result.name + ": " + result.date_utc.slice(0, 10)}
                    </div>
                )
            })}

        </div>

    )
}
export default SearchResultsList;