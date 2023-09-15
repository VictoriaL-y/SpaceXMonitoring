import React, { useEffect } from "react";
import LaunchCard from "./LaunchCard";

const Launches = ({ spaceXdata, setSpaceXdata }) => {

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
            {spaceXdata.length > 0 &&
                    spaceXdata.map(data => (
                        <LaunchCard data={data} key={data.id} />
                    ))
                }
        </>
    )
};

export default Launches;