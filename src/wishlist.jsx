import React, { useState } from 'react';
import { Wishes } from './Wishes';


function Wishlist() {

    let [items, setItem] = useState([])

    // function addItem() {
    //     if
    // }

    let flag = true
    function visbilty() {
        let txtInp = document.getElementById("item")
        let btn = document.getElementById("btn")
        let msg = document.getElementById("msg")
        if (flag) {
            txtInp.style.visibility = "visible"
            btn.style.visibility = "visible"
            msg.style.visibility = "hidden"
            flag = false
        }else {
            txtInp.style.visibility = "hidden"
            btn.style.visibility = "hidden"
            msg.style.visibility = "visible"
            flag = true
        }
    }
    visbilty()
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
         <button id='btn' onClick={display}>ADD</button>
         <p id='msg'></p>
         <Wishes items= {items} />
     </div>
 )   
}

export {Wishlist}