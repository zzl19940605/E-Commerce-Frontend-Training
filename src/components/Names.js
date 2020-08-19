import React, { Component } from 'react';
import {Name} from "./Name";
import {connect} from "react-redux";
class Names extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //can also get props from class instance  this.props
        //1. if you write JSX in multiple lines, you need ()
        //2. you must have only one root element
        return (
            <div>
                {/*<Name name="Alice">1</Name>
                <Name name="Bob">2</Name>
                <Name name="Carol">3</Name>*/}
                {
                    this.props.names.map((u, index) => {
                        return <Name name={u.name} key={index}>{u.age}</Name>
                    })
                }
            </div>
        );
    }
}
// appstate is the application state, which is the giant object in redux store
function mapStateToProps(appState) {
    return {
        names: appState.names
    }
}

export default connect(mapStateToProps) (Names);