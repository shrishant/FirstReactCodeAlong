import React, { Component } from 'react';
import Counter from './Counter'

//till here

class Counters extends Component {

    render() { 
        //{console.log(this.props.counters)}
        return ( 
            <div>
                <button onClick={this.props.onReset} className="btn btn-danger btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => <Counter
                key={counter.id} 
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                counter={counter}
                >
                
                <h2>Element child id = {counter.id}</h2>
                </Counter>)}
            </div>
        );
    }
}
 
export default Counters;