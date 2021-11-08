import Home from "./Pages/home";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route,Switch, } from "react-router-dom";
import AddExpense from "./Pages/add-expense";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/add-expense' component={AddExpense}/>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
