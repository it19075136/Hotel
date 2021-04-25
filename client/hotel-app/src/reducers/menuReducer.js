import { ADD_MENU, GET_MENUS, DELETE_MENU, MENUS_LOADING } from '../actions/types'

const initState = {
    menus: [],
    loading: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case GET_MENUS:
            return {
                ...state,
                menus: action.payload,
                loading: false
            }
        case DELETE_MENU:
            return {
                ...state,
                menus: state.menus.filter(menu => menu._id !== action.payload)
            }
        case ADD_MENU:
            return {
                ...state,
                menus: [action.payload, ...state.menus]
            }
        case MENUS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}