import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "./actions";

const counterInitState = 0;

// const counterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {...state, counter: state.counter + 1};

//     case "DECREMENT":
//     return {...state, counter: state.counter - 1};

//     default:
//       return state;
//   }
// }

const counterReducer = createReducer(counterInitState, {
  [increment.type]: (state, action) => state + 1,
  [decrement.type]: (state, action) => state - 1,
});

export default counterReducer;
