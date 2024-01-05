import { useState } from "react";

export default function FormComponent() {
  const [users] = useState([
    { UserId: "John" },
    { UserId: "John12" },
    { UserId: "David" },
    { UserId: "John_NIT" },
  ]);

  const [userMsg, setUserMsg] = useState("");
  const [isUserValid, setUserValid] = useState(false);
  const [pwdMsg, setPwdMsg] = useState("");
  const [isPwdStrong, setPwdStrong] = useState(false);
  const [isPwdPoor, setPwdPoor] = useState(false);
  const [capsStatus, setCapsStatus] = useState(false);
  const [cityMsg, setCityMsg] = useState('');
  const [userDetails, setUserDetails] = useState({
    UserId: "",
    Password: "",
    City: ""
  });

  function VerifyUserId(e) {
    for (let user of users) {
      if (user.UserId === e.target.value) {
        setUserMsg("User Id Taken - Try Another");
        setUserValid(false);
        break;
      } else {
        setUserMsg("User Id Available");
        setUserValid(true);
      }
    }
  }

  function HideUserMsg(e) {
    if (e.target.value === "") {
      setUserValid(false);
      setUserMsg("User ID Required");
    } else {
      setUserMsg("");
    }
  }

  function VerifyPassword(e) {
    if (e.target.value.match(/(?=.*[A-Z])\w{4,10}/)) {
      setPwdMsg("Strong Password");
      setPwdStrong(true);
    } else {
      if (e.target.value.length < 4) {
        setPwdMsg("Poor Password");
        setPwdStrong(false);
        setPwdPoor(true);
      } else {
        setPwdMsg("Weak Password");
        setPwdStrong(false);
        setPwdPoor(false);
      }
    }
  }

  function HideUserPwd(e) {
    if(e.target.value === ""){
      setPwdStrong(false);
      setPwdPoor(true);
      setPwdMsg("Password is Required");
    }else{
      setPwdMsg("");
    }
  }

  function VerifyCaps(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90 || e.which >= 65 && e.which <= 90) {
      setCapsStatus(true);
    } else {
      setCapsStatus(false);
    }
  }

  function VerifyCity(e){
    setUserDetails({
      UserId: userDetails.UserId,
      Password: userDetails.Password,
      City: e.target.value
    })
    if(e.target.value === 'notcity'){
      setCityMsg('Please Select a City');
    }else{
      setCityMsg("");
    }
  }

  function CollectUserName(e){
    setUserDetails({
      UserId: e.target.value,
      Password: userDetails.Password,
      City: userDetails.City
    })
  }

  function CollectPassword(e){
    setUserDetails({
      Password: e.target.value,
      UserId: userDetails.UserId,
      City: userDetails.City
    })
  }

  function showUserDetails(){
    alert(JSON.stringify(userDetails));
  }

  return (
    <div className="container-fluid bg-secondary text-white">
      <div className="d-flex flex-column justify-content-center align-items-center mt-2" style = {{height: "90vh"}}>
      <h2>Register User</h2>
      <dl>
        <dt>User Id</dt>
        <dd>
          <input className="form-control" type="text" onChange = {CollectUserName} onBlur={HideUserMsg} onKeyUp={VerifyUserId} />
        </dd>
        <dd className={isUserValid === true ? "text-success" : "text-danger"}>
          {userMsg}
        </dd>
        <dt>Password</dt>
        <dd>
          <input
            type="password"
            className="form-control"
            onChange = {CollectPassword}
            onKeyPress={VerifyCaps}
            onBlur={HideUserPwd}
            onKeyUp={VerifyPassword}
          />
        </dd>
        <dd
          className={
            isPwdStrong === true
              ? "text-success"
              : isPwdPoor === true
              ? "text-danger"
              : "text-warning"
          }
        >
          {pwdMsg}
        </dd>
        <dd className={(capsStatus === true)?'d-block':'d-none'}>
          <span className="text-warning">
            <span
              className="bi bi-exclamation-triangle"
            ></span>{" "}
            Caps ON
          </span>
        </dd>
        <dt>City</dt>
        <dd>
          <select onChange={VerifyCity} className="form-select">
            <option value = "notcity">Select Your City</option>
            <option value = "Delhi">Delhi</option>
            <option value = "Jaipur">Jaipur</option>
          </select>
        </dd>
        <dd className="text-danger">{cityMsg}</dd>
      </dl>
      <button className="btn btn-light" onClick={showUserDetails}>Register</button>
      </div>
    </div>
  );
}
