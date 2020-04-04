import axios from 'axios'
import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from "./actionType";

// 新增todolist数据
export const getIputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAciton = () => ({
    type: ADD_TODO_ITEM
})

export const getdeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAcion = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitList = () => ({
    type: GET_INIT_LIST,
})

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios
//             .get("/list.json")
//             .then(res => {
//                 const data = res.data
//                 const action = initListAcion(data)
//                 console.log(data)
//                 dispatch(action)
//             })
//     }
// }