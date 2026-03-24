//class components
//function components

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan IT", age: "30" },
            { id: 2, name: "Yen Trần", age: "22" },
            { id: 3, name: "Quỳnh Đỗ", age: "20" },

        ]
    }



    //JSX
    render() {
        const myInfor = ["ab", "c", "c"];
        //dry: don't rep 
        return (
            <div>

                <UserInfor />
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers}
                />

            </div>

        );

    }
}
export default MyComponent;