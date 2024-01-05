import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function IShopLogin(){
    
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [cookies, setCookies, removeCookies] = useCookies();
    const formik = useFormik({
        initialValues:{
            UserId: '',
            Password: ''
        },
        onSubmit: function(values){
             for(var user of users){
                if(user.UserId === values.UserId && user.Password === values.Password){
                    setCookies("userid", user.UserId);
                    navigate("/dashboard");
                    break;
                }else{
                    navigate("/errorpage");
                }
             }
        }
    });

    useEffect(()=>{
        axios.get("http://localhost:5000/getusers").then(response=>{
            setUsers(response.data.data);
           })
    },[]);

    return(
        <div className="d-flex flex-column align-items-center justify-content-center" style={{width:"100vh"}}>
            <h2>User Login</h2>
            <form className="d-flex flex-column align-items-center justify-content-center mb-2" onSubmit={formik.handleSubmit}>
                <dt className="align-self-start">User Id</dt>
                <dd>
                    <input name = "UserId" value = {formik.values.UserId} onChange={formik.handleChange} type = "text"/>
                </dd>
                <dt className="align-self-start">Password</dt>
                <dd>
                    <input name = "Password" value = {formik.values.Password} onChange={formik.handleChange} type = "password"/>
                </dd>
                <button type = "submit" className="btn btn-primary">Login</button>
            </form>
            <Link className="align-self-center" to = "/register">New User ?</Link>
        </div>
    )
}