import {
    takeEvery,
    put
} from 'redux-saga/effects'

import {
    GET_INIT_LIST
} from './actionType'

import {
    initListAcion
} from './actionCreators'

import axios from 'axios'

function* getinitlist() {
    try {
        const res = yield axios.get("/list.json")
        const action = initListAcion(res)
        yield put(action)
    } catch (e) {
        console.error('list.json 网络请求失败')
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getinitlist)
}

export default mySaga