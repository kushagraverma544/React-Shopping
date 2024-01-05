import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';

export default function IShopRegister(){

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            UserId: '',
            UserName: '',
            Password: '',
            Age: 0,
            Mobile: '',
            Subscribed: false
        },
        onSubmit: function(values){
            axios.post("http://localhost:5000/registeruser", values);
            alert("Registered Successfully...");
            navigate("/login");
        }
    })

    return(
        <div style = {{width: "100vh"}} className='d-flex flex-column align-items-center justify-content-center'>
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd>
                        <input type = "text" value = {formik.values.UserId} name = "UserId" onChange={formik.handleChange}/>
                    </dd>
                    <dt>User Name</dt>
                    <dd>
                        <input type = "text" values = {formik.values.UserName} name = "UserName" onChange={formik.handleChange}/>
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type = "password" values = {formik.values.Pasword} name = "Password" onChange={formik.handleChange}/>
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
                <button type = "submit" className="btn btn-primary mb-2">Register</button>
                <br />
                <Link to = "/login">Already have account ?</Link>
            </form>
        </div>
    )
}