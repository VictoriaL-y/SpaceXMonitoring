
import React, { useEffect, useState } from "react";
import "./FilterButtons.css"

const FilterButtons = ({ spaceXdata, setResults, isFocused, isActive, setIsActive, searchInput, setSearchInput }) => {

    const buttonsInfo = [
        {
            text: "All",
            active: true
        },
        {
            text: "Successful",
            active: false
        },
        {
            text: "Upcoming",
            active: false
        },
        {
            text: "Failed",
            active: false
        }
    ]

    const [buttonsToggleInfo, setButtonsToggleInfo] = useState(buttonsInfo);

    // go through all the filter buttons, adjust the clicked one as active and others as inactive
    const toggleButton = (buttonText) => {
        if (buttonText && buttonsToggleInfo.length > 0) {

            const newButtonsArr = buttonsToggleInfo.map(button => {
                if (button.text === buttonText) {
                    return (
                        {
                            "text": button.text,
                            "active": true
                        }
                    )
                } else {
                    return (
                        {
                            "text": button.text,
                            "active": false
                        }
                    )
                }
            })
            setButtonsToggleInfo(newButtonsArr)
        }
    }

    // filter the API's response to get an array of the specific launches: all or success, or upcoming or failed
    const getFilteredData = (text) => {

        text === buttonsInfo[0].text && setResults(spaceXdata)
        text === buttonsInfo[1].text && setResults(spaceXdata.filter((launch) => {
            return (
                launch.success === true
            )
        }))
        text === buttonsInfo[2].text && setResults(spaceXdata.filter((launch) => {
            return (
                launch.upcoming === true
            )
        }))
        text === buttonsInfo[3].text && setResults(spaceXdata.filter((launch) => {
            return (
                launch.success === false && launch.upcoming === false
            )
        }))

    }

    useEffect(() => {
        if (isFocused) {
            toggleButton(buttonsInfo[0].text); //  set the "All" button's status as true when you start searching
            !searchInput && setResults(spaceXdata); // show all the lauches on the page when you start searching
        }

    }, [isFocused]);

    return (
        <div className="row container-fluid p-0 m-0 row-buttons">
            <div className="col-lg-4"></div>

            {buttonsToggleInfo.map((button, id) => {
                return <button
                    key={id}
                    className={`col-lg-1 filterButton ${isActive && button.active}`}
                    value={button.text}
                    onClick={() => {
                        getFilteredData(button.text);
                        toggleButton(button.text);
                        setSearchInput("");
                        setIsActive(true); // set the button's status as active
                    }
                    }
                >
                    {button.text}
                </button>

            })}

            <div className="col-lg-4"></div>
        </div>
    )
}

export default FilterButtons;