import React from "react";


const Section = ({children ,className,...rest}) => {
    return(
        <div className={`position-relative ${className}`}  {...rest} >
            {children}
        </div>
    )
}
export default Section;
