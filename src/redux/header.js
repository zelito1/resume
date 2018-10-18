import { createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

// Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
// Store
const store = createStore(reducer);

// Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
// State
const state = store.getState();

// State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。
// Action
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};

// View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。
// Action Creator
const ADD_TODO = '添加 TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

const action = addTodo('Learn Redux');

// store.dispatch()是 View 发出 Action 的唯一方法。
// store.dispatch()

// import { createStore } from 'redux';
// const store = createStore(fn);

// store.dispatch({
//   type: 'ADD_TODO',
//   payload: 'Learn Redux'
// });

store.dispatch(addTodo('Learn Redux'));
// Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer
// Reducer
const reducer = function (state, action) {
  // 
  return new_state;
};


// 中间件

const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(logger)
);