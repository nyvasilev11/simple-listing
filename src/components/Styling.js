import styled from "styled-components";

export const User = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr 1fr 3fr;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #000;
  padding-left: 5px;
  &:first-child {
    margin-top: 20px;
  }
  &:last-child {
    border-bottom: 1px solid #000;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const SortButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: 0;
  background: #00807b;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  &:active {
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const SearchForm = styled.input`
  outline: none;
  border: 1px solid #999;
  font-size: 20px;
  border-radius: 5px;
  padding: 0 5px;
  &:focus {
    border-color: #00807b;
  }
`;
