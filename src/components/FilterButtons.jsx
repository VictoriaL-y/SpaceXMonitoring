import React from "react";
import FilterButton from "./FilterButton";

const FilterButtons = () => {
    const buttonsInfo = [
        {
            text: "All",
        },
        {
            text: "Successful",
            success: true,
            upcoming: false
        },
        {
            text: "Upcoming",
            success: false,
            upcoming: true
        },
        {
            text: "Failed",
            success: false,
            upcoming: false
        }
    ]
    return (
        <div className="row container-fluid p-0 m-0">
            <div className="col-lg-2"></div>
            {buttonsInfo.map((button, id) => {
                console.log(id)
                return <FilterButton key={id} text={button.text}/>
            })}
           
            <div className="col-lg-2"></div>
        </div>
    )
}

export default FilterButtons;