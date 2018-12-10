import React, { Component } from 'react';

class AddBudget extends Component {
    constructor(props) {
         super(props);
         this.state = {
             status: 1,
             des: '',
             money: 0
         }
    }
    onChangeBudget = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === "status") {
            value = value === "1" ? 1 : 0;
        }
        if(name === "money") {
            value = Number(value);
        }
        this.setState({
            [name]: value
        })
    }
    submitBudet = (event) => {
        event.preventDefault();
        this.props.addBudget(this.state);
        this.setState({
            des: '',
            money: ''
        })
    }
    render() {
        return (
            <form onSubmit={ this.submitBudet }>
                <div className="form-group">
                    <select 
                        className="custom-select" 
                        name="status"
                        onChange={ this.onChangeBudget }
                        value={this.state.status}
                    >
                        <option value={1}>+</option>
                        <option value={0}>-</option>
                    </select>
                    <input  name="des" 
                            className="custom-input input-des"  
                            type="text" 
                            placeholder="Add description" 
                            onChange={ this.onChangeBudget }
                            value={ this.state.des }
                    />
                    <input 
                            name="money"
                            className="custom-input input-money" 
                            type="number" 
                            placeholder="Value" 
                            onChange={ this.onChangeBudget }
                            value={ this.state.money === 0 ? '' : this.state.money }
                    />
                    <button className="custom-btn" type="submit"><i className="far fa-check-circle"></i></button>
                </div>
            </form>
        )
    }
}

export default AddBudget;