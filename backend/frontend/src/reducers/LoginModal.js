const initialState = {
  token: localStorage.getItem("token"),
  showLoginModal:false,
  isAuthenticated:null,
  user:null,
  errors: {},
};

function LoginModal(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_LOGIN_MODAL':
      return {
        ...state,
        showLoginModal: true
      };
    case 'HIDE_LOGIN_MODAL':
     localStorage.setItem("token", action.data.token);
      return {
        ...state,
        ...action.data,
        showLoginModal: false,
        isAuthenticated:true,
        user: action.data.user['username']
      };

    case 'AUTHENTICATION_ERROR':
    case 'LOGIN_FAILED':
    case 'LOGOUT_SUCCESSFUL':
      localStorage.removeItem("token");
      return {
        ...state,
        showLoginModal:true,
        errors: action.data,
        token: null,
        isAuthenticated: false
      };

    default:
      return state;
  }
}//end of LoginModal

export default LoginModal
