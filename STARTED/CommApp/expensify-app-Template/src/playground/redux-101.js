import {createStore} from 'redux';

// Action Generators - functions that rerurn action objects
// Actions - an object that gets sent to the store
const incrementCount = ({incrementBy = 1} = {}) => ({
	type: 'INCREMENT',
	incrementBy,
});

const decrementCount = ({decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy,
});

// my challange solution
// const setCount = ({setTo = 0} = {}) => ({
// 	type: 'SET',
// 	setTo,
// });

const setCount = ({count}) => ({
	type: 'SET',
	count,
});

const resetCount = () => ({
	type: 'RESET',
});

// Not Pure function
let a = 10;
const add = (b) => {
	return a + b;
}

//Pure function
const addPure = (a, b) => {
	return a + b;
}

// not pure
let result;
const add2 = (b, b) => {
	result = a + b;
}

// Reducers- pure function, never changes state or actions
const countReducer = (state = {count: 0}, action) => {
	switch (
		action.type // switch instead of if else
	) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy,
			};
		case 'DECREMENT':
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return {
				count: state.count - decrementBy,
			};
		case 'SET':
			return {
				count: (state.count = action.count),
			};
		case 'RESET':
			return {
				count: (state.count = 0),
			};
		default:
			return state;
	}
};

// here we reference 'countReducer' but not executing
const store = createStore(countReducer);

// How do we watch for changes in the redux state
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy: 8}));
store.dispatch(setCount({count: 35}));

//I'd like to increment the cont
// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5,
// });

// store.dispatch({
// 	type: 'RESET',
// });

// store.dispatch({
// 	type: 'DECREMENT',
// 	decrementBy: 10,
// });

// store.dispatch({
// 	type: 'SET',
// 	count: 101,
// });

// I'd like to reset the count to zero
