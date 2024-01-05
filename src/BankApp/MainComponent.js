import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import BankAppHome from "./BankAppHome";
import PersonalLogin from "./Personal/PersonalLogin";
import PersonalRegister from "./Personal/PersonalRegister";
import NriRegister from "./Nri/NriRegister";
import NriLogin from "./Nri/NriLogin";
import PersonalHome from "./Personal/PersonalHome";
import NriHome from "./Nri/NriHome";

export default function MainComponent() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<BankAppHome />}>
            <Route path="personal" element={<PersonalHome />}>
              <Route path="plogin" element={<PersonalLogin />} />
              <Route path="pregister" element={<PersonalRegister />} />
            </Route>
            <Route path="nri" element={<NriHome />}>
              <Route path="nlogin" element={<NriLogin />} />
              <Route path="nregister" element={<NriRegister />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
