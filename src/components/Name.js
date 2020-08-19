//for functional components, it will be stateless components(holds true before react 16.8)
//class component can also be stateless
//stateless components are also called dumb component / presentational component: display
import React from 'react';

//use function to create a component/ function component
//the param props is passed by react, you can rename it, but not recommended
//props is ead only
export const Name = (props) => {
    console.log(props);
    //props is ead only
    //props.name = 'bob';//error
    //parent to child communication
    return <div style = { {border: '1px solid black', padding: '20px'} }>{props.name} age is {props.children}</div>
};
