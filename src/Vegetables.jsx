import React from 'react';
import { Vegetable } from './vegetable';


function Vegetables() {
    return(
        <div>
            <h1>Vegetables</h1>
            <Vegetable name ="Tomatos" qnt= "10"/>
            <Vegetable name= "Potatos" qnt = "8" /> <Vegetable name ="Carrots" qnt= "5"/>
            <Vegetable name= "Onions" qnt = "7" />
            
        </div>
    )
}

export {Vegetables}