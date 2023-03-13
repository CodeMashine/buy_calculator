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
             onClick={() => changeVisible(true)}>
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
