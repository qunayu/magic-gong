import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

const HOME = 'react-home';

let component = <div></div>;
if(document.getElementById(HOME)) {
    component = <Home/>;
} else {
    console.log("CAN'T FIND ROOT");
    document.getElementById('react-root').style.height = "0";
}

ReactDOM.render(
    component,
    document.getElementById('react-root')
);