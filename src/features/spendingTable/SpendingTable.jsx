import React, { useState } from "react";
import Modal from "../modal/Modal";
import Body from "./body/Body";
import Head from "./head/Head";
import NewSpendCreator from "../newSpendCreator/NewSpendCreator";
import styles from "./spendingTable.module.css";

export default function SpendingTable() {
    const [visible, changeVisible] = useState(false);

    return (<div
        className={styles.main}

    >
        <div
            className={styles.addButtonBlock}
        >
            <button 
            className={styles.addButton}
            // className='btn btn-circle' 
             onClick={() => changeVisible(true)}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24"
             stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             </svg> */}
                <span>+</span>
            </button>
            <Modal
                visible={visible}
                changeVisible={changeVisible}
                children={<NewSpendCreator
                    changeVisible={changeVisible} />}
            />
        </div>

        <div
            className="overflow-x-auto"
        >

            <table
                className={styles.Table}
            //  className = 'table table-compact w-full hover'
            >
                <thead>
                    <Head />
                </thead>
                <tbody>
                    <Body />
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
        <div></div>

    </div>
    )
}
