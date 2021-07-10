import React, {Component} from 'react';
import Cars from './Cars';
// import PropTypes from 'prop-types'


class Header extends Component{
    constructor(props) {
        super(props);
        //initial state
        this.state = {
            cars: ['mik', 'doe', 'opi', 'wio'],
            r: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }
    //change state
    handleClick(){
        this.setState({cars: this.state.cars.reverse()});
        }

    render(){
        return(
            <div>
                <h1>My component</h1>
                <button onClick={this.handleClick}>ReverseCar</button>
                <Cars msg="Subaru Sport" coolcars={this.state.cars}/>
            </div>
        );
    }

}

// Header.propTypes = {
//     propObject: React.PropTypes.object,
//     propString: React.PropTypes.string,
//     propNumber: React.PropTypes.number
// }
//
// Header.defaultProps = {
//     propString: "DEv rock",
//     propNumber: 3,
//     propObject: {
//         obj1: "dia 1",
//         obj12: "dia 2",
//         obj3: "dia 3",
//         obj4: "dia 4",
//     }

// }

export default Header;