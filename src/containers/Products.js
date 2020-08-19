import React, {Component} from 'react';
import {connect} from "react-redux";
import {getProducts} from "../actions/products.action";
import {Link} from "react-router-dom";

class Products extends Component {

    style = {
        width: '100px',
        height: '80px'
    };

    constructor(props) {
        super(props);

        // Q: what does this do? => add showProducts() to props, so that can subscribe to state change
        props.getProducts();

        this.state = {
            // products: [
            // { name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone.jpg' },
            // { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3G.jpg'},
            // { name: 'iPhone3GS', brand: 'Apple', price: 300, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3GS.jpg'},
            // { name: 'iPhone4', brand: 'Apple', price: 400, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4.jpg'},
            // { name: 'iPhone4S', brand: 'Apple', price: 500, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4S.jpg'},
            // { name: 'iPhone5', brand: 'Apple', price: 600, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5.jpeg'},
            // { name: 'iPhone5C', brand: 'Apple', price: 700, stock: 222, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5c.png'},
            // { name: 'iPhone5S', brand: 'Apple', price: 800, stock: 333, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5s.jpg'},
            // { name: 'iPhone6', brand: 'Apple', price: 900, stock: 111, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone6.jpg'}
            // ]
        };

    }

    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Image</th>
                </tr>
                </thead>

                <tbody>
                {
                    this.props.products && this.props.products.map((p, index) => {
                        return (
                            <tr key={index}>
                                <td><Link to={`/edit-product/${p.id}`}>{p.name}</Link></td>
                                <td>{p.brand}</td>
                                <td>{p.price}</td>
                                <td>{p.stock}</td>
                                <td><img style={this.style} src={p.image}/></td>
                            </tr>
                        );
                    })
                }
                </tbody>

            </table>
        );
    }
}

// appState is the application state, which is a giant object in redux store
// get data from redux store
// products : products = appState.products
function mapStateToProps({products}) {
    // return {
    //     // from root.reducer
    //     products: appState.products
    // };
        
    // return a new object, {products: products}
    return {products};
}

// call action creator
// function mapDispatchToProps(dispatch) {
// }

// syntax sugar for using bindActionCreators: directly import showProducts()
export default connect(mapStateToProps, {getProducts})(Products);