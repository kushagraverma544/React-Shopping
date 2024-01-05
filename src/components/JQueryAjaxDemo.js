import { useState, useEffect } from "react";
import $ from 'jquery';
import { useFormik } from "formik";

export default function JQueryAjaxDemo(){

    const [users, setUsers] = useState([]);
    const [userError, setUserError] = useState('');
    const formik = useFormik({
        initialValues:{
            UserId: '',
            UserName: '',
            Password: '',
            Age: 0,
            Mobile: '',
            Subscribed: false
        },
        onSubmit: values => {
            $.ajax({
                method: "POST",
                url: "http://localhost:5000/registeruser",
                data: values
            });
            alert("Registered Successfully...");
        }
    })

    useEffect(()=>{
        // async function fetchData() {
        //     try {
        //         const response = await $.ajax({
        //             method: "GET",
        //             url: "http://localhost:5000/getusers"
        //         });
        //         setUsers(response.data);
        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     }
        // }

        // fetchData();

        $.ajax({
            method: "GET",
            url: "http://localhost:5000/getusers",
            success: function(response){
                setUsers(response.data);
            }
        })
    },[]);

    // console.log(users);

    function VerifyUserId(e){
        for(let user of users){
            if(user.UserId === e.target.value){
                setUserError('User ID Taken - Try Another');
                break;
            }else {
                setUserError('User ID Available');
            }
        }
    }

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd>
                        <input type = "text" onKeyUp={VerifyUserId} value = {formik.values.UserId} name = "UserId" onChange={formik.handleChange}/>
                    </dd>
                    <dd>{userError}</dd>
                    <dt>User Name</dt>
                    <dd>
                        <input type = "text" values = {formik.values.UserName} name = "UserName" onChange={formik.handleChange}/>
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type = "password" values = {formik.values.Password} name = "Password" onChange={formik.handleChange}/>
                    </dd>
                    <dt>Age</dt>
                    <dd>
                        <input type = "number" values = {formik.values.Age} name = "Age" onChange={formik.handleChange}/>
                    </dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input type = "text" values = {formik.values.Mobile} name = "Mobile" onChange={formik.handleChange}/>
                    </dd>
                    <dt>Subscription</dt>
                    <dd className="form-switch">
                        <input type = "checkbox" className="form-check-input" checked = {formik.values.Subscribed} name = "Subscribed" onChange={formik.handleChange}/> Yes
                    </dd>
                </dl>
                <button type = "submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}