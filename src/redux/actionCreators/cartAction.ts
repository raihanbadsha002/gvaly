import { CartAction } from 'redux/actions/cartAction';
import { ActionType } from 'redux/actionTypes';
import { IProduct } from 'types';

// interface addToCartAction {
//   type: ActionType.ADD_TO_CART;
//   payload: IProduct
// }

// interface removeFromCartAction {
//   type: ActionType.REMOVE_FROM_CART;
//   payload: string
// }

// interface clearCartAction {
//   type: ActionType.CLEAR_CART;
//   payload: string
// }

// export type CartAction =
//   | addToCartAction
//   | removeFromCartAction
//   | clearCartAction;


export const addToCart = (payload: IProduct): CartAction => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};
export const removeFromCart = (payload: string): CartAction => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = (): CartAction => {
  return {
    type: ActionType.CLEAR_CART,
  };
};


