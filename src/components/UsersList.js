import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions";
import { User, Nav, SortButton, SearchForm } from "./Styling";

const UsersList = () => {
  const storeUsers = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState(storeUsers);

  const dataURL = "https://raw.githubusercontent.com/nyvasilev11/simple-listing/master/data.json";

  // fetch data and dispatch users
  const getData = () => {
    fetch(dataURL)
      .then(res => res.json())
      .then(res => dispatch(getUsers(res)));
  };

  useEffect(() => {
    getData();
  }, []);

  // update user list
  useEffect(() => {
    setUsers(storeUsers);
  }, [storeUsers]);

  // filter users
  useEffect(() => {
    const result = storeUsers.filter(({ name }) => name.toLowerCase().indexOf(searchValue) > -1).sort((a, b) => b.name.localeCompare(a.name));
    setUsers(result);
  }, [searchValue]);

  // search form event
  const searchChangeHandler = ev => {
    const value = ev.target.value;
    setSearchValue(value);
  };

  // sort ascending order
  const ascendingOrder = () => {
    setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
  };

  // sort descending order
  const descendingOrder = () => {
    setUsers([...users].sort((a, b) => b.name.localeCompare(a.name)));
  };

  return (
    <>
      <Nav>
        <SortButton onClick={ascendingOrder}>Ascending Order</SortButton>
        <SortButton onClick={descendingOrder}>Descending Order</SortButton>
        <SearchForm type="text" value={searchValue} onChange={searchChangeHandler} />
      </Nav>
      <div>
        {users.map(({ id, name, email, message }, i) => (
          <User key={id}>
            <div>{i + 1}.</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{message}</div>
          </User>
        ))}
      </div>
    </>
  );
};

export default UsersList;
