import React from 'react';

import Diagram from "./features/diagram/Diagram"
import SpendingTable from './features/spendingTable/SpendingTable';

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main}>
        <Diagram />

        <SpendingTable />
    </div>

  );
}

export default App;
