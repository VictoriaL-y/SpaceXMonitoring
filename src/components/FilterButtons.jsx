
import React from "react";

const FilterButtons = ({ spaceXdata, setResults }) => {

    const buttonsInfo = [
        {
            text: "All"
        },
        {
            text: "Successful"
        },
        {
            text: "Upcoming"
        },
        {
            text: "Failed"
        }
    ]

    const getFilteredData = (text) => {

        {(text === buttonsInfo[0].text) && setResults(spaceXdata)}
        {text === buttonsInfo[1].text && setResults(spaceXdata.filter((launch) => {
            return (
                launch.success === true
            )
        }))}
        {text === buttonsInfo[2].text && setResults(spaceXdata.filter((launch) => {
            return (
                launch.upcoming === true
            )
        }))}
        {text === buttonsInfo[3].text && setResults(spaceXdata.filter((launch) => {
            return (
                launch.success === false && launch.upcoming === false
            )
        }))}
        
    }

    return (
        <div className="row container-fluid p-0 m-0 row-buttons">
            <div className="col-lg-2"></div>

            {buttonsInfo.map((button, id) => {
                return <button 
                key={id}
                className='col-lg-2 filterButton'
                onClick={() => getFilteredData(button.text)}
                >
                    {button.text}
                </button>
                
            })}

            <div className="col-lg-2"></div>
        </div>
    )
}

export default FilterButtons;