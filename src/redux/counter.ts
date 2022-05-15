export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export const doIncrement = () => ({
  type: INCREMENT,
});

export const doDecrement = () => ({
  type: DECREMENT,
});

export const initialState = {
  count: 0,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
