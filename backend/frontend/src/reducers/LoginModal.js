const initialState = {
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
      return {
        ...state,
        showLoginModal: false
      };
    default:
      return state;
  }
}//end of LoginModal

export default LoginModal
