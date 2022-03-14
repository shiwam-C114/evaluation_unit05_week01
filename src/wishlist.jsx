import React, { useState } from 'react';


function Wishlist() {

    let [items, setItem] = useState([])
    
    function display() {
        console.log(items);  
        setItem(document.getElementById("item").value)
        let temp = document.createElement("div")
        temp.textContent = items
        console.log(temp.textContent);
        let D = document.getElementById("disp") 
        D.appendChild(temp)
    }

 return(
     <div>
         <h1>Wishlist</h1>
         <input id='item' type="text" />
         <button onClick={display}>ADD</button>
         <div id='disp' ></div>
     </div>
 )   
}

export {Wishlist}