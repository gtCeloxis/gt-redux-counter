const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  console.log(state.count);
    if(action.type === "VALUE_INCREASED"){
        return {
          count: state.count + 1
        }
      }

    if(action.type === "VALUE_DECREASED"){
      return {
        count: state.count - 1
      }
    }

   return state;
}
  