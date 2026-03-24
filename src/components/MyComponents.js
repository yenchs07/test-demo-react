//class components
//function components

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {



    //JSX
    render() {
        const myInfor = ["ab", "c", "c"];
        return (
            <div>

                <UserInfor />
                <br></br>
                <br></br>
                <DisplayInfor name="Yen Trần" age="30" />
                <hr />
                <DisplayInfor name="Yen Trần" age={26} myInfor={myInfor} />
            </div>

        );

    }
}
export default MyComponent;