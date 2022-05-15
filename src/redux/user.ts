export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

export const getUser = () => ({
  type: GET_USER,
});

export const setUser = (user: any) => ({
  type: SET_USER,
  user,
});

export const initialState = {
  user: undefined,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    default:
      return state;
  }
};
