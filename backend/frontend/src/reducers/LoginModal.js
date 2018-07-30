const initialState = {
  token: localStorage.getItem("token"),
  showLoginModal:false,
  isAuthenticated:null,
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
        isAuthenticated:true
      };
    default:
      return state;
  }
}//end of LoginModal

export default LoginModal
