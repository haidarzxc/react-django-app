const initialState = {
  token: localStorage.getItem("token"),
  showLoginModal:false,
  isAuthenticated:null,
  user:null,
  isLoading:null,
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
      return {
        ...state,
        showLoginModal: false,
      }
    case 'LOGIN_SUCCESSFUL':
     localStorage.setItem("token", action.data.token);
      return {
        ...state,
        ...action.data,
        showLoginModal: false,
        isAuthenticated:true,
        user: action.data.user['username']
      };

    case 'USER_LOADING':
        return {...state, isLoading: true};

    case 'USER_LOADED':
        return {...state, isAuthenticated: true, isLoading: false, user: action.user};

    case 'AUTHENTICATION_ERROR':
    case 'LOGIN_FAILED':
    case 'LOGOUT_SUCCESSFUL':
      localStorage.removeItem("token");
      return {
        ...state,
        showLoginModal:true,
        errors: action.data,
        token: null,
        user: null,
        isAuthenticated: false
      };

    default:
      return state;
  }
}//end of LoginModal

export default LoginModal
