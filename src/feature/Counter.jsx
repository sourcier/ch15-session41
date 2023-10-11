// src/counter/Counter.jsx
import styles from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { selectCount, increment, decrement, incrementAsync } from './counterSlice';

export function Counter() {
	const count = useSelector(selectCount);
  const dispatch = useDispatch()
  
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>     
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync())}
        >
          Add Async
        </button>        
      </div> 
    </div>
  );
}

export default Counter