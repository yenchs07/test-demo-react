import React from "react";
import UserInfor from "./UserInfor";
import { use } from "react";


class DisplayInfor extends React.Component {
    render() {
        const { listUsers } = this.props;//object
        // const listUsers = this.props.listUsers;
        console.log(listUsers);
        // console.log(this.props);
        return (
            //destructuring array/object

            //props => viet tắt properties
            <div>
                {listUsers.map((user, index) => {

                    return (

                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr />
                        </div>
                    )

                })}
                {/* <div>My name's {this.props.name}</div>
                <div>sap chec toi noi{this.props.age}</div>
                <hr />
                <div>My name's {this.props.name}</div>
                <div>sap chec toi noi{this.props.age}</div>
                <hr />
                <div>My name's {this.props.name}</div>
                <div>sap chec toi noi{this.props.age}</div> */}

            </div>
        )
    }
}
export default DisplayInfor;