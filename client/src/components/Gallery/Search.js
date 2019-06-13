import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ToggleWrapper = styled.div`
display: flex;
justify-content: center;
p {
  margin:0;
  padding:0;
  line-height:40px;
  margin-bottom: 60px;

}
`

const Search = props => {
  const onSearchKeyUp = input => {
    props.onSearchKeyUp(input);
  };

  const handleSwitchChange = input => {
    props.handleSwitchChange()
  }

  return (
    <>
    <SearchWrapper>
      <TextField
        id="outlined-uncontrolled"
        label="Search for images"
        margin="normal"
        variant="outlined"
        className={{ width: "500px" }}
        style={{ width: "500px" }}
        onChange={e => onSearchKeyUp(e.target.value)}
      >
        {" "}
      </TextField>
    </SearchWrapper>
    <ToggleWrapper>
      <p>AND</p>
        <Switch
        defaultChecked
        value="checkedF"
        color="default"
        onChange={(e) => handleSwitchChange(e)}
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <p>OR</p>
    </ToggleWrapper>
    </>
  );
};

export default Search;
