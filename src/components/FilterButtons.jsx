
import React, { useEffect, useState } from "react";
import "./FilterButtons.css"

const FilterButtons = ({ spaceXdata, setResults, isFocused, enterClicked, setEnterClicked, setSearchInput }) => {

    const buttonsInfo = [
        {
            text: "All",
            active: "true"
        },
        {
            text: "Successful",
            active: "false"
        },
        {
            text: "Upcoming",
            active: "false"
        },
        {
            text: "Failed",
            active: "false"
        }
    ]

    const [buttonsToggleInfo, setButtonsToggleInfo] = useState(buttonsInfo);

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
            toggleButton(buttonsInfo[0].text);
            setResults(spaceXdata);
            setEnterClicked(false);
        }

    }, [isFocused]);

    return (
        <div className="row container-fluid p-0 m-0 row-buttons">
            <div className="col-2 col-lg-4"></div>

            {buttonsToggleInfo.map((button, id) => {
                return <button
                    key={id}
                    className={`col-2 col-lg-1 filterButton ${!enterClicked && button.active}`}
                    value={button.text}
                    onClick={() => {
                        getFilteredData(button.text);
                        toggleButton(button.text);
                        setSearchInput("");
                        setEnterClicked(false);
                    }
                    }
                >
                    {button.text}
                </button>

            })}

            <div className="col-2 col-lg-4"></div>
        </div>
    )
}

export default FilterButtons;