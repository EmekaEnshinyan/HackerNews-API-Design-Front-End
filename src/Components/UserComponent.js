import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component{

    //??
    //the state defines a users array
    constructor (props){
        //???
        super(props)
      this.state = {user:[]
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
                        <td> Article By </td>
                        <td> Article Descendents </td>
                        <td> Article Id </td>
                        <td> Article Kids </td>

                    </tr>
                </thread>
                <tbody>
                    {
                        this.state.user.map(
                            user => 
                                <tr key = {user.id}>
                                    <td>{user.By}</td>
                                    <td>{user.Descendents}</td>
                                    <td>{user.Id}</td>
                                    <td>{user.Kids}</td>
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