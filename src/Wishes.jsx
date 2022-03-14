import React from "react";

function Wishes(props) {
    return(
        <div>
            {props.items.map((item=> <div>{item}</div>))}
        </div>
    )
}

export {Wishes}