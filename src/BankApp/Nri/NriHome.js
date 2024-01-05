import { Link, Outlet } from "react-router-dom";


export default function NriHome(){
    return(
        <div>
            <h2>NRI Home</h2>
            <ul>
                <li> <Link to="nlogin">Login</Link> </li>
                <li> <Link to="nregister">Register</Link> </li>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}