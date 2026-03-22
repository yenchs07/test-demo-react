//class components
//function components

import React from "react";

class MyComponent extends React.Component {


    state = {
        name: "Yen",
        address: "Quang ngai ",
        age: 25
    };

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i from {this.state.address}
            </div>

        );

    }
}
export default MyComponent;