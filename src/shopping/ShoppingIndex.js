import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Electronics from './Electronics';
import Footwear from './Footwear';
import Fashion from './Fashion';
import ShoppingComponent from '../components/ShoppingComponent';

export default function ShoppingIndex(){
    return(
        <div className="container-fluid">
            <h2>Shopping Index</h2>
            <Router>
                <ul>
                    <li>
                        <Link to = "/Electronics">Electronics</Link>
                    </li>
                    <li><Link to = "/Footwear">Footwear</Link></li>
                    <li><Link to = "/Fashion">Fashion</Link></li>
                    <li>
                        <Link to = "/shopping">Shop Home</Link>
                    </li>
                </ul>
                <hr />
                <Routes>
                    <Route path = "/Electronics" element={<Electronics/>}></Route>
                    <Route path = "/Footwear" element={<Footwear/>}></Route>
                    <Route path = "/Fashion" element={<Fashion/>}></Route>
                    <Route path = "/shopping" element={<ShoppingComponent />}></Route>
                </Routes>
            </Router>
        </div>
    )
}