import React, { useEffect } from "react";
import LaunchCard from "./LaunchCard";
import "./Launches.css";

const Launches = ({ spaceXdata, setSpaceXdata, filterButtonResult }) => {

    const url = "https://api.spacexdata.com/latest/launches";

    useEffect(() => {

        const dataFetch = async () => {
            try {
                await fetch(url, { method: "GET" })
                    .then(response => response.json())
                    .then(res => {
                        setSpaceXdata(res);
                        console.log(res);
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
            {filterButtonResult.length > 0 && filterButtonResult[0] !== "false" &&
                filterButtonResult.map(data => (
                    <LaunchCard data={data} key={data.id} />
                ))}

            {spaceXdata.length > 0 && filterButtonResult.length === 0 &&
                spaceXdata.map(data => (
                    <LaunchCard data={data} key={data.id} />
                ))
            }

            {filterButtonResult.length === 1 && filterButtonResult[0] === "false" &&
                <p className="found-nothing text-center">Nothing was found</p>
            }
        </>
    )
};

export default Launches;