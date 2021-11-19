import { Component } from "react"
import productData from "../data/productData"
import Product from "./Product"
import Cart from "./Cart"
import Form from "./Form"


class Products extends Component{
    constructor(){
        super()
        this.state ={
            cartSelection:[],
            subTotal:0,
            tax:0,
            total: 0,
            product:"",
            price:0,
            description:""
        }
    }
    handleAddtoCart=()=>{
        this.setState({
            cartSelection:[...this.state.cartSelection,this.state.product,this.state.price],
            subTotal: this.state.subTotal + this.state.price,
            tax: this.state.subTotal * .05,
            total: this.state.subTotal + this.state.tax
        })
    }
    render(){
    //    console.log(productData)
        let allproducts = productData.map((product, i) => <Product key={product.name + i} product={product} />)
        //  console.log(allproducts)
        return (
        
            <div className="products">
               {allproducts}
               <Cart handleAddtoCart={this.handleAddtoCart} />
               <Form />
            </div>
        )
    }
}

export default Products