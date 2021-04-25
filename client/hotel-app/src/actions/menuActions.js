import { ADD_MENU,GET_MENUS,DELETE_MENU,MENUS_LOADING } from './types';
import axios from 'axios'

export const addMenus = menu => dispatch => {
    axios
    .post('/api/menus', menu)
    .then(res => 
        dispatch({
        type: ADD_MENU,
        payload: res.data
    })
    )
}

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/menus')
    .then(res => {
        dispatch({
            type: GET_MENUS,
            payload: res.data
        })
    })
}
export const deleteItem = id => dispatch => {
    axios.delete(`api/menus/${id}`).then(res => {
        dispatch({
            type: DELETE_MENU,
            payload: id       
        })
    })
}

export const setItemsLoading = () => {
    return {
        type: MENUS_LOADING
    }
}


