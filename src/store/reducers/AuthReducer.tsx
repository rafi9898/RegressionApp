const initState = {
  authError: null
};

const authReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Invalid login or password"
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null
      };

    case "SIGNOUT_SUCCESS":
      return state;

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };

    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};

export default authReducer;
