import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from './countActions';

const Counter = (props) => {
  const increment = () => {
    console.log('increment function called');
    props.dispatch(actions.increment);
  }

  const decrement = () => {
    console.log('decrement function called');
    props.dispatch(actions.decrement);
  }
    return (
      <div>
        <h4>Counter: <span>{props.count}</span></h4>
        <div>
            <button onClick={increment}>+</button>
            
            <button onClick={decrement}>-</button>
        </div>
      </div>
    )
  }

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);



// import React, {Component} from 'react';

// class Counter extends Component {
//     render () {
//         const {number, increment, decrement} = this.props;
//         console.log('[Counter]' + number);
//         //console.log(increment);
//         return (
//             <div>
//                 <p>Number: {number}</p>
//                 <button onClick={increment} >Increment</button>
//                 <button onClick={decrement} >Decrement</button>
//             </div>
//         )
//     }
// }

// export default Counter;
