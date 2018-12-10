import React, { Component } from 'react';

class ExpeneseList extends Component {
   deleteWork = () => {
       this.props.deleteWork(this.props.expenese.id);
   }
    render() {
        var { expenese } = this.props;
        return (
            <div className="show-content">
                <div className="show-des">
                    { expenese.des }
                </div>
                <div className="show-money">
                {`- ${new Intl.NumberFormat().format(Math.abs(expenese.money))}`} 
                <ion-icon onClick={ this.deleteWork } name="close-circle-outline"></ion-icon>
                </div>
               
                <div className="clearfix"></div>
            </div>
        )
    }
}

export default ExpeneseList;