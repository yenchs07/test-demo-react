import React from "react";

import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUsers } = this.props;//object
        // const listUsers = this.props.listUsers;
        // console.log(listUsers);
        // console.table(listUsers)
        // console.log(this.props);
        //template +logic js
        return (
            <div className="display-Infor-Container"   >
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>

                        {
                            this.state.isShowListUser === true ? "Hide list user: " : "Show list user: "}
                    </span>
                </div>
                {
                    this.state.isShowListUser &&

                    <>
                        {listUsers.map((user, index) => {

                            return (

                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button on onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )

                        })}




                    </>
                }
            </div >
        )
    }

}
export default DisplayInfor;