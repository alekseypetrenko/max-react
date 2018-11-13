import React, {Component} from "react";


class Person extends Component {
    render() {
        return (
            <div>
                <p onClick={this.props.clickInApp}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>

        )
    }

}

export default Person;