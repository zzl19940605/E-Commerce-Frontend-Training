import React from 'react'; // default import
import { Name } from '../components/Name';
import Names from "../components/Names";
import AddName from "./AddName";
import Products from "./Products"
import {Header} from "../components/Header";

export default class App extends React.Component{
    names;
    constructor(){
        super();
        // this.names = [{
        //     name: 'alice',
        //     age: 12
        // },
        // {
        //     name: 'bob',
        //     age: 21
        // }];
        this.state={
            //tech debt, names should be change to users
            names :[{
                name: 'alice',
                age: 12
            },
            {
                name: 'bob',
                age: 21
            }]
        };
    }

    addName = (user) =>{
        // this.names.push(user);
        //immutable way to modify state
        // const newState = {...this.state};
        // newState.names.push(user);
        // this.setState(newState);
        const newNames = this.state.names;
        newNames.push(user);
        // this.state.names.push(user);
        //render() will not start the reconciliation. it just return a react element
        //this.render();
        //will call render, add to new virtual DOM, run reconciliation...
        // this.forceUpdate();
        this.setState({
            names: newNames
        });
    };
    render() {
        // return <Name name="Alice" >17</Name>;
        // return <Names/>;
        /*return <Names names={this.name}/>;*/
        return (
            <React.Fragment>
                {/*syntax sugar <> , in angular the similar approach is ng-container*/}
                {/*mont: put related element into DOM*/}
                <Header/>
                {/*<AddName addName={this.addName}/>*/}
                {/*<Names names={this.state.names}/>*/}
                {/*<Products />*/}
                {this.props.children}
            </React.Fragment>
        );
    }

}