import * as ActionTypes from "../action-types";

const initialData = [];

const cart = (state = initialData, action) => {
  let characters;
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      characters = localStorage.getItem("characters");
      if (characters) {
        characters = JSON.parse(characters);
        characters = [...characters, { ...action.payload }];
      } else {
        characters = [{ ...action.payload }];
      }
      localStorage.setItem("characters", JSON.stringify(characters));
      return [...characters];
    case ActionTypes.LOAD_CART:
      characters = localStorage.getItem("characters");
      if (characters) {
        characters = JSON.parse(characters);
        return [...characters];
      }
      return [...state];
    case ActionTypes.CHARACTER_DELETE:
      characters = localStorage.getItem("characters");
      if (characters) {
        characters = JSON.parse("characters");
        characters = characters.filter((item) => item.id !== action.payload.id);
      }
      localStorage.setItem("characters", JSON.stringify(characters));
      return [...characters];
    default:
      return [...state];
  }
};

export default cart;
