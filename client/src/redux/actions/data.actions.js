import axios from 'axios';
import { setAlert } from './ui.actions';

const DATA = {
    posts : "[Posts]",
    items: "[Items]"
}

export const GET_POSTS = `${DATA.posts} Get All Posts - command`
export const POST_ERROR = `${DATA.posts} Error - event`
export const UPDATE_LIKES = `${DATA.posts} Update Likes - command`
export const DELETE_POST = `${DATA.posts} Delete - command`
export const ADD_POST = `${DATA.posts} Add - command`
export const GET_POST = `${DATA.posts} Get Single Post - command`

export const GET_ITEMS = `${DATA.items} Get All Items - command`
export const GET_ITEM = `${DATA.items} Get Single Item - command`
export const ADD_ITEM = `${DATA.items} Add - command`
export const ITEM_ERROR = `${DATA.items} Error - event`

// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/data');
    setTimeout(() => dispatch({
      type: GET_POSTS,
      payload: res.data
    }), 3000);
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add/Remove like
export const addLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/data/like/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete post
export const deletePost = id => async dispatch => {
  try {
    await axios.delete(`/api/data/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id
    });

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add post
export const addPost = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/data', formData, config);
    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get post
export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(`/api/data/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// Add post
export const addItem = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/items', formData, config);
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    });

    dispatch(setAlert('Item Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// Get items
export const getItems = () => async dispatch => {
  try {
    const res = await axios.get('/api/items');
    setTimeout(() => dispatch({
      type: GET_ITEMS,
      payload: res.data
    }), 3000);
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Get post
export const getItem = id => async dispatch => {
  try {
    const res = await axios.get(`/api/items/${id}`);

    dispatch({
      type: GET_ITEM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};