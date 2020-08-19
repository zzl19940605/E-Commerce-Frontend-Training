import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getProducts} from "../actions/products.action";

class EditProduct extends React.Component{

    componentDidMount(){
        console.log('2');
        !this.props.products && this.props.getProducts();
    }
    //will be executed whenever props changed
    //it also expects you to return a new state
    // static getDerivedStateFromProps(props, currentState) {
    //     if(props.products){
    //
    //         //prefill the form
    //         // props.initialize(product);
    //         return {
    //             editProduct: product
    //         }
    //     }
    //     return null;
    // }

    renderField(field){
            console.log(field);
            const type = field.input.name === 'price' || field.input.name ==='stock' ? 'number':'text';
            return (
                <div className="form-group">
                    <label htmlFor={field.input.name}>{field.input.name}</label>
                    <input
                        className="form-control"
                        type={type}
                        id={field.input.name}
                        // react developer use to get parent component into own component
                        {...field.input}
                    />
                    <div style={ {color: 'red'} }>{field.meta.error}</div>
                </div>
            )
    }
    render(){
        return (
            <main className="container">
                <h2>Edit Product {this.props.match.params.id}</h2>
                <form>
                    {/*parent component*/}
                    {/* Higher order component */}
                    <Field
                        name="name"
                        component={this.renderField}
                    />
                    <Field
                        name="brand"
                        component={this.renderField}
                    />
                    <Field
                        name="price"
                        component={this.renderField}
                    />
                    <Field
                        name="stock"
                        component={this.renderField}
                    />
                    <Field
                        name="image"
                        component={this.renderField}
                    />
                </form>
            </main>
        );
    }
}
function validate(values){
    const errors = {};
    for(const key in values){
        if (!values[key]){
            errors[key] = `${key} can't be empty`;
        }
    }
    /*if(!values.name){
        errors.name = 'Name can\'t be empty'
    }*/
    return errors;
    // console.log(values);
}
//syntax sugar
//object destructural
//obj= {product: [1,2,3]}  const {products} =obj;  =>const products = obj.products
function mapStateToProps({products, form}, componentProps){
    console.log('1');
    console.log(products);
    const id = +componentProps.match.params.id;
    const product = products&&products.find(p => p.id===id);
    return {
        products,
        initialValues: product
    };
}
export default connect(mapStateToProps, {getProducts})(reduxForm({
    form: 'EditProductForm',
    enableReinitialize: true,
    // initialValues:{name:'mars'},
    validate
})(EditProduct));