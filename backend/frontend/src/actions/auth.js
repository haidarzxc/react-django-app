// actions/auth.js
// login, logout, pageload handlers

/*
  args (username,password)
  function POSTs JSON object to /api/auth/login/ URL then fetch data
  if server retured status == 200 otherwise login failed.
*/
export const login = (username, password) => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({username, password});
    return fetch("/api/auth/login/", {headers, body, method: "POST"})
    .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
    .then(res => {
               if (res.status === 200) {
                   dispatch({type: 'LOGIN_SUCCESSFUL', data: res.data });
                   return res.data;
               } else if (res.status === 403 || res.status === 401) {
                   dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                   throw res.data;
               } else {
                   dispatch({type: "LOGIN_FAILED", data: res.data});
                   // throw res.data;
               }
           })
  }//end of return
}//end of function login


/*
  args ()
  function sends JSON header with token to /api/auth/user/ URL
  if server replies with status 200, user gets loaded.
  otherwise, user is classified unauthenticated
*/
export const loadUser = () => {
    return (dispatch, getState) => {
        dispatch({type: "USER_LOADING"});

        const token = getState().LoginModal.token;

        let headers = {"Content-Type": "application/json",};

        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        return fetch("/api/auth/user/", {headers, })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({type: 'USER_LOADED', user: res.data });
                    return res.data;
                } else if (res.status >= 400 && res.status < 500) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    // throw res.data;
                }
            })
    }//end of dispatch
}//end of loadUser


/*
  args ()
  function POSTs JSON object to /api/auth/logout/ URL
  if server replies with status 200, user gets logged out.
  otherwise, request fails
*/
export const logout = () => {
    return (dispatch, getState) => {
        let headers = {"Content-Type": "application/json"};
        const token = getState().LoginModal.token;
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        return fetch("/api/auth/logout/", {headers, method: "POST"})
            .then(res => {
                if (res.status === 200) {
                    dispatch({type: 'LOGOUT_SUCCESSFUL'});
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR"});
                    throw res.data;
                }
            })
    }
}//end of logout
