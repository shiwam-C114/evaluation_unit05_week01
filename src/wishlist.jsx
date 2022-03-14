import React, { useState } from 'react';


function Wishlist() {

    const [items, setItem] = useState("")
    function display() {  
        setItem(document.getElementById("item").value)
    }

 return(
     <div>
         <h1>Wishlist</h1>
         <input id='item' type="text" />
         <button onClick={display}>ADD</button>
         <div id='disp' >{items}</div>
     </div>
 )   
}

export {Wishlist}