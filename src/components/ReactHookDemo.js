import { useState, useEffect } from "react"

export default function ReactHookDemo(){
    const [msg, setMsg] = useState();

    function handleSuccessClick(){
        setMsg(<SuccessComponent/>);
    }

    function handleErrorClick(){
        setMsg(<ErrorComponent/>);
    }
    return(
        <div className="container-fluid">
            <button onClick={handleSuccessClick}>Success</button>
            <button onClick={handleErrorClick}>Invalid</button>
            <hr />
            <div>{msg}</div>
        </div>
    )
}

function SuccessComponent(){
    useEffect(() => {
        alert('Success Component will mount');
        return(() => {
            alert('Success component will unmount');
        })
    },[])
    return (
        <div>
            <h2>Login Success</h2>
        </div>
    )
}
function ErrorComponent(){
    useEffect(() => {
        alert('Error Component will mount');
        return(() => {
            alert('Error component will unmount');
        })
    },[])
    return (
        <div>
            <h2>Invalid Credentials</h2>
        </div>
    )
}