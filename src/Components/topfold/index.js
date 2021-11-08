import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../../redux/actions/expenses";
import "./topfold.css";
<link
  rel="stylesheet"
  href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
></link>;

const Topfold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i class="fi-rr-search"></i>
            <input
              value={query}
              placeholder="search for expenses"
              onChange={(e) => handleQuery(e)}
            ></input>
          </div>
          <Link to="/add-expense">
          <div className="add-button">
            <i class="fi-rr-add"></i>
            <label>Add</label>
          </div>
          </Link>
          
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
          <div className="add-topfold-button">
            <i class="fi-rr-angle-left"></i>
            <lable>Back</lable>
          </div>
          </Link>
          <Link to="/">
          <div className="add-topfold-button">
            <i class="fi-rr-cross-circle"></i>
            <lable>Cancel</lable>
          </div>
          </Link>
          
          
        </div>
      )}
    </div>
  );
};

export default Topfold;
