import React , {useState , useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import { nanoid } from "nanoid";
import { chooseCategory } from "../../../Filter/categoryFilter" ;
import styles from "./categoryFilter.module.css" ;
// import './categoryFilter.css' ;


export default function CategoryFilter (){
const spendingData = useSelector(state=>state.spending) ;

const dispatch = useDispatch() ;

let cat = new Set(spendingData.map(item=>{
    return item.category}) ) ;

let categories = Array.from(cat) ;

categories.unshift('всё') ; 

const [chosen , setChosen] = useState('всё') ;

const [hidden , setHidden] = useState(true) ;


useEffect (()=>{
    if(!categories.find(cat=>cat === chosen)){
        setChosen('всё') ;
        dispatch(chooseCategory('всё')) ;
    }
},[chosen , dispatch , categories]) ;
   

function changeCategory(e){
        console.log(e.target.innerText) ;
        setChosen(e.target.innerText) ;
        dispatch(chooseCategory(e.target.innerText)) ;
        // setChosen(e.target.value) ;
        // dispatch(chooseCategory(e.target.value)) ;
        setHidden(true) ;
}

// let children =


return <span>
    {chosen} <button>...</button>
</span>


//  return <ul>
//     <li key = {nanoid()} onClick ={()=>setHidden(!hidden)} >{chosen}</li>
//    {categories.map((item , index)=>{
//     return <li key = {index} className={hidden ?styles.hidden:styles.visible} onClick = {changeCategory}>
//         {item}
//     </li>
//    })} 
// </ul>


// return( <select 
//     // className = {styles.select}
//     className = 'select select-bordered select-sm w-full max-w-xs'
//      onChange= {changeCategory} 
// >
//     <option defaultValue = {chosen}  hidden> {chosen} </option>
//     {categories.map(item=>{
//         return <option className={styles.option} key={nanoid()} value={item}>{item}</option>
// })}
// </select>)
}