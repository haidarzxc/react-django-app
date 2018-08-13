const initialState = {
  showSideMenu:false,
  links:[
    {text:" Dashboard",
      link:"#",
      icon:"glyphicon glyphicon-th-list"},
    {text:" HOME",
      link:"#",
      icon:"glyphicon glyphicon-home"},
    {text:" SETTINGS",
      link:"#",
      icon:"glyphicon glyphicon-cog"},
    {text:" NEW",
      link:"#",
      icon:"glyphicon glyphicon-file"},
    {text:" CALENDAR",
      link:"#",
      icon:"glyphicon glyphicon-calendar"},
    {text:" SAVE",
      link:"#",
      icon:"glyphicon glyphicon-save"},
    {text:" CHARTS",
      link:"#",
      icon:"glyphicon glyphicon-stats"},
      
  ]
};

function SideMenu(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_SIDE_MENU':
      return {
        showSideMenu: true,
        links:initialState.links
      };
    case 'HIDE_SIDE_MENU':
      return {
        showSideMenu: false,
        links:initialState.links
      };
    default:
      return state;
  }
}//end of SideMenu

export default SideMenu