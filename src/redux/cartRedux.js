/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
// import Axios from 'axios';

export const getAll = ({products}) => products.data;

export const addToCart = (product, qty) => async (dispatch, getState) => {

  // let localStorageData = localStorage.getItem('cart');
  // let cart = JSON.parse(localStorageData);
  // cart.push(product);
  // console.log('cart', cart);
  // console.log('localStorageData', localStorageData);
  // const { data } = await Axios.get(`/api/products/${product}`);

  // dispatch({
  //   type: ADD_TO_CART,
  //   payload: {
  //     product: data._id,
  //     title: data.title,
  //     content: data.content,
  //     qty: 1,
  //     price: data.price,
  //     image: data.image,
  //   },
  // });
  // console.log('zmienna data',data);
  // localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  // localStorage.setItem('cart', JSON.stringify(cart));
};

export const deleteItem = (id) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });

  // localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};



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
export const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
export const DELETE_ITEM = createActionName('DELETE_ITEM');
export const CART_RESET = createActionName('CART_RESET');

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
    // case REMOVE_FROM_CART: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: false,
    //       error: false,
    //       confirmation: false,
    //     },
    //     cartItems: [
    //       ...statePart.cart.filter((x) => x._id !== action.payload._id),
    //     ],
    //   };
    // }
    case REMOVE_FROM_CART: {
      return {
        ...statePart,
        cartItems: statePart.cartItems.filter((x) => x.product !== action.payload),
      };
    }
    case DELETE_ITEM: {

      const filteredCart = statePart.cart.filter(item => item._id!==action.payload);

      return{
        ...statePart,
        cart: filteredCart,
      };
    }
    default:
      return statePart;
  }
};
