import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "./ButtonToTop.css";

const ButtonToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
        };

        window.addEventListener('scroll', handleScrollButtonVisibility);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility)
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <>
            {showButton && (
                <div className="scrollToTop">
                    <button
                        className="buttonToTop"
                        onClick={handleScrollToTop}
                    >
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
            )}
        </>
    )
}
export default ButtonToTop;