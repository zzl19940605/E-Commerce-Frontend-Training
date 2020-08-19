import React, { Component } from 'react';
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {addProduct} from "../actions/products.action";
import Snackbar from "@material-ui/core/Snackbar";

const PRODUCT_FIELDS = ['name', 'brand', 'price', 'stock', 'image'];
class AddProduct extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newProduct: {},
            msg: '',
            open: false
        };
    }
    updateControl(event) {
        const newProduct = {...this.state.newProduct};
        newProduct[event.target.id] = event.target.value;
        this.setState({newProduct});
    }
    renderControl(field) {
        const inputType = field === 'price' || field === 'stock' ? 'number' : 'text';
        return (
            <div key={field} className="form-group">
                {/* turn first letter to upper case */}
                <label htmlFor={field}>{field}</label>
                <input
                    type={inputType}
                    id={field}
                    className="form-control"
                    name={field}
                    onInput={this.updateControl.bind(this)}
                />
            </div>
        );
    }
    submit = (event) => {
        const newProduct = {...this.state.newProduct};
        event.preventDefault();
        this.props.addProduct(newProduct,
            (success) =>{
                this.showSnackBar(success);
            },
            (error) => {
                this.showSnackBar(error);
            }
        );
    };
    showSnackBar = (msg) => {
        this.setState({
            open: true,
            msg: msg
        })
    };
    handleClose = () => {
        this.setState({
            open: false
        })
    };
    render() {
        return (
            <main className="container">
                <h2>Add Product</h2>
                <form onSubmit={this.submit}>
                    {
                        PRODUCT_FIELDS.map(field => this.renderControl(field))
                    }
                    <Button variant="contained" color="primary" type="submit">
                        Add Product
                        <CloudUploadIcon style={ {marginLeft: '10px'} }/>
                    </Button>
                </form>
                <Snackbar
                    anchorOrigin={ {vertical: 'bottom', horizontal: 'center'} }
                    open={this.state.open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={this.state.msg}
                />
            </main>
        );
    }
}

export default connect(null, {addProduct})(AddProduct);