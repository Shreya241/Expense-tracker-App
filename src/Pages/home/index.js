import React from "react";
import "./home.css";
import Topfold from '../../Components/topfold'
import ExpenseList from "../../Components/expense-list";

const Home = () => {
  return (
    <div className="home">
      <Topfold/>
      <ExpenseList/>
    </div>
  );
};

export default Home;
