import Axios from 'axios';

/* selectors */
export const getAll = ({products}) => products.data;
export const getOne = ({products}) => products.oneProduct;
// export const getProductById = ({ products }, _id) => {
//   return products.data.filter((product) => product._id === _id)[0];
// };

export const getOneProduct = ({products}, id) => {
  products.data.filter(product => product._id === id);
};


/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const ADD_TO_CART = createActionName('ADD_TO_CART');
const EDIT_IN_CART = createActionName('EDIT_IN_CART');
// const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const FETCH_ONE_PRODUCT = createActionName('FETCH_ONE_PRODUCT');

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchOneProduct = payload => ({ payload, type: FETCH_ONE_PRODUCT });
export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });
export const editInCart = (payload) => ({ payload, type: EDIT_IN_CART });

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* thunk creators */

// export const fetchProduct = (id) => {
//   return (dispatch, getState) => {
//     dispatch(fetchStarted());
//     console.log('getState', getState());

//     Axios
//       .get(`http://localhost:8000/api/products/{id}`)
//       .then(res => {
//         console.log(res);
//         dispatch(fetchOneProduct(res.data));
//       })
//       .catch(err => {
//         dispatch(fetchError(err.message || true));
//       });
//   };
// };

export const fetchProductsFromAPI = () => {
  return (dispatch, getState) => {
    const { products } = getState();

    if (products.data.length === 0 || products.loading.active === 'false') {
      dispatch(fetchStarted());
      Axios.get('http://localhost:8000/api/products')
        .then((res) => {
          dispatch(fetchSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchOneProductFromAPI = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios.get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(fetchOneProduct(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
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
    default:
      return statePart;
  }
};
