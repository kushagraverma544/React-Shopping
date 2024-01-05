import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import { NetflixRegisterComponent } from "./components/NetflixRegisterComponent";
import NetflixIndexComponent from "./components/NetflixIndexComponent";
import RegisterComponent from "./components/RegisterComponent";
import DataBindingComponent from "./components/DataBindingComponent";
import ShoppingComponent from "./components/ShoppingComponent";
import EventBindingComponent from "./components/EventBindingComponent";
import TwoWayBindingComponent from "./components/TwoWayBindingComponent";
import TwoWayClassDemo1 from "./components/TwoWayClassDemo1";
import TwoWayClassDemo from "./components/TwoWayClassDemo";
import reportWebVitals from "./reportWebVitals";
import LoginComponent from "./components/LoginComponent";
import ShoppingClassDemo from "./components/ShoppingClassDemo";
import FormComponent from "./components/FormComponent";
import FormikDemo from "./components/FormikDemo";
import FormikValidation from "./components/FormikValidation";
import YupValidation from "./components/YupValidation";
import YupValidationComponent from "./components/YupValidationComponent";
import LifeCycleDemo from "./components/LifeCycleDemo";
import ReactHookDemo from "./components/ReactHookDemo";
import ContextDemo from "./components/ContextDemo";
import UserLogin from "./components/UserLogin";
import { CookiesProvider } from "react-cookie";
import ReducerDemo from "./components/ReducerDemo";
import CustomHookDemo from "./components/CustomHookDemo";
import SentenceCase from "./components/SentenceCase";
import JQueryAjaxDemo from "./components/JQueryAjaxDemo";
import AxiosDemo from "./components/AxiosDemo";
import ShoppingIndex from "./shopping/ShoppingIndex";
import SPAComponent from "./components/SPAComponent";
import IShopIndex from "./ishop/IShopIndex";
import MainComponent from "./BankApp/MainComponent";
import SerachDemo from "./components/SearchDemo";
import NetflixHeaderComponent from "./components/NetflixHeaderComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
