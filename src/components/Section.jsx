import React from 'react';

function Section({light}, props) {
    return (
        <div className={light ? "section-light-colours" : "section-dark-colours"}>
            
        </div>
    )
}

export default Section
