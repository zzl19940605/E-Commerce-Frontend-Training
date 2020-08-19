import React from 'react'
import {login} from "../actions/login.action";
import {bindActionCreators} from "redux";
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";

class Login extends React.Component{
    constructor(props){
        super(props);

    }

    renderUsername(field){
        // console.log('username: ',field);
        // const type = field.input.name === 'price' || field.input.name ==='stock' ? 'number':'text';
        return (
            <div className="form-group">
                <label htmlFor="username">username</label>
                <input
                    className="form-control"
                    type ="text"
                    id="username"
                    // react developer use to get parent component into own component
                    {...field.input}
                />
            </div>
        )
    }
    renderPassword(field){
        // console.log('password: ',field);
        const type = field.input.name==='password'? 'password':'text';
        // const type = field.input.name === 'price' || field.input.name ==='stock' ? 'number':'text';
        return (
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input
                    className="form-control"
                    type="text"
                    id="password"
                    // react developer use to get parent component into own component
                    {...field.input}
                />
            </div>
        )
    }
    submit = (user) =>{
        console.log('user: ',user);
        this.props.login(user);
    };
    render(){
        return (
            <main className="container">
                <h2>Login</h2>
                <form className="form-group" onSubmit={this.props.handleSubmit(this.submit)}>
                    <Field
                        name="username"
                        component={this.renderUsername}
                    />
                    <Field
                        name="password"
                        component={this.renderPassword}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        login
                    </Button>
                </form>
            </main>
        )
    }
}

export default connect(null, {login})(reduxForm({
    form: 'loginForm',
    // initialValues:{name:'mars'},
    validate: null
})(Login));