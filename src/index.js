import React from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './countReducers';
import Counter from './Counter';
import actions from './countActions';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
    document.getElementById('root')
  );

  // const increment = () => {
  //   console.log('count increment function');
  //   store.dispatch(actions.increment);
  // }
  
  // const decrement = () => {
  //   console.log('count decrement function');
  //   store.dispatch(actions.decrement);
  // }

// const render = () => {
//   ReactDOM.render(
//   <Counter number={store.getState()} 
//   increment={increment} decrement={decrement} />,
//   document.getElementById('root')
// );
// }

// store.subscribe(render);
// render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
