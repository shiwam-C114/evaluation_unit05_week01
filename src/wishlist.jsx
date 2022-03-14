import React, { useState } from 'react';
import { Wishes } from './Wishes';


function Wishlist() {

    let [items, setItems] = useState([])
    let [item, setitem] = useState("")

    // function addItem() {
    //     if
    // }

    let flag = false
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
    function display() {
        // console.log(items.length);
        if (items.length >= 2) {
            visbilty()
            
        }
        setItems(items.concat(item))
    }

 return(
     <div>
         <h1>Wishlist</h1>
         <input id='item' type="text" onChange={(e)=> setitem(e.target.value)} value={item} />
         <button id='btn' onClick={display}>ADD</button>
         <p id='msg' style={{visibility: "hidden"}}>You cannot add more than 3 items to wishlist</p>
         <Wishes items= {items} />
     </div>
 )   
}

export {Wishlist}