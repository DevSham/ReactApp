import React, {Component} from 'react'
import Course from "./Course";

class CourseSales extends Component{
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
        this.sumprice = this.sumprice.bind(this);
    }
    sumprice(price){
        this.setState({ total: this.state.total + price })

    }
    render(){
        var courses = this.props.items.map((item, i) => {
            return <Course name={item.name} price={item.price} key={i} sumPrice={this.sumprice} active={item.active}/>
        } );
        return(
            <div>
                <h5>Welcome to course sales</h5><br/>
                <h5>You can buy courses</h5><br/>
                <div id="courses">
                    {courses}
                    <p id="total">Total <b>{this.state.total}</b></p>

                </div>

            </div>
        );
    }

}

export default CourseSales;