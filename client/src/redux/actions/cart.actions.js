import axios from 'axios';
import { setAlert } from './ui.actions';

const CART = "[cart]"

export const ADD_TO_CART = `${CART} Add item to Cart - command`
export const GET_CART = `${CART} Get Cart - command`
export const REMOVE_FROM_CART = `${CART} Remove Item - command`
export const FETCH_IN_CART = `${CART} Fetch in cart - command`
export const HANDLE_CART_TOTAL = `${CART} Handle Total - command`
export const DELETE_CART = `${CART} Delete Cart - command`

export const addToCart = (user, item) => async dispatch => {
  try { 
    const cartItem = {
      user,
      item
    }
    const res = await axios.post(`/api/cart/add`, cartItem);
    const newItem = {
      cartId: res.data.cart._id,
      quantity: res.data.cart.quantity,
      item: res.data.cart.item
    };
    dispatch({
      type: ADD_TO_CART,
      payload:{
        newItem
      }
    });
    dispatch(setAlert(res.data.msg, 'success'));

  } catch (err) {
    console.log(err)
  }
}


// Get Cart
export const getCart = (user) => async (dispatch) => {
  try {
    const res = await axios.get('/api/cart', user);
    setTimeout(() => dispatch({
      type: GET_CART,
      payload: res.data
    }), 3000);
  } catch (err) {
    console.log(err)
  }
};

// Delete Cart
export const deleteCart = (user) => async (dispatch) => {
  try {
    const res = await axios.delete('/api/cart', user);
    dispatch({
      type: DELETE_CART
    })
    console.log(res)
    dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    console.log(err)
  }
};

