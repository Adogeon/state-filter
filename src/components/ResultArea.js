import React from 'react';
import StateLink from './StateLink';

const ResultArea = (props) => {
    return(
        <div className="resultArea">
            {
                props.data.map( (state,index) => <StateLink key={index} data={state}/> )
            }
        </div>
    )
}

export default ResultArea;