import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function IShopDashboard() {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [categories, setCategories] = useState([]);
  const [userid, setUserId] = useState("");

  function LoadCategories(){
    axios.get("http://localhost:5000/getcategories").then(response => {
        setCategories(response.data.data);
    })
  }

  useEffect(() => {
    if (cookies["userid"] == undefined) {
      navigate("/login");
    } else {
      setUserId(cookies["userid"]);
      LoadCategories();
    }
  }, []);

  function handleSignOut() {
    console.log(categories);
    removeCookie("userid");
    navigate("/login");
  }
  return (
    <div>
      <h2>
        User Dashboard {userid} -{" "}
        <button onClick={handleSignOut} className="btn btn-link">
          Signout
        </button>
      </h2>
      <h3>Product Categories</h3>
      <ol>
        {
            categories.map(category=>
                <li key = {category.category}><Link to = {"/products/" + category.category}>{category.category.toUpperCase()}</Link></li>
                )
        }
      </ol>
    </div>
  );
}
