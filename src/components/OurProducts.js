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
                {products.map((p,i) => {
                    return(
                        <div key={i} className="container">
                        <div className="card mb-2 mt-4 col-6 col-md-12" >
                        <div className="card-body" style={{backgroundColor:"black"}} >
                            <img alt="ProductImage" src={`http://localhost:3001/static/img/${p.imageName}`} style={{height:"150px", width:"180px"}}></img>
                        <h5 className="card-title" style={{color:"white"}}>Title: {p.title}</h5>
                        <p className="card-text" style={{color:"white"}}>Description: {p.description}</p>
                        <p className="card-text" style={{color:"white"}}>Rs. {p.price}</p>
                        <button className="btn btn-danger"
                        onClick={this.onDeleteClick.bind(this, p.id)}>Delete</button>
                        </div>
                      </div>
                      </div>
                    )
                })}
                
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