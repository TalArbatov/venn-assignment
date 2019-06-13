import React,{useState} from "react";
import styled from "styled-components";
import NavbarButton from "./NavbarButton";
import { connect } from "react-redux";
import * as ACTIONS from "../../actions/actionCreators";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const NavbarStyle = styled.div`
  background: #3e14a3;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ul {
    margin: 0;
    padding: 0;
  }
`;
const Navbar = props => {
  const [getState, setState] = useState({
    isPopoverOpen: false,
    mouseX: 0,
    mouseY: 0
  });
  const openPopup = e => {
    setState({
      ...getState,
      isPopoverOpen: true,
      mouseX: e.pageX,
      mouseY: e.pageY
    });
    console.log(getState);
  };

  const closePopup = () => {
    setState({ ...getState, isPopoverOpen: false });
    console.log(getState);
  };

  const saveSearch = () => {
    const values = props.galleryReducer.images;
    const keyword = props.galleryReducer.currentKeyword;
    //redux statecahnge/dispatch is sync
    props.saveSearch(keyword, values);

  };

  return (
    <NavbarStyle>
      <ul>
        <NavbarButton title="Save Search" clickListener={() => saveSearch()} />
      </ul>
      <ul>
        <NavbarButton
          title="Current Saves"
          clickListener={(e) => openPopup(e)}
          notification={props.galleryReducer.savedSearches.length}
        />
      </ul>

      <Popover
        open={getState.isPopoverOpen}
        anchorPosition={{ top: getState.mouseY, left: getState.mouseX }}
        onClose={closePopup}
        anchorOrigin={{
          vertical: getState.mouseY,
          horizontal: getState.mouseX
        }}>
                  <List component="nav">
                    {props.galleryReducer.savedSearches.map((savedSearch, index) => {
                      return <div key={index}>
                        <ListItem onClick={() => props.showSearch(index)} key={index}>
                          <ListItemText>{savedSearch.keyword}</ListItemText>
                        </ListItem>
                        {index === props.galleryReducer.savedSearches.length - 1 ? <></> : <Divider></Divider>}
                        
                      </div>
                    })}
                  </List>
        </Popover>
    </NavbarStyle>
  );


};
const mapStateToProps = state => {
  return {
    galleryReducer: state.galleryReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchImages: (page, searchTerm, isNewPage) => dispatch(ACTIONS.fetchImages(page, searchTerm, isNewPage)),
    saveSearch: (keyword, values) => dispatch(ACTIONS.saveSearch(keyword, values)),
    showSearch: index => dispatch(ACTIONS.showSearch(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
