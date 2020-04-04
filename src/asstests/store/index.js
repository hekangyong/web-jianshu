import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
// import thunk from 'redux-thunk'
import reducer from './reducer'
// 帮助用户创建redux-saga中间件
import createSagaMiddleware from 'redux-saga'
import todoSaga from './saga'


const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // applyMiddleware(thunk)
)

// reducer 里面存储着所有的数据， store 则是创建一个类似渠道的方法
const store = createStore(
    reducer,
    enhancer
    // 判断浏览器是否安装了REDUX_DEVTOOLS，如果安装了就使用该工具,同时引入redux-thunk
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

sagaMiddleware.run(todoSaga)

export default store