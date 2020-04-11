import React, { Component } from 'react';
import './App.css';
import Counters from './Components/Counters'
import NavBar from './Components/navBar'

class App extends Component { 
      constructor(){
        super();
        this.state = {
            counters:[
                {id:1, value:10},
                {id:2, value:0},
                {id:3, value:17},
                {id:4, value:60},
            ]
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleDelete(productid){
        const counters = this.state.counters.filter(counter => counter.id!== productid);
        this.setState({counters:counters})
    }

    handleIncrement(counter){
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ... counter};
        counters[index].value++;
        this.setState({counters:counters})
    }

    handleReset(){
        const counters = this.state.counters.map(counter => {counter.value=0
             return counter});
        this.setState({counters:counters})
    }


  render() { 
    return ( 
      <div className="container">
      <NavBar 
        totalCounters={this.state.counters.filter(c => c.value>0).length}
      />
      <Counters
        onDelete={this.handleDelete}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        counters={this.state.counters}
      />
    </div>
     );
  }
}
 
export default App;