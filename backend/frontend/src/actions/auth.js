export const login = (username, password) => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({username, password});
    return fetch("/api/auth/login/", {headers, body, method: "POST"})
    .then(res => {
               if (res.status === 200) {
                 console.log("yes 200");
                   dispatch({type: 'HIDE_LOGIN_MODAL', data: res.data });
                   return res.data;
               } else if (res.status === 403 || res.status === 401) {
                   dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                   throw res.data;
               } else {
                   dispatch({type: "LOGIN_FAILED", data: res.data});
                   throw res.data;
               }
           })
    // dispatch({type: 'HIDE_LOGIN_MODAL'});
  }//end of return
}//end of function login


export const loadUser=()=>{
  return (dispatch, getState) => {
    console.log("loadUser---------------------");
  }//end of return
}//end of loadUser
