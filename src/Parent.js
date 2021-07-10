import React, {Component} from 'react';
import Numbers from './Numbers';

class Parent extends Component{
    constructor(props) {
        super(props);
        //initial state
        this.state = {
            r: 0
        };

        this.randomNumber = this.randomNumber.bind(this);
    }

    randomNumber(){
        this.setState({r: Math.floor(Math.random()*10)})
    };

    render(){
        return(
            <div>
                <h1>My component</h1>
                <button onClick={this.randomNumber}>Gnenerate random numbers</button>
                <Numbers myNumber={this.state.r}/>
            </div>
        );
    }

}

export default Parent;