import React , {useState} from "react" ;
import { useDispatch} from "react-redux" ;
import CalendarV2 from "../../../calendar/Calendar.ver2" ;
import Modal from "../../../modal/Modal";
import { chooseInterval , resetInterval } from "../../../Filter/dateFilter" ;
import styles from './dateFilter.module.css' ;

export default function DateFilter (){

// const currentDate = useSelector(state=>state.dateFilter) ;
const dispatch = useDispatch() ;

const [visible , changeVisible] = useState(false) ;



const [date , setDate] = useState('') ;
const [dateArr , setDateArr] = useState([]) ;
const [interval , setInterval] = useState([]) ;

function dateInterval(date){
    let dateArrCopy = Object.assign([],dateArr) ;
    dateArrCopy.push(date) ;
    if (dateArrCopy.length>2) dateArrCopy.splice(0,1) ;
    let result = dateArrCopy.map(item=>{
        return {timestamp:new Date(`${item[2]}:${item[1]}:${item[0]}`).getTime() ,
                date:prettyDate(item) ,}
    })
    result.sort((a,b)=>a.timestamp - b.timestamp) ;
    setInterval(result) ;
    setDateArr(dateArrCopy) ;
}

function prettyDate(date){
    return (`${String(date[0]).length===1?"0"+date[0]
    :date[0]}:${String(date[1]).length===1?"0"+(date[1]+1)
    :date[1]+1}:${date[2]}`) ;
}


function worker(){
    if (!interval) {
        reset() ;
        return;
    }

    let result = [] ;
    if (interval.length === 1) interval[1] = interval[0] ;
    interval.forEach(item=>result.push(item.timestamp)) ;
    dispatch(chooseInterval(result)) ;
    let dateForShow =[] ;   /// поменять название
    interval.forEach(item=>{
        dateForShow.push(item.date)
    });

    if(dateForShow.length<2||dateForShow[0] === dateForShow[1] ){
        setDate(dateForShow[0] )
    }else{
        setDate(`${dateForShow[0]} - ${dateForShow[1]}`) ;
    }
    changeVisible(false) ;
}

function reset(){
    setDate('') ;
    setInterval([]) ;
    setDateArr([]) ;
    dispatch(resetInterval()) ;
    changeVisible(false) ;
}

let component = <>
<CalendarV2
intervalArr = {dateArr}
setDay={dateInterval}/>
<div className = {styles.btnBlock}>
<button onClick = { worker }>Сохранить</button>
<button onClick = { reset }>Сброс</button>
</div>

</>

    return (<>
    {date?date:'за всё время'}
    <button className ={styles.button} onClick={()=>changeVisible(true)}>
        ...
    </button>
    <Modal
    visible = {visible}
    changeVisible = {changeVisible}
    children = {component}
    />
    </>
    )
}