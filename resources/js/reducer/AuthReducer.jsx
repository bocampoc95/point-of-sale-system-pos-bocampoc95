export const initialAuthState = {
    user: null,
    token: null,
    logged: false,
  };
  
  export const AUTH_ACTIONS = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGOUT: "LOGOUT",
  };
  
  export const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
      case AUTH_ACTIONS.LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          logged: true,
        };
  
      case AUTH_ACTIONS.LOGOUT:
        return {
          ...initialAuthState, // Reinicia el estado
        };
  
      default:
        return state;
    }
  };
  