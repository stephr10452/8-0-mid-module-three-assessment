import { Component } from "react";
import formatPrice from "../helpers/formatPrice";




class Product extends Component{
   

    
    render(){
        const { name,price,img,description, } = this.props.product;
        // console.log(product)

        return (
            <div className="product">
                <h2>{name}</h2>
            
                <p>{formatPrice(price)}</p>
                <p><button type="submit" onClick={this.props.handleAddtoCart}>Add to Cart</button></p>
                <img src={img} alt={name} />
                <p className="description">{description}</p>
            </div>
        )
    }
}

export default Product