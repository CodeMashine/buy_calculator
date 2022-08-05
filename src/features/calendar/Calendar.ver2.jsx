import React , {useState} from "react";
import { nanoid } from "nanoid";
import monthFunc from "./month";
import today , { month ,year } from "../day/today" ;
import styles from './CalendarStyle.module.css' ;


export default function CalendarV2( {intervalArr = false , setDay , changeVisible=false}) {

    let [mon , setMon] = useState(month) ;
    let [annum , setAnnum] = useState(year);


    const monthArr = monthFunc(mon,annum);

    function dateChange(action) {
        let year = annum ;
        let month = mon ;
        switch (action) {
            case 'prevYear':
                year--;
                break;
            case 'nextYear':
                year++;
                break;
            case 'prevMonth':
                if (month === 0) {
                    year--;
                    month = 11;
                } else {
                    month--;
                }
                break;
            case 'nextMonth':
                if (month === 11) {
                    year++;
                    month = 0;
                } else {
                    month++;
                }
                break;
                default: break ;
        }
        setMon(month) ;
        setAnnum(year) ;

    }

    let buttonBlock = <div className= {styles.buttonBlock}>
        <div>
            <button
                className = {styles.prevBtn}
                onClick={() => dateChange('prevYear')}
            >
                {"<"}
            </button>
            {annum}
            <button
                className = {styles.nextBtn}
                onClick={() => dateChange('nextYear')}
            >
                {">"}
            </button>
        </div>
        <div>
            <button
                className = {styles.prevBtn}
                onClick={() => dateChange('prevMonth')}
            >
                {"<"}
            </button>
            {(String(mon+1).length === 1) ? "0" + (mon + 1) : mon + 1}
            <button
                className = {styles.nextBtn}
                onClick={() => dateChange('nextMonth')}
            >
                {">"}
            </button>
        </div>
    </div>


    let body = monthArr.map(week => {
        return <tr key={nanoid()}>
            {week.map((day) => {
                   let classList = [] ;
                    if (day.fullDate === today.join(':')) classList.push(styles.today) ;
                    if (day.month !== mon ) classList.push(styles.anotherMonth) ;
                    //
                    if (intervalArr){
                        intervalArr.forEach(item=>{
                            if (item.join(':') === day.fullDate) {
                                classList.push(styles.chosen) ;
                            }
                        })
                    }
                return (<td
                    key={nanoid()}
                    className = {classList.join(' ')}
                    data-fulldate={day.fullDate}
                    onClick={() => {
                        setDay([day.day, day.month, day.year]);
                        // setDateArr (intervalArr) ;
                        if (changeVisible) {
                            changeVisible(false) ;
                        }
                    }}
                >
                    {day.day}
                </td>)
            })
            }
        </tr>
    })

    return (<div className = {styles.main}>
        {buttonBlock}
        <table className = {styles.table}>
            <tbody>
                {body}
            </tbody>
        </table>
    </div>
    )
}
