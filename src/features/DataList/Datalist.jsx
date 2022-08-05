import React from "react";
import { useSelector } from "react-redux";
import {nanoid}  from "nanoid";


export default function DataList(){
    const spending = useSelector(state=>state.spending) ;

    const category = new Set (spending.map(spend=>spend.category)) ;

    // let result = category.map(name=>{
    //     return <option key = {nanoid()}>{name}</option> ;
    // })

    // let res = Array.from(category) ;

    // let result = res.map(name=>{
    //         return <option key = {nanoid()}>{name}</option>
    //     })
        
        let result = Array.from(category).map(name=>{
            return <option key = {nanoid()}>{name}</option>
            
    })


    return(<datalist id = "category">
        {result}
    </datalist>)
}