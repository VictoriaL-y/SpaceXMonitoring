import React from "react";

const LaunchCard = ({ data }) => {

    const changeTimeFormat = (launchDate) => {
        const date = new Date(launchDate).toString();
        let weekDay = date.slice(0, 3);
        let mainDate = date.slice(4, 15);
        let exactTime = date.slice(16, 21);

        const fullDate = weekDay + ", " + mainDate + " at " + exactTime;
        
        return fullDate;
    }

    return (
        <div className="card">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4">
                    <div>

                        <img src={data.links.patch.small
                            || "https://res.cloudinary.com/devqm7qmb/image/upload/ar_1:1,bo_5px_solid_rgb:000000,c_fill,g_auto,r_max,w_1000/v1694817621/andy-hermawan-bVBvv5xlX3g-unsplash_rmjrqq_902931.jpg"} alt={data.name}></img>

                    </div>
                </div>
                <div className="col-6 launch-info">
                    <h1>{data.name}</h1>
                    <p>{data.flight_number}</p>
                    <p>{changeTimeFormat(data.date_utc)}</p>
                </div>
                <div className="col-1"></div>

            </div>

        </div>
    )
}

export default LaunchCard;
