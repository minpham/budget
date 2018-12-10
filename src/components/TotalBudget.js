import React, { Component } from 'react';

class TotalBudget extends Component {
    render() {
        return (
            <div className="total-budget">
               { this.props.totalBudget < 0 ? `- ${new Intl.NumberFormat().format(Math.abs(this.props.totalBudget))}` : (this.props.totalBudget === 0 ? 0 : `+ ${new Intl.NumberFormat().format(this.props.totalBudget)}`) }
            </div>
        )
    }
}
export default TotalBudget;