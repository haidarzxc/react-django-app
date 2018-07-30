export const login = (username, password) => {
  console.log(username+" - "+password+"---------------------");
  return (dispatch, getState) => {
    dispatch({type: 'HIDE_LOGIN_MODAL'});
  }//end of return
}//end of function login


export const loadUser=()=>{
  return (dispatch, getState) => {
    console.log("loadUser---------------------");
  }//end of return
}//end of loadUser
