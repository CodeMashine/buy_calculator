import React, { useState } from "react";

import { useDispatch } from 'react-redux';
import Modal from "../modal/Modal";
import CalendarV2 from "../calendar/Calendar.ver2";
import today  from "../day/today" ;
import DataList from "../DataList/Datalist";
import { addSpend, sortSpend } from "../spendingData/spendingDataSlice";

export default function NewSpendCreator(props) {

    const dispatch = useDispatch();

    const [day , setDay] = useState(today);
    const [name, setName] = useState('');
    const [rank, setRank] = useState('');
    const [cost, setCost] = useState('');
    
    const [visible, changeVisible] = useState(false);

    let todayDate = `${String(day[0]).length === 1 ? "0" + day[0]
        : day[0]}:${String(day[1]).length === 1 ? "0" + (day[1] + 1)
            : day[1] + 1}:${day[2]}`;


    function control() {
        if (cost>0) {
            return true;
        } else {
            setCost("введите число");
            setTimeout(() => {
                setCost("");
            }, 1000)
            return false;
        }
    }

    function saveSpend() {
        if (control()) {
            dispatch(addSpend([day, name, rank, cost]));
            dispatch(sortSpend());
            setName("");
            setRank("");
            setCost("");
            setDay(today) ;
            props.changeVisible(false) ; 
        }
    }


    return (
        <table>
            <thead>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>наименование</td>
                    <td>категория</td>
                    <td>стоимость</td>
                </tr>
                <tr>
                    <td>
                       <button onClick={() =>{changeVisible(true)}}> {todayDate}  </button>
                        <Modal
                            visible = {visible}
                            changeVisible = {changeVisible}
                            children={<CalendarV2
                                setDay = {setDay}
                                changeVisible = {changeVisible}
                                />}
                        />
                    </td>
                    <td> <input value={name}
                        onChange={(e) => setName(e.currentTarget.value)} /> </td>

                    <td> <input value={rank}
                        onChange={(e) => setRank(e.target.value)} list="category" />
                        <DataList />
                    </td>

                    <td> <input value={cost} onChange={(e) => setCost(e.target.value)} /> </td>

                    <td> <button onClick={saveSpend}> Сохранить </button>  </td>
                    <td> <button onClick={()=>props.changeVisible(false) }> Отмена </button>  </td>
                </tr>
            </tbody>
        </table>
    )
}
