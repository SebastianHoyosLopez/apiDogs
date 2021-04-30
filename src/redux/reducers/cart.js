import * as ActionTypes from "../action-types";

const initialData = [];

const cart = (state = initialData, action) => {
  let pokemones;
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      pokemones = localStorage.getItem("pokemones");
      if (pokemones) {
        pokemones = JSON.parse(pokemones);
        pokemones = [...pokemones, { ...action.payload }];
      } else {
        pokemones = [{ ...action.payload }];  
      }
      localStorage.setItem("pokemones", JSON.stringify(pokemones));
      return [...pokemones];
    default:
      return [...state];
  }
};

export default cart;
