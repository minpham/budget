import React, { Component } from 'react';
import './App.css';
import AddBudget from './components/AddBudget';
import CurrentBudget from './components/CurrentBudget';
import ListBudget from './components/ListBudget';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works: []
        }
    }
    componentWillMount() {
        if(localStorage && localStorage.getItem('works')) {
            var works = JSON.parse(localStorage.getItem('works'));
            this.setState({
                works: works
            })
        }
    }
    onAddBudget = (data) => {
        var { works } = this.state;
        console.log(data);
        data.id = this.createID();
        if(data.money > 0 && data.des !== "") {
            works.push(data);
            this.setState({
                works: works
            })
            localStorage.setItem('works', JSON.stringify(works));
        }
    }

    getWorkDelete = (id) => {
        var { works } = this.state;
        var index = this.findIndex(id);
        if(index !== -1)
        {
            works.splice(index,1);
            this.setState({
                works: works
            })
            localStorage.setItem('works', JSON.stringify(works));

        }  
    }

    findIndex(id) {
        var { works } = this.state;
        var result = -1;
        works.forEach((work, index) => {
            result = work.id === id ? index : result;
        })
        return result;
    }

    createID() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
    }
    render() {        
        return (
            <div className="container-fluid">
                <div className="budget">
                    <div className="budget-title">
                        <h1>
                            Available Budget in Noverber 2018:
                        </h1>
                    </div>
                    <CurrentBudget budget={ this.state.works }/>
                </div>
                <AddBudget addBudget={ this.onAddBudget }/>
                <ListBudget budget={ this.state.works } getWorkDelete={ this.getWorkDelete }/>
		    </div>
        )
    }
}

export default App;
