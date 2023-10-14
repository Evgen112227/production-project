import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<p>
			<div>Counter</div>
			<div>{counter}</div>
			<button className={classes.btn} onClick={() => setCounter(counter + 1)}>
				++++
			</button>
		</p>
	);
};
