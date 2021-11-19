import { Component } from "react";

class Form extends Component{
  constructor(){
      super()
      this.state={
          firstName:"",
          lastName:"",
          email:"",
          crediCard:"",
          zipCode:"",
      }
  }

 

  handlerUserInput = (event) => {
      this.setState ({
          [event.target.name]: event.target.value
      })
  }
  render(){
      return(
     <form>
         <h2>Checkout Form</h2>
     </form>
      )
  }
}

export default Form