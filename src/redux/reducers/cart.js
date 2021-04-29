import * as ActionTypes from "../action-types";

const initialData = [];

const cart = (state = initialData, action) => {
  let photo;
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      photo = { ...action.payload, quantity: 1 };
      return [photo];
    default:
      return state;
  }
};

export default cart;
