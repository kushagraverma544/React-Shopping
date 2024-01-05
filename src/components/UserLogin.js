import { useState, useEffect } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import { useCaptcha } from "../hooks/useCaptcha";

export default function UserLogin(){

    const [cookies, setCookies, removeCookies] = useCookies(['username']);
    const [userDetails, setUserDetails] = useState({
        UserName: '',
        Password: ''
    });
    const code = useCaptcha();

    function handleUserName(e){
        setUserDetails({
            UserName: e.target.value,
            Password: userDetails.Password
        })
    }

    function handleEmail(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Password: e.target.value
        })
    }

    function handleLogin(){
        setCookies("username", userDetails.UserName, {path: "/", expires: new Date("2023-11-18 00:00")});
        alert('Login Success...');
    }

    function handleSignOut(){
        removeCookies("username");
        alert("Signed Out Successfully..");
    }

    useEffect(() => {
        if(cookies.username === undefined){
            alert("Please Login");
        }
    })

    return(
        <div className="container-fluid">
            <h2>User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input onChange={handleUserName} type = "text"/>
                </dd>
                <dt>Password</dt>
                <dd>
                    <input onChange={handleEmail} type = "password"/>
                </dd>
                <dt>Verify Code <button>New Code</button> </dt>
                <dd>{code.code}</dd>
            </dl>
            <button onClick={handleLogin}>Login</button>
            <hr />
            <h3>Home  <button onClick = {handleSignOut} className="btn btn-link">Signout</button> </h3>
            Hello! {cookies.username}
        </div>
    )
}