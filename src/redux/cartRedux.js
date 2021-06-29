/* eslint-disable no-case-declarations */
/* eslint-disable default-case */

export const getAll = ({products}) => products.data;

export const addToCart = (product, qty) => async (dispatch, getState) => {

};

export const deleteItem = (id) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};


const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const DELETE_ITEM = createActionName('DELETE_ITEM');
export const CART_RESET = createActionName('CART_RESET');
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT';

export const removeCartProduct = productId => {
  return {
    type: REMOVE_CART_PRODUCT,
    productId,
  };
};

// export const reducer = (statePart = { cartItems: [] }, action) => {
export const reducer = (statePart = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;

      const existItem = statePart.cartItems.find((x) => x.product === item.product);

      if(existItem) {
        return {
          ...statePart,
          cartItems: statePart.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...statePart,
          cartItems: [...statePart.cartItems, item],
        };
      }
    }

    default:
      return statePart;
  }
};
