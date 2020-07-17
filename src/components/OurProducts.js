import React, {Component} from 'react';
import {connect} from "react-redux";
import {getItems, deleteItem} from "../redux/productActions";
import PropTypes from "prop-types"
import AddProduct from './AddProduct';
import { Container, Jumbotron } from 'reactstrap';
import {addItem} from "./cartHelpers";
import Loading from "./Loading"

class OurProducts extends Component {
    
    componentDidMount(){
        this.props.getItems();
    }

    isAuthenticated = () => {
        if (localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user'));
        } else {
            return null;
        }
    };

    onDeleteClick = (id, token) => {
        this.props.deleteItem(id, token);
    }

    addToCart = (product) => {
        // console.log('added');
        addItem(product);
        alert("Item Added")
      };
    
    render(){
        const {products} = this.props.product;
        const details = this.props.user;
        const token = this.isAuthenticated().token;
        return(
            <div>
                <Container> 
                <AddProduct/>
                </Container>
                <div className="container mt-3">
                    {(products.length === 0) ? <Loading/> : <>
                <div className="row">
                {products.map((p,i) => {
                    return(
                        <div className="card mb-2 mt-4 col-md-4 " key={i} style={{backgroundColor:"black"}}>
                        <div className="card-body" style={{backgroundColor:"black"}} >
                            
                        <h5 className="card-title" style={{color:"white"}}>Title: {p.title}</h5>
                        <p className="card-text" style={{color:"white"}}>Description: {p.description}</p>
                        <hr style={{backgroundColor: "aqua"}}/>
                        <p className="card-text" style={{color:"white"}}>Rs. {p.price}</p>
                        <img alt="ProductImage" src={`http://localhost:3001/static/img/${p.imageName}`} style={{height:"150px", width:"180px"}}></img>
                        <br/> <br/>
                        <button className="btn btn-danger"
                        onClick={this.onDeleteClick.bind(this, p._id, token )}>Delete</button>
                        &nbsp; &nbsp;
                        <button onClick={this.addToCart.bind(this,p)} className="btn btn-primary mt-2 mb-2 ">  
                         Add to cart
                        </button>
                        </div>
                      </div>
                    )
                })}
                </div>
                </>}
                </div>
               
            </div>
        )
    }
}

OurProducts.propTypes = {
    getItems: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    user: PropTypes.object
}

const mapStateToProps = (state) => ({
    product: state.product,
    user: state.user.user
})

export default connect(mapStateToProps, {getItems, deleteItem})(OurProducts);