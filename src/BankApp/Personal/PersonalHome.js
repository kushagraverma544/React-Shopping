import { Link, Outlet } from "react-router-dom"

export default function PersonalHome(){
    return(
        <div>
            <h2>Personal Home</h2>
            <ul>
                <li> <Link to = "plogin">Login</Link> </li>
                <li> <Link to="pregister">Register</Link> </li>
            </ul>
            <hr />
            <Outlet />
            <br />
            <div>
                <Link to = "/personal">Back to Main</Link>
            </div>
        </div>
    )
}