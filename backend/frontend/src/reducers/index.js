import { combineReducers } from 'redux';
import SideMenu from './SideMenu.js';
import LoginModal from './LoginModal.js';
import Page404 from './Page404.js';


const reducers = combineReducers({
  SideMenu,LoginModal,Page404
})

export default reducers;