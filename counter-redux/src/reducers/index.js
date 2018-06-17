const initialState = {
  counter: 100
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VALUE':
      const newValue = state.counter + action.payload.augent
      return {
        counter: newValue
      }
    case 'RESET':
      return {
        ...initialState
      };
    default:
      return state;
  }
};
