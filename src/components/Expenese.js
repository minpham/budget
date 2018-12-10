import React, { Component } from 'react';

class Expenese extends Component {    
    render() {
        return (
            <div className="expenese">
                <span className="label">expenese</span>
                <div className="total">{ this.props.expenese === 0 ? '' :  `- ${new Intl.NumberFormat().format(Math.abs(this.props.expenese))}`} </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}
export default Expenese;