import React, { useState } from 'react';


function Vegetable(props) {

    const [name] = useState(props.name)
    const [qnt, setQnt] = useState(+props.qnt)
    function changeQnt(x) {
        console.log(typeof qnt);
        setQnt(qnt+ x)
    }
    return(
        <div>
            <h2>{name}- {qnt} kg </h2>
            <button onClick={()=>changeQnt(1) }>+</button>
            <button onClick={()=>changeQnt(-1) }>-</button>
        </div>
    )
}

export {Vegetable}