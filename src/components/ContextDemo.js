import userEvent from "@testing-library/user-event";
import React, { useContext, useState } from "react";

var userDetailsContext = React.createContext(null);

export default function ContextDemo() {
  
  const [userDetails, setUserDetails] = useState({
    UserName: "",
    Email: "",
  });

  function handleUser(e){
    setUserDetails({
        UserName: e.target.value,
        Email: userDetails.Email
    })
  }

  function handleEmail(e){
    setUserDetails({
        UserName: userDetails.UserName,
        Email: e.target.value
    })
  }

  function handleSet(){
    setUserDetails({
        UserName: userDetails.UserName,
        Email: userDetails.Email
    })
  }

  return (
    <userDetailsContext.Provider value={userDetails}>
      <div className="container-fluid">
        <h1>Site Index - {userDetails.UserName}</h1>
        <dl>
            <dt>User Name</dt>
            <dd>
                <input onChange={handleUser} type = "text"/>
            </dd>
            <dt>Email</dt>
            <dd>
                <input onChange={handleEmail} type = "email"/>
            </dd>
        </dl>
        <button className="mb-2" onClick={handleSet}>Set Data</button>
        <HeaderComponent />
      </div>
    </userDetailsContext.Provider>
  );
}

function HeaderComponent() {
  let userdetails = useContext(userDetailsContext);
  return (
    <div
      className="bg-info text-white"
      style={{ height: "250px", padding: "10px" }}
    >
      <h2>Home - {userdetails.UserName}</h2>
      <NavBarComponent />
    </div>
  );
}

function NavBarComponent() {
    let userdetails = useContext(userDetailsContext);
  return (
    <div className="btn-toolbar bg-dark text-white justify-content-between">
      <div className="btn-group">
        <button className="btn btn-dark">Amazon</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-dark">{userdetails.Email}</button>
      </div>
    </div>
  );
}
