import React from "react";

class SuccessComponent extends React.Component{
    componentDidMount(){
        alert('Success Component Will render');
    }
    componentWillUnmount(){
        alert('Success Component will unmount');
    }
    render(){
        return(
            <div>
                <h2>Login Success...</h2>
            </div>
        )
    }
}
class ErrorComponent extends React.Component{
    componentDidMount(){
        alert('Error Component Will render');
    }
    componentWillUnmount(){
        alert('Error Component will unmount');
    }
    render(){
        return(
            <div>
                <h2>Invalid Login</h2>
            </div>
        )
    }
}

export default class LifeCycleDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            UserDetails: {
                UserName: 'john_nit',
                Password: 'john@11'
            },
            formDetails:{
                UserName: '',
                Password: ''
            },
            result: ''
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleUserName(e){
        this.setState({
            formDetails:{
                UserName: e.target.value,
                Password: this.state.formDetails.Password
            }
        })
    }

    handlePassword(e){
        this.setState({
            formDetails:{
                UserName: this.state.formDetails.UserName,
                Password: e.target.value
            }
        })
    }

    handleLoginClick(){
        if(this.state.formDetails.UserName === this.state.UserDetails.UserName && this.state.formDetails.Password === this.state.UserDetails.Password){
            this.setState({
                result: <SuccessComponent/>
            });
        }else{
            this.setState({
                result: <ErrorComponent/>
            });
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input onChange={this.handleUserName} type = "text"/>
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input onChange={this.handlePassword} type = "password"/>
                    </dd>
                </dl>
                <button onClick={this.handleLoginClick}>Login</button>
                <div>{this.state.result}</div>
            </div>
        )
    }
}