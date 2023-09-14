import React from "react";

const LaunchCard = ({ data }) => {

    return (
        <div className="card">
            <h1>{data.name}</h1>
            <p>{data.flight_number}</p>
            <p>{data.date_utc}</p>
        </div>
    )
}

export default LaunchCard;