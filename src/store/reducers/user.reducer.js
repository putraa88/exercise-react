const initialState = {
  users: [
  ]
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
      }

    case 'ADD_USER':
      const newUser = [ ...state.users, action.payload ];
      return {
        ...state,
        users: newUser,
      }

    default:
      return state;
  }
}

export default userReducer;