import React, { useRef, useEffect } from "react";

// To clean SearchBar results
const CheckClickOutside = (props) => {
    const ref = useRef(null);
    const { onClickOutside, children } = props;

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [])

    if (!children) {
        return null;
    }
    return <div ref={ref}>{children}</div>;
}

export default CheckClickOutside;