import * as ActionTypes from '../action-types'

export const addToCart = (payload) => ({
    type: ActionTypes.ADD_TO_CART,
    payload,
})

export const loadCart = (payload) => ({
    type: ActionTypes.LOAD_CART,
    payload,
  });