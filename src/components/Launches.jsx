import React, { useEffect } from "react";
import LaunchCard from "./LaunchCard";
import "./Launches.css";

const Launches = ({ spaceXdata, setSpaceXdata, filterResult }) => {

    const url = "https://api.spacexdata.com/latest/launches";

    useEffect(() => {

        const dataFetch = async () => {
            try {
                await fetch(url, { method: "GET" })
                    .then(response => response.json())
                    .then(res => {
                        // reverse to get a list, starting with the most recent launches
                        setSpaceXdata(res.reverse());
                    });
            }
            catch (err) {
                console.log("Couldn't get data from SpaceX API, the error is " + err);
            }
        };
        dataFetch();
    }, []);

    return (
        <>
            {/* if the search or filtering was successful */}
            {filterResult.length > 0 && filterResult[0] !== "false" &&
                filterResult.map(data => (
                    <LaunchCard data={data} key={data.id} />
                ))}
                
            {/* default results, all the launches. They are also shown if the search was empty */}
            {spaceXdata.length > 0 && filterResult.length === 0 &&
                spaceXdata.map(data => (
                    <LaunchCard data={data} key={data.id} />
                ))
            }
            {/* in case if nothing was found after the search */}
            {filterResult.length === 1 && filterResult[0] === "false" &&
                <p className="found-nothing text-center">Nothing was found</p>
            }
        </>
    )
};

export default Launches;