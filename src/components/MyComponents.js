//class components
//function components

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan IT", age: "16" },
            { id: 2, name: "Yen Trần", age: "22" },
            { id: 3, name: "Quỳnh Đỗ", age: "68" },

        ]
    }
    handleAddNewUser = (userobj) => {
        let listUserClone = [...this.state.listUsers];
        // console.log(">>>check data", userobj);
        this.setState({
            listUsers: [userobj, ...this.state.listUsers]
            // listUsers: [...this.state.listUsers, userobj]
        })
    }
    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUserClone
        })
    }


    //JSX
    render() {
        // const myInfor = ["ab", "c", "c"];
        //dry: don't rep 
        const test = true;
        return (
            <>
                {/* {console.log("chekkkk",test)} */}
                {test}
                <br />
                <div className="a">

                    <AddUserInfor handleAddNewUser={this.handleAddNewUser}
                    />
                    <br></br>
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />

                </div>
                <div className="b">

                </div>
            </>

        );

    }
}
export default MyComponent;