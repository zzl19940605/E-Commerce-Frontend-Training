import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
// import { Name } from './components/Name';
import ABC from './containers/App'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Products from "./containers/Products";
import Names from "./components/Names";
import AddName from "./containers/AddName";
import {Provider} from "react-redux";
import {rootReducer} from "./reducers/root.reducer";
import {applyMiddleware, createStore} from "redux";
import ReduxPromise from 'redux-promise';
import AddProduct from "./containers/AddProduct";
import EditProduct from "./containers/EditProduct";
import login from "./containers/login";
import auth from "./components/auth.hoc"
//create a h1 tag with Hello World angujs
/*const h1 = document.createElement('h1');
const text = document.createTextNode('hello world');
h1.appendChild(text);
document.querySelector('#root').appendChild(h1);*/

/*//raw way to create react element
const h1ReactElem = React.createElement('h1', {style: {color: 'red'}}, 'Hello World');
//can also use document.getElementById();
ReactDOM.render(h1ReactElem, document.querySelector('#root'));*/

//***JSX:JavaScript with eXtension (JS+HTML)
// const h1ReactElem = <h2 id="my_h2" className={}>Hello World</h2>;
/*const bob='bob';
const h1ReactElem = <h2 id="my_h2">Hello World {bob}</h2>;*/
// ReactDOM.render(<Name></Name>, document.querySelector('#root'));
// ReactDOM.render(<ABC></ABC>, document.querySelector('#root'));

// ReactDOM.render(<ABC/>, document.querySelector('#root'));

const names =[{
    name: 'alice',
    age: 12
},
    {
        name: 'bob',
        age: 21
    }];

const addName = (u)=>{
    names.push(u);
};
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <ABC>
                <Switch>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/add-Product" component={auth(AddProduct)}/>
                    <Route path="/edit-product/:id" component={EditProduct}></Route>
                    <Route path="/names" component={Names}/>
                    {/*<Route path="/add-name" component={() => <AddName addName={addName}/>}/>*/}
                    <Route path="/add-name" component={AddName}/>
                    <Route path="/login" component={login}/>
                    <Route component={Products}/>

                </Switch>
            </ABC>
        </BrowserRouter>
    </Provider>

    , document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
