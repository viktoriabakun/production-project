import React, {useState} from 'react';
import styles from "./styles.module.scss";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);

    return (
        <div className={styles.counter}>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Counter;
