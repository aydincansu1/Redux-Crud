const initialstate = {
  users: [],
};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "login_TODO":
      return state;

    default:
      return state;
  }
};

export default userReducer;
