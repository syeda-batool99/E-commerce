import React, {Component} from 'react';
import {connect} from "react-redux";
import {getItems, deleteItem} from "../redux/productActions";
import PropTypes from "prop-types"
import AddProduct from './AddProduct';
import { Container } from 'reactstrap';

class OurProducts extends Component {
    
    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render(){
        const {products} = this.props.product;
        return(
            <div>
                <Container> 
                <AddProduct/>
                </Container>
                <div className="container">
                <div className="row">
                {products.map((p,i) => {
                    return(
                        
                        <div className="card mb-2 mt-4 col-4" key={i} style={{backgroundColor:"black"}}>
                        <div className="card-body" style={{backgroundColor:"black"}} >
                            
                        <h5 className="card-title" style={{color:"white"}}>Title: {p.title}</h5>
                        <p className="card-text" style={{color:"white"}}>Description: {p.description}</p>
                        <hr style={{backgroundColor: "aqua"}}/>
                        <p className="card-text" style={{color:"white"}}>Rs. {p.price}</p>
                        <img alt="ProductImage" src={`http://localhost:3001/static/img/${p.imageName}`} style={{height:"150px", width:"180px"}}></img>
                        <br/> <br/>
                        <button className="btn btn-danger"
                        onClick={this.onDeleteClick.bind(this, p.id)}>Delete</button>
                        </div>
                      </div>
                    )
                })}
                </div>
                </div>
                
            </div>
        )
    }
}

OurProducts.propTypes = {
    getItems: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    product: state.product
})

export default connect(mapStateToProps, {getItems, deleteItem})(OurProducts);