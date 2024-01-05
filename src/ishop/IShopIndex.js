import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IShopHome  from "./IShopHome";
import IShopLogin from "./IShopLogin";
import IShopRegister from "./IShopRegister";
import IShopDashboard from "./IShopDashboard";
import IShopProducts from "./IShopProducts";
import IShopProductDetails from "./IShopProductDetails";

export default function IShopIndex(){
    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 mt-2">
                <h1>Shop-Online Store</h1>
            </header>
            <section className="mt-2 row">
                <Router>
                <nav className="col-3">
                    <div>
                    <Link className="btn btn-danger w-100 m-2 p-2" to = "home">Home</Link>
                    </div>
                    <div>
                    <Link className="btn btn-danger w-100 m-2 p-2" to ="register">Register</Link>
                    </div>
                    <div>
                    <Link className="btn btn-danger w-100 m-2 p-2" to = "login">Login</Link>
                    </div>
                    <div>
                    <Link className="btn btn-danger w-100 m-2 p-2" to ="dashboard">Dashboard</Link>
                    </div>
                </nav>
                <main className="col-9">
                    <Routes>
                        <Route path = "/" element = {<IShopHome/>}/>
                        <Route path = "home" element = {<IShopHome/>}/>
                        <Route path = "login" element = {<IShopLogin/>}/>
                        <Route path = "dashboard" element = {<IShopDashboard/>}/>
                        <Route path = "register" element = {<IShopRegister/>}/>
                        <Route path = "errorpage" element = {
                            <div>
                                <h2 className="text-danger">Invalid Credentials</h2>
                                <Link to = "/login">Try Again</Link>
                            </div>
                        }/>
                        <Route path = "products/:category" element={<IShopProducts/>} />
                        <Route path = "details/:id" element={<IShopProductDetails/>} />
                    </Routes>
                </main>
                </Router>
            </section>
        </div>
    )
}