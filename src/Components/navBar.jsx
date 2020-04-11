import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        console.log(this.props.totalCounters)
        return ( 
            <nav className="navbar navbar-light bg-light m-2">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="badge badge-pill badge-secondary m-2">{this.props.totalCounters}</div>
            </nav>
         );
    }
}
 
export default NavBar;