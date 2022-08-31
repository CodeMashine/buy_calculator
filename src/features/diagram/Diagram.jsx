import React from 'react';


import handler from './handler';

import{ useSelector } from "react-redux" ;

import styles from "./diagram.module.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



export default function Diagram() {
    const spendingMain = Object.assign([] , useSelector(state=>state.spending)) ;
    const dateFilter = useSelector(state=>state.dateFilter) ;
    const categoryFilter = useSelector(state=>state.categoryFilter) ;

    // const [visible, setVisible] = useState(true);

    let labels = [];
    let label = 'Все затраты' ;
    let data = [] ;

    if (categoryFilter!=='всё') label = categoryFilter ;

    let spendings = handler(spendingMain , dateFilter ,categoryFilter) ;
    
    spendings.forEach(spend=>{
        labels.push(spend.date) ;
        data.push(spend.totalCost) ;
    })
    
    
    return (
        <div
            className={styles.diagram}
        >
            <div
                // className={visible ? styles.show : styles.hide}
            >

                <Bar
                    // type =  {'bar'} 
                    // width={'80'}
                    // height={'40'}

                    data={{
                        labels: labels,
                        datasets: [{
                            label: label,
                            data: data,
                            backgroundColor: `rgba(0,0,0,0.5)`,
                            borderColor: "black",
                            color:"white" ,
                            fill: 'true',
                            borderWidth: 1,
                        }
                        ]
                    }}
                    options={{
                        // maintainAspectRatio:false ,
                        // responsive: true,
                        legend: {
                            display : false ,
                            position: 'top',
                        }
                    }}
                />
            </div>
                        {/* <div>
            
                        <button onClick={() => setVisible(!visible)}
                        >{visible ? 'скрыть график' : 'показать график'}
            
                        </button>
                        </div> */}
        </div>
    )


}