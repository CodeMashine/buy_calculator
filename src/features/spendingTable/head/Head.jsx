import React from "react" ;
import DateFilter from "./dateFilter/DateFilter";
import CategoryFilter from "./categoryFilter/CategoryFilter";
import styles from "./head.module.css"



export default function Head(){
    return (<tr>
        <th className = {styles.dateFilter}> <DateFilter /> </th>
        <th className = {styles.name}> name   </th>
        <th className = {styles.category}> <CategoryFilter />  </th>
        <th className = {styles.cost}> cost  </th>
        <th></th>
        <th></th>
    </tr>)
}