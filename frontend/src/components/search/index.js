import React from "react";
import {
  StyledSearchWrapper,
  StyledSearch,
  StyledSearchIcon,
  StyledMoStyledSearchIconClear,
} from "./StyledSearch";
import { MagnifyingGlass } from "../../assets/icons";

const Search = ({ className, value, onChange, onClear }) => {
  return (
    <StyledSearchWrapper className={className}>
      <StyledSearch
        maxLength={150}
        placeholder="Search"
        value={value}
        onChange={onChange}
      ></StyledSearch>
      {!value ? (
        <StyledSearchIcon alt="magnifier icon" src={MagnifyingGlass} />
      ) : (
        <StyledMoStyledSearchIconClear onClick={onClear} >x</StyledMoStyledSearchIconClear>
      )}
    </StyledSearchWrapper>
  );
};

export default Search;
