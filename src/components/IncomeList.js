import React, { Component } from 'react';

class IncomeList extends Component {
    deleteWork = () => {
        this.props.deleteWork(this.props.income.id)
    }
    render() {
        var { income } = this.props;
            return (
                <div className="show-content">
                    <div className="show-des">
                        {income.des}
                    </div>
                    <div className="show-money">
                    {`+ ${new Intl.NumberFormat().format(income.money)}`}
                    <ion-icon onClick={ this.deleteWork } name="close-circle-outline"></ion-icon>
                    </div>
                    <div className="clearfix"></div>
                </div>
            )
    }
}

export default IncomeList;