import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Parent from "./Parent";
import Timer from './Timer';
import CourseSales from "./CourseSales";
const myfirstelement = <h1>Hello React!</h1>

function Person(props){
    return(
        <div className="person">
            <p>My name is { props.name}</p>
            <p>My age is {props.age}.</p>
        </div>
    );
}
var course = [
    {name: 'BSSE software enginnerin', price: 100000000},
    {name: 'MWSE painting', price: 20000000},
    {name: 'BCOM printing' , price: 30000000},
    {name: 'WINRE doctor', price: 40000000},
    {name: 'KIOPL sales person', price: 50000000},
];

var app = (
    <div>
        <Person name="Sham" age="29" />
        <Person name="Naka" age="39" />
        <Header/>
        <Parent/>
        <Timer start={Date.now()}/>
        <CourseSales items={course}/>

    </div>

);





ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(app, document.querySelector('#app'));
