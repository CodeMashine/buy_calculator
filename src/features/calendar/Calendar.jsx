import React from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from 'react-redux';
import monthFunc from "./month";
import { changeDate } from "../day/DateSlice";
import { changeDay } from "../day/DaySlice";


import { changeVisible } from "../visible/visibleSlice";

export default function Calendar() {

    const dispatch = useDispatch();

    let month = useSelector(state => state.date[0]);
    let year = useSelector(state => state.date[1]);

    const monthArr = monthFunc(month, year);

    function dateChange(action) {
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

        console.log('click');
        dispatch(changeDate([month, year]));
    }

    let buttonBlock = <div>
        <span>
            <button
                onClick={() => dateChange('prevYear')}
            >
                {"<"}
            </button>
            {year}
            <button
                onClick={() => dateChange('nextYear')}
            >
                {">"}
            </button>
        </span> <br />
        <span>
            <button
                onClick={() => dateChange('prevMonth')}
            >
                {"<"}
            </button>
            {(String(month).length === 1) ? "0" + (month + 1) : month + 1}
            <button
                onClick={() => dateChange('nextMonth')}
            >
                {">"}
            </button>
        </span> <br />
    </div>


    let body = monthArr.map(week => {
        return <tr key={nanoid()}>
            {week.map((day, index) => {
                //    let classList = [] ;
                //    const date = day.fullDate ;
                //     if (date === today) classList.push(styles.today) ;
                //     if (day.month !== thisMonth) classList.push(styles.anotherMonth) ;
                //     if (date === chosenDay.date) classList.push(styles.chosen) ;
                //     if (daysWithNotes.find(note=>note.date === date))classList.push(styles.haveNote) ;
                return (<td
                    key={nanoid()}
                    // className = {classList.join(' ')}
                    data-fulldate={day.fullDate}
                    onClick={() => {
                        dispatch(changeDay([day.day, day.month, day.year]));
                        dispatch(changeVisible(false));
                    }}
                >
                    {day.day}
                </td>)
            })
            }
        </tr>
    })

    return (<>
        {buttonBlock}
        <table>
            <tbody>
                {body}
            </tbody>
        </table>
    </>
    )
}
