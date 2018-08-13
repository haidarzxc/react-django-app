import { combineReducers } from 'redux';
import SideMenu from './SideMenu.js';
import LoginModal from './LoginModal.js';


const reducers = combineReducers({
  SideMenu,LoginModal
})

export default reducers;