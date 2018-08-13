import React, { Component } from 'react';
import { ListGroup,ListGroupItem,Glyphicon } from 'react-bootstrap';
import '../css/SideMenu.css';
import { connect  } from 'react-redux';

class SideMenu extends Component{
  
  triggerClick(){
    if(this.props.showSideMenu){
      this.hideSideMenu()
    }
    else{
      this.showSideMenu()
    }
  }//end of triggerClick
  
  hideSideMenu = () => {
    this.props.dispatch({ type: 'HIDE_SIDE_MENU' });
  }//end of arrow hideSideMenu
  
  showSideMenu = () => {
    this.props.dispatch({ type: 'SHOW_SIDE_MENU' });
  }//end of arrow showSideMenu
  
  
  constructor(props){
    super(props)
    this.triggerClick = this.triggerClick.bind(this);
  }//end of constructor
  
  render(){
    let links=[];
    for(var i=0; i<this.props.links.length; i++){
      var item=this.props.links[i]
      if(i===0){
        links[i]=<ListGroupItem key={i} href={item.link} 
        className={this.props.showSideMenu? "SideMenuTitleOff MenuItemOff":"SideMenuTitle MenuItem"}
          onClick={this.triggerClick}>
          <Glyphicon glyph={item.icon} 
          className={this.props.showSideMenu? "sideGlyphIconOff":"sideGlyphIcon"}/>{this.props.showSideMenu? "":item.text}
          </ListGroupItem>
        continue
      }//end of title Dashboard
      links[i]=<ListGroupItem key={i} href={item.link}
      className={this.props.showSideMenu? "MenuItemOff":"MenuItem"}> 
        <Glyphicon glyph={item.icon} className={this.props.showSideMenu? "sideGlyphIconOff":"sideGlyphIcon"}/>{this.props.showSideMenu? "":item.text}
        </ListGroupItem>
    }//end of forloop
    
    return(
      <ListGroup className={this.props.showSideMenu? "SideMenuOff":"SideMenu"}>
        {links}
      </ListGroup>
    )//end of return
  }//end of render
}//end of class SideMenu

function mapStateToProps(state) {
  return {
    showSideMenu: state.SideMenu.showSideMenu,
    links: state.SideMenu.links
  };
}//end of mapStateToProps

export default connect(mapStateToProps)(SideMenu)