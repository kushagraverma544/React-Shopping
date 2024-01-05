import { Formik, useFormik } from "formik";

export default function FormikDemo(){

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: '',
            City: '', 
            Subscribe: true
        },
        onSubmit : values => {
            alert(`${values.UserName.toUpperCase()} \nSubscription: ${(values.Subscribe === true)? "Subscribed": "Not Subscribed"}`);
        }  
    });

    return(
        <div className="container-fluid">
            <form onSubmit = {formik.handleSubmit}>
                <h2>Registration Form</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input name = "UserName" onChange={formik.handleChange} value = {formik.values.UserName} type = "text"/>
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input name = "Password" onChange={formik.handleChange} value = {formik.values.Password} type = "password"/>
                    </dd>
                    <dt>City</dt>
                    <dd>
                        <select name = "City" onChange={formik.handleChange} value = {formik.values.City}>
                            <option>Delhi</option>
                            <option>Jaipur</option>
                        </select>
                    </dd>
                    <dt>Subscribe</dt>
                    <dd className="form-switch">
                        <input className="form-check-input" name = "Subscribe" checked={formik.values.Subscribe} onChange={formik.handleChange} type = "checkbox"/> Yes
                    </dd>
                </dl>
                <button>Register</button>
            </form>
            <h2>User Details</h2>
            <h4 className="text-secondary">{formik.values.UserName.toUpperCase()}</h4>
        </div>
    );
}