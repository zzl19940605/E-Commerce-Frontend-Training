import React from 'react';
import {connect} from "react-redux";
export default function (ExistingComponent){
    class WrapperHOCComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = '';
        }
        static getDerivedStateFromProps(props, currentState){
            // if(props.user){
            //     return currentState;
            // }else{
            //
            //     return currentState;
            // }
            if(!props.user){
                //navigate user away/redirect
                props.history.push('/login');
            }
            return currentState;
        }
        render(){
            return (
                <ExistingComponent {...this.props}/>
            );
        }
    }
    function mapStateToProps({user}) {
        return {user};
    }
    return connect()(WrapperHOCComponent);
}