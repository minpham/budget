import React, { Component } from 'react';
import IncomeList from './IncomeList';
import ExpeneseList from './ExpeneseList';

class ListBudget extends Component {
    render() {
        var { budget } = this.props;
        var elmIncomes = budget.map((item, idx) => {
            var result = '';
            if(item.status === 1) {
                result =  <IncomeList key={idx} income={ item } deleteWork={ this.props.getWorkDelete }/>
            }
            return result;
        });
        var elmExpeneses = budget.map((item, idx) => {
            var result = '';
            if(item.status === 0) {
                result =  <ExpeneseList key={idx} expenese={ item } deleteWork={ this.props.getWorkDelete }/>
            }
            return result;
        });
        return (
            <div className="show-budget">
                <div className="show-income">
                    <div className="show-title">
                        <h1>income</h1>
                    </div>
                    { elmIncomes }
                </div>
                <div className="show-expenese">
                <div className="show-title">
                        <h1>expenese</h1>
                </div>
                    { elmExpeneses }
                </div>
            </div>
        )
    }
}
export default ListBudget;