import React from "react";
import "./Launches.css";

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
                <div className="col-lg-4 center">

                    <img src={data.links.patch.small
                        || "https://res.cloudinary.com/devqm7qmb/image/upload/ar_1:1,bo_5px_solid_rgb:000000,c_fill,g_auto,q_70,r_max,w_1000/v1694817621/andy-hermawan-bVBvv5xlX3g-unsplash_rmjrqq_902931.jpg"
                    } alt={data.name}></img>

                </div>
                <div className="col-lg-7 launch-info">
                    <h3 className="boldString">{data.name}</h3>
                    <p>
                        {data.success
                            ? <span className="successful">successful</span>
                            : data.upcoming
                                ? <span className="upcoming">upcoming</span>
                                : <span className="failed">failed</span>}
                    </p>
                    <p>
                        {data.links.youtube_id && <a href={`https://www.youtube.com/watch?v=${data.links.youtube_id}`} target="_blank">Youtube</a>}
                        {data.links.wikipedia && <a href={data.links.wikipedia} target="_blank">Wikipedia</a>}
                        {data.links.reddit.launch && <a href={data.links.reddit.launch} target="_blank">Reddit</a>}
                    </p>

                    {(data.failures.length > 0)
                        ? <p>
                            <span className="boldString">Reason: </span>{data.failures[0].reason}</p>
                        : null}
                    <p>
                        <span className="boldString">{changeTimeFormat(data.date_utc)}</span>
                    </p>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    )
}

export default LaunchCard;
