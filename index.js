// const {createStore} =  require ('redux');
// // define value
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const ADD_USER = "ADD_USER";
// //state

// const { createStore } = require("redux");

// const initialCounterState = {
//   count: 0,
// };
// const initialUserState = {
//   user: [{ name: "Mostafizur Rahman" }],
// };

// //action
// const incrementCounter = () => {
//   return {
//     type: INCREMENT,
//   };
// };
// const decrementCounter = () => {
//   return {
//     type: DECREMENT,
//   };
// };
// const addUser = () => {
//   return {
//     type: ADD_USER,
//     payload: { name: "Dhaka International University" },
//   };
// };

// //create a reducer for counter

// const counterReducer = (state = initialCounterState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     default:
//       state;
//   }
// };
// /**
//  * 1.State
//  * 2.Dispatch action
//  * 3.reducer
//  * 4.store -getState(),dispatch(),subscribe()
//  */

// const store = createStore(counterReducer)
// store.subscribe (()=>{
//     console.log(store.getState())
// })
// store.dispatch (incrementCounter())
// store.dispatch (incrementCounter())
// store.dispatch (incrementCounter())
// store.dispatch (decrementCounter())

//state - count:0
//action - increment,decrement,reset
//reducer
//store

//Constants

// const { createStore } = require("redux");
// const INCREMENT = "INCREMENT";
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";
// const ADD_USER = "ADD_USER";
// const initialState = {
//   user: ["mostafizur"],
//   count: 1,
// };

// const addUser = (user) => {
//   return {
//     type: ADD_USER,
//   };
// };
// const incrementAction = () => {
//   return {
//     type: INCREMENT,
//   };
// };
// const decrementAction = () => {
//   return {
//     type: DECREMENT,
//   };
// };
// const resetAction = () => {
//   return {
//     type: RESET,
//   };
// };
// const incrementCounterByValue = (value) => {
//   return {
//     type: INCREMENT_BY_VALUE,
//     payload: value,
//   };
// };

// const anotherUserADD = (user) => {
//   return {
//     type: ADD_USER,
//     payload: user,
//   };
// };
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case RESET:
//       return {
//         ...state,
//         count: 0,
//       };
//     case INCREMENT_BY_VALUE:
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     case ADD_USER: {
//       return {
//        users:[...state.user,action.payload],
//         count: state.count + 1,
//       };
//     }
//     default:
//       state;
//   }
// };
// const store = createStore(counterReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });
// // store.dispatch(incrementAction());
// // store.dispatch(incrementAction());
// // store.dispatch(incrementAction());
// // store.dispatch(resetAction());
// // store.dispatch(incrementAction());
// // store.dispatch(incrementCounterByValue(5));
// // store.dispatch(incrementCounterByValue(10));
// store.dispatch(anotherUserADD('rahman'));
// store.dispatch(anotherUserADD('dhaka'));

const { createStore, combineReducers } = require("redux");
//product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

//Card constants
const GET_CARDS = "GET_CARDS";
const ADD_CARD = "ADD_CARD";
// state declaration
const initialProductState = {
  products: ["sugar", "salt"],
  numberoFProducts: 2,
};
// card declaration
const initialCartState = {
  cart: ["sugar"],
  numberoFProducts: 1,
};

// product action declared
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
// card action declared
const getCard = () => {
  return {
    type: GET_CARDS,
  };
};
const addCard = (product) => {
  return {
    type: ADD_CARD,
    payload: product,
  };
};

//productReducer

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberoFProducts: state.numberoFProducts + 1,
      };
    default:
    return  state;
  }
};

//cartReducer

const cardReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
      };
    case ADD_CARD:
      return {
        cart: [...state.cart, action.payload],
        numberoFProducts: state.numberoFProducts + 1,
      };
    default:
   return  state;
  }
};

// product store
// const store = createStore(productReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(getProducts());
// store.dispatch(addProduct("pen"));

const rootReducer = combineReducers({
  productR:productReducer,
  cartR:cardReducer
})

//card store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getCard());
store.dispatch(addCard("pen"));
