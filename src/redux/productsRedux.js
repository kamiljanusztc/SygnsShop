import Axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAll = ({products}) => products.data;

export const getOne = ({ products }, _id) => {
  console.log(_id);
  console.log(products);
  // eslint-disable-next-line eqeqeq
  return products.data.filter((product) => product.id == _id)[0];
};

export const getFromCart = ({ products }) => products.cart;
export const addToTheCart = ({ cart }) => cart;

export const getOneProduct = ({products}, id) => {
  products.data.filter(product => product._id === id);
};
export const getLoadingState = ({ products }) => products.loading;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const FETCH_ONE_PRODUCT = createActionName('FETCH_ONE_PRODUCT');

export const CREATE_ORDER = 'CREATE_ORDER';
export const CLEAR_ORDER = 'CLEAR_ORDER';
export const CLEAR_CART = 'CLEAR_CART';
export const FETCH_ORDERS = 'FETCH_ORDERS';

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchOneProduct = payload => ({ payload, type: FETCH_ONE_PRODUCT });

export const addToCart = payload => ({ payload, type: ADD_TO_CART });

export const createOrder = (order) => (dispatch) => {
  fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_ORDER, payload: data });
      localStorage.clear('cartItems');
      dispatch({ type: CLEAR_CART });
    });
};
export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};
export const fetchOrders = () => (dispatch) => {
  fetch('/api/orders')
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_ORDERS, payload: data });
    });
};

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* thunk creators */

export const fetchProductsFromAPI = () => {
  return (dispatch, getState) => {
    const { products } = getState();

    if (products.data.length === 0 || products.loading.active === 'false') {

      Axios.get(`${API_URL}/api/products`)
        .then((res) => {
          dispatch(fetchSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchOneProductFromAPI = (_id) => {
  return (dispatch, getState) => {
    console.log('getState', getState());
    dispatch(fetchStarted());
    Axios.get(`${API_URL}/api/product/${_id}`)
      .then((res) => {
        console.log(res);
        dispatch(fetchOneProduct(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
        console.error(err);
      });
  };
};

export const addItem = (item) => {
  return (dispatch, getState) => {
    console.log(item);
    dispatch(addToCart(item));
  };
};

export const AddToCart =(id)=>dispatch=>{

  dispatch({
    type:ADD_TO_CART,
    payload:id,
  });

};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_ONE_PRODUCT: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        oneProduct: action.payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          confirmation: false,
        },
        cart: [...statePart.cart, action.payload],
      };
    }
    default:
      return statePart;
  }
};
