//class components
//function components

import React from "react";

class MyComponent extends React.Component {


    state = {
        name: "Yen",
        address: "Quang ngai ",
        age: 25
    };

    handleClick(event) {
        console.log(">>click me my button");
        console.log("My name is ", this.state.name);
    }
    handleOnMoverOver(event) {
        console.log(event.pageX);
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i from {this.state.address}
                <button onMouseOver={this.handleOnMoverOver}>Hover</button>
                <button onClick={this.handleClick}>Click</button>

            </div>

        );

    }
}
export default MyComponent;