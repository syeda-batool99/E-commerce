import React, {Component} from 'react';
// import Checkout from "./Checkout";
import {getCart, removeItem} from "./cartHelpers";
import { Link } from 'react-router-dom';

class Cart extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: [],
            redirect: false
        } 
    }

    componentDidMount(){
        this.setState({items: getCart()})
    }

    removeProduct = (id) => {
        // console.log('added');
        removeItem(id);
        alert("Item Deleted")
        this.setState({redirect: true})
      };

    showItems = (items) => {
        return (
            <div >
                {
                    items.length === 1 &&
                <h2 style={{color:"white"}}>Your cart has {`${items.length}`} item</h2> }
                { items.length > 1 &&
                    <h2 style={{color:"white"}}>Your cart has {`${items.length}`} items</h2>
                }
                {
                    items.length === 0 &&
                    <h2 style={{color:"white"}}>Your cart is Empty</h2>
                }

                <hr/>
                <div className="row">
                {items.map((product, i) => (
                    <div className="card mb-2 mt-4 col-md-4 " key={i} style={{backgroundColor:"black"}}>
                    <div className="card-body" style={{backgroundColor:"black"}} >
                        
                    <h5 className="card-title" style={{color:"white"}}>Title: {product.title}</h5>
                    <p className="card-text" style={{color:"white"}}>Description: {product.description}</p>
                    <hr style={{backgroundColor: "aqua"}}/>
                    <p className="card-text" style={{color:"white"}}>Rs. {product.price}</p>
                    <img alt="ProductImage" src={`http://localhost:3001/static/img/${product.imageName}`} style={{height:"150px", width:"180px"}}></img>
                    <br/> <br/>
                    <button
           onClick={this.removeProduct.bind(this,product._id)}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
                    </div>
                  </div>
                ))}
                 </div>

            </div>
        )
    }

    render(){
        
        return (
            <div className="container">
               
                        {this.showItems(this.state.items)}
                        
            <div className="row">
                <div className="col-md-7 offset-3">
                    {this.state.items.length ? <button  className="btn btn-success btn-block mb-5">
                        Place order
                    </button>
                    : 
                    <Link to={"/products"}  className="btn btn-primary btn-block mb-5">
                    Go to Shop
                </Link>
                }
                
                </div>
            </div>
            </div>
        )
    }
}

export default Cart;
