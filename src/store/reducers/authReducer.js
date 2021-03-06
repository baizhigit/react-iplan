const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success');
      // return { ...state, ...payload };
      return {
        ...state,
        authError: null
      };

    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      };

    case 'LOGOUT_SUCCESS':
      console.log('logout success');

      return state;

    case 'LOGOUT_ERROR':
      console.log('logout error');
      return {
        ...state,
        authError: 'Login failed'
      };

    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return { ...state, authError: null };

    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.error.message
      };

    default:
      return state;
  }
};

export default authReducer;
