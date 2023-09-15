import React from "react";

const FilterButton = (text) => {
    return (
        <button className='col-lg-2 filterButton'>{text.text}</button>
    )
}

export default FilterButton;