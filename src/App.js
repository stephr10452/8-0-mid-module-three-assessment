import { Component } from "react";
import "./App.css";
import Products from "./components/Products";


class App extends Component {

  
  
  render(){
  return(
    <div className="App">
      <h1>My Garage Sale</h1>
       <Products />
       
   </div>
  )
}
}


export default App;
