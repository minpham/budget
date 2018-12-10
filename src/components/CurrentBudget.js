import React, { Component } from 'react';
import TotalBudget from './TotalBudget';
import Income from './Income';
import Expenese from './Expenese';

class CurrentBudget extends Component {
    render() {
        var { budget } = this.props;
        var totalIncome = budget.reduce((x , y) => {
            if(y.money === "") {
                y.money = 0;
            }
            if(y.status === 1) {
                return x + y.money;
            }else{
                return x;
            }
        }, 0)
        var totalExpenese = budget.reduce((x , y) => {
            if(y.money === "") {
                y.money = 0;
            }
            if(y.status === 0) {
                return x + y.money;
            }else{
                return x;
            }
        }, 0)
        var totalBudget = budget.reduce((x, y) => {
                if(y.money === "") {
                    y.money = 0;
                }
                if(y.status === 1) {
                    return x + y.money;
                }else {
                    return x - y.money;
                }

        }, 0)
        return (
            <>
                <TotalBudget totalBudget={ totalBudget }/>
                <Income income={ totalIncome } />
                <Expenese expenese={ totalExpenese } />
            </>
        )
    }
}

export default CurrentBudget;
