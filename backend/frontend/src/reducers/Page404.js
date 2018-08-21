const initialState = {
  showNav:true,
};

function Page404(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_NAV':
      return {
        showNav: true,
      };
    case 'HIDE_NAV':
      return {
        showNav: false,
      };
    default:
      return state;
  }
}//end of Page404

export default Page404