//class components can be stateful, normally we will use class components
//stateful components are also called containers/ smart components
import React from 'react';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {addName} from "../actions/names.action";
class AddName extends React.Component{
    constructor(props){
        super(props);
        //each class component has its own stat object
        this.state = {
            user: {
                name: '',
                age: ''
            }
        };
    }
    onUserChangeHandler = (type,event)=>{
        const newState =this.state;
        newState.user[type] = event.target.value;
        // const user = {};
        // user[type] = event.target.value;//{age}
        // this.setState({
        //     user:user
        // })
    }

    addNameHandler =()=> {
        console.log(this.state.user);
        //modify the reference
        const newUser = {...this.state.user};
        // this.props.addName({name: 'test',age:100});
        this.props.addName(newUser);
       // this.props.addName();
    }
    render(){
            return (
                <div className="col-sm-2">
                <input className="form-control" type="text" onInput={this.onUserChangeHandler.bind(null, 'name')}/>
                <input className="form-control" type="number" onChange={this.onUserChangeHandler.bind(null, 'age')}/>
                <button onClick={this.addNameHandler} className="btn btn-outline-dark">Add Name</button>
                </div>
            );
    }
}
//this is the first param in connect function

function mapDispatchToProps(dispatch){
    //{addName} => {addName: addName} syntax sugar
    return bindActionCreators({addName},dispatch);
}

export default connect(null, mapDispatchToProps)(AddName);
        /*function connect(){
            return function(){
                we call connect ()(AddName)
            }
        }*/