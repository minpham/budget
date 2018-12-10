import React, { Component } from 'react';

class Income extends Component {
    render() {        
        return (
            <div className="income">
                <span className="label">income</span>
                <div className="total">{ this.props.income === 0 ? '' :  `+ ${new Intl.NumberFormat().format(this.props.income)}`}</div>
                <div className="clearfix"></div>
             </div>
        )
    }
}
export default Income;
