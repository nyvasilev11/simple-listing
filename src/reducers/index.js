const defaultState = {
  users: []
};

export default (state = defaultState, { type, users }) => {
  switch (type) {
    case "users":
      return {
        ...state,
        users
      };
    default:
      break;
  }
  return state;
};
