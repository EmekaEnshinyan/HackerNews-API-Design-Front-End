import React from "react";
import UserService from "./Service/UserService";

class UserComponent extends React.Component{

    //??
    //the state defines a users array
    constructor (props){
        //???
        super(props)
        this.state = {users:[]
        }
    }

    componentDidMount(){
        UserService.getUser().then((response) => {
            this.setState({users: response.data})
        });
    }
    
    //creates componnent that will display a list of usersm 
    //lifecyclle of componnent
    render (){
        return (<div>
            <h1 className = "text-center"> Articles List</h1>
            <table className = "table table-striped">
                <thread>
                    <tr>
                        <td> Article ID </td>
                        <td> Article By </td>
                        <td>  </td>

                    </tr>
                </thread>
                <tbody>
                    {
                        this.state.users.map(
                            user => 
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.By}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>)
    }

}

//need to export class

export default UserComponent;