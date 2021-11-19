import { Component } from "react";





class Cart extends Component{
  
    
    render(){
        //console.log(subTotal)
        
       return(
        <div className="cart">
            <h2>Shopping Cart</h2>
            <ul>
                <li>ummm i need to study more</li>
            </ul>
            <p>
                subTotal:formatPrice{this.props.subTotal}
            </p>
            <p>
                Tax:{this.props.tax}
            </p>
            <p>
                Total:{this.props.total}
            </p>

        </div>
       )
    }

    }

    


export default Cart
    