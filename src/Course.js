import React, {Component} from 'react'

class Course extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.clicker = this.clicker.bind(this);
    }
    clicker(){
        var active = !this.state.active;
        this.setState({active: active})
        this.props.sumPrice(active ? this.props.price: -this.props.price);

    }

    render(){
        return(
            <div>
                <p onClick={this.clicker}>{this.props.name}<b>{this.props.price}</b></p>

            </div>
        );
    }

}

export default Course;