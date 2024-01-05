import { useFormik } from "formik";
import * as yup from "yup";

export default function YupValidation() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Email: "",
      Age: 0,
    },
    validationSchema: yup.object({
      UserName: yup
        .string()
        .required("User Name Required")
        .min(4, "Name too short")
        .max(10, "Name too long"),
      Email: yup.string().required("Email is required").email("Invalid Email"),
      Age: yup.number().required("Age Required"),
    }),
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <h2>Register User</h2>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input {...formik.getFieldProps("UserName")} type="text" />
          </dd>
          <dd className="text-danger">{formik.errors.UserName}</dd>
          <dt>Email</dt>
          <dd>
            <input {...formik.getFieldProps("Email")} type="text" />
          </dd>
          <dd className="text-danger">{formik.errors.Email}</dd>
          <dt>Age</dt>
          <dd>
            <input {...formik.getFieldProps("Age")} type="text" />
          </dd>
          <dd className="text-danger">{formik.errors.Age}</dd>
        </dl>
        <button>Register</button>
      </form>
    </div>
  );
}
