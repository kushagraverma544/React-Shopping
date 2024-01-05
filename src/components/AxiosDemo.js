import axios from "axios";
import { useState, useEffect } from "react";

export default function AxiosDemo(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
           axios.get("http://localhost:5000/getusers").then(function(response){
            setUsers(response.data.data);
        }).catch(function(err){
            console.log(err); 
        });
    },[]);

    return(
        <div className="container-fluid">
            <h2>Users</h2>
            <ol>
                {
                    users.map(user=>
                        <li key = {user.UserId}>{user.UserId}</li>
                        )
                }
            </ol>
        </div>
    )
}