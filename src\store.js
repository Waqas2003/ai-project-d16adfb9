import { createStore, combineReducers } from 'redux';

const initialState = {
  products: [],
  cart: []
};

function productsReducer(state = initialState.products, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return action.products;
    default:
      return state;
  }
}

function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

export default store;