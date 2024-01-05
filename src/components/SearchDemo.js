import { useSearchParams } from "react-router-dom";

export default function SerachDemo(){

    const [searchParam, setSearchParam] = useSearchParams();

    function handleSubmit(event){
        setSearchParam(event.target);
    }

    return(
        <div>
            <h2>Search Params</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input name = "username" type = "text"/>
                    </dd>
                    <dt>Age</dt>
                    <dd>
                        <input name = "Age" type = "number"/>
                    </dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}