import React from 'react';

const StateLink = (props) => {
    return(
        <div className="stateLink">
            <a href={props.data.link}>{props.data.name}</a>
        </div>
    )
}

export default StateLink;