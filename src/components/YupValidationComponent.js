import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";

export default function YupValidationComponent() {
  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <Formik
        initialValues={{
          UserName: "",
          Email: "",
          Age: "",
          City: "",
        }}
        validationSchema={yup.object({
          UserName: yup
            .string()
            .required("UserName is Required")
            .min(4, "Name is too short")
            .max(10, "Name is too long"),
          Email: yup
            .string()
            .required("Email is required")
            .email("Invalid Email Id"),
          Age: yup.number().required("Age is Required"),
          City: yup.string().required("Please Choose City"),
        })}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {(props) => 
          <Form>
            {
              <div>
                <dl>
                  <dt>User Name</dt>
                  <dd>
                    <Field name="UserName" type="text"></Field>
                  </dd>
                  <dd className="text-danger">
                    <ErrorMessage name="UserName"></ErrorMessage>
                  </dd>
                  <dt>Email</dt>
                  <dd>
                    <Field name="Email" type="text"></Field>
                  </dd>
                  <dd className="text-danger">
                    <ErrorMessage name="Email"></ErrorMessage>
                  </dd>
                  <dt>Age</dt>
                  <dd>
                    <Field name="Age" type="text"></Field>
                  </dd>
                  <dd className="text-danger">
                    <ErrorMessage name="Age"></ErrorMessage>
                  </dd>
                  <dt>City</dt>
                  <dd>
                    <Field name="City" as="select">
                      <option>Delhi</option>
                      <option>Jaipur</option>
                    </Field>
                  </dd>
                  <dd className="text-danger">
                    <ErrorMessage name="City"></ErrorMessage>
                  </dd>
                </dl>
                <button type = "submit" disabled={(props.isValid) ? false: true}>Register</button>
              </div>
            }
          </Form>
        }
      </Formik>
    </div>
  );
}
