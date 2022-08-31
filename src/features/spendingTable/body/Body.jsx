import { nanoid } from "nanoid";
import React ,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteSpend , updateSpendings } from "../../spendingData/spendingDataSlice" ;
import styles from "./body.module.css" ;


export default function Body (){
    const spendingData = useSelector(state=>state.spending) ;
    const dateFilter = useSelector(state=>state.dateFilter) ;
    const categoryFilter = useSelector(state=>state.categoryFilter) ;
    const dispatch = useDispatch() ;

    let spendingMain = Object.assign([],spendingData) ;

    const [isEdit , setEdit] = useState(null) ;
    const [name , setName] = useState(null) ;
    const [category , setCategory] = useState(null) ;
    const [cost , setCost] = useState(null) ;

    function startEdit(index){
        setEdit(index) ;
        let target = spendingMain[index] ;
        setName(target.name);
        setCategory(target.category);
        setCost(target.cost);
    }

    function saveSpend (index){   // делать это в слаисе или в компоненте ? 
        let edited = {...spendingMain[index] , 'name':name , 'category':category , 'cost':cost } ;
        spendingMain.splice(index,1 ,edited) ;
        setEdit(null) ;
        dispatch(updateSpendings(spendingMain)) ;
    }

    let totalCost = 0 ;

    let result  = spendingMain.reduce((acc , spend , index)=>{
        if (categoryFilter === 'всё' || categoryFilter === spend.category){
        if (spend.timestamp>=dateFilter[0]&&spend.timestamp<=dateFilter[1]){
            let date = `${String(spend.date[0]).length===1?"0"+spend.date[0]
                 :spend.date[0]}:${String(spend.date[1]).length===1?"0"+(spend.date[1]+1)
                 :spend.date[1]+1}:${spend.date[2]}` ;
            
        totalCost  +=Number(spend.cost) ;  
        let output ;

            switch(isEdit){
                case index :
                   output =  <tr key = {isEdit}>
                    <td> {date} </td>
                    <td> <input value = {name} onChange ={(e)=>setName(e.target.value)} /> </td>
                    <td> <input value = {category} onChange = {(e)=>setCategory(e.target.value)} /> </td>
                    <td> <input value = {cost} onChange = {(e)=>setCost(e.target.value)} />  </td>
                    <td> <button onClick = {()=>saveSpend(index)}> V </button> </td>
                    </tr>
                    break ;
                    default :
                    output = <tr key = {nanoid()}>
                    <td> {date} </td>
                    <td> {spend.name} </td>
                    <td> {spend.category} </td>
                    <td> {spend.cost} </td>
                    <td> <button className = {styles.editBtn} onClick = {()=>startEdit(index)} > ... </button> </td>
                    <td> <button className = {styles.editBtn} onClick = {()=>dispatch(deleteSpend(index))}> X </button> </td>
                     </tr> ;
                     break ;
            }
           acc.push(output) ;
        }
    } ;
    return acc ;
    } , [])

    result.push(<tr key = {nanoid()}>
    <td> </td>
    <td> </td>
    <td> Итого </td>
    <td>{totalCost} </td>
     </tr> )
    
    return (<>{result}</> )

}