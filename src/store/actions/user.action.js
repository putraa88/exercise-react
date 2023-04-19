export const getUsers = () => dispatch => {
  dispatch({
    type: 'GET_USER',
  });
}

export const addUser = (payload) => dispatch => {
  dispatch({
    type: 'ADD_USER',
    payload,
  })
}