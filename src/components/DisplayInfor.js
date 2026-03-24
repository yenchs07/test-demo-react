import React from "react";
import UserInfor from "./UserInfor";


class DisplayInfor extends React.Component {
    render() {
        const { age, name } = this.props;
        // console.log(this.props);
        return (
            //destructuring array/object

            //props => viet tắt properties
            <div>
                <div>My name's {this.props.name}</div>
                <div>sap chec toi noi{this.props.age}</div>

            </div>
        )
    }
}
export default DisplayInfor;