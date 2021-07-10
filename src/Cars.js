import React, {Component} from 'react';

class Cars extends Component{
    render(){
        return(
            <div>
                <h1>I am a car component</h1>
                <h2>{this.props.msg}</h2>
                <div>
                    {this.props.coolcars.map((item, i) => {
                        return <p key={i}>{items}</p>
                    })}
                </div>
            </div>
        );
    }

}

export default Cars;