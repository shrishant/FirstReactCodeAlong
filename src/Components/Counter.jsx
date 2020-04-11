import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
    }

    render() { 
        return (
             <div>
             {this.props.children}
             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button> 
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button> 
            </div>
        );
    }
    formatCount(){
        if(this.props.counter.value==0){
            return "Zero"
        }
        return this.props.counter.value;
    }
    getBadgeClasses(){
        let classes="badge m-2 badge-"
        classes += this.props.counter.value ==0 ? "warning" : "primary"
        return classes;
    }
}
 
export default Counter;