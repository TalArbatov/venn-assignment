import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  li {
    list-style-type: center;
    display: inline-block;
    line-height: 60px;
    padding: 0 20px;
    transition: 0.4s;
    position:relative;
    cursor: pointer;
    color: #efefef;
    p {
        display:inline-block;
        margin:0;
        padding:0;
    }
  }
  li:hover {
    background-color: #5a30bd;
  }
  
`;

const Badge = styled.div`
  width:17px;
  height:17px;
  background:red;
  border-radius:50%;
  position:absolute;
  top:7px;
  right:7px;
  div {
      position: relative
      p {
        margin:0;
        padding:0;
        color:white;
        line-height:initial;
        position:absolute;
        top:2px;
        right:6px;
        font-size:12px;
    }
  }
  
`

const NavbarButton = props => {

  return (
    <Wrapper>
      <li onClick={(e) => props.clickListener(e)}>
        <p>{props.title}</p>
        {props.notification ? <Badge>
            <div>
            <p>{props.notification}</p>
            </div>
        </Badge>
        : <></>}
        
      </li>
    </Wrapper>
  );
};

export default NavbarButton;
