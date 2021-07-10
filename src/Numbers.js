import React, {Component} from 'react';

class Numbers extends Component{
    render(){
        return(
            <div>
                <br/>
                {this.props.myNumber}
            </div>
        );
    }

}

export default Numbers;