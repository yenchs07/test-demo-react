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
        // console.log("My name is ", this.state.name);
        ///merge stage=>react class

        this.setState({
            name: "em QUỳnh",
            age: Math.floor((Math.random() * 100) + 1)
        })


        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }
    handleOnMoverOver(event) {
        console.log(event.pageX);
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>Hover</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click</button>

            </div>

        );

    }
}
export default MyComponent;