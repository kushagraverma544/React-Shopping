import { useState } from "react";
import { useTextToSentence } from "../hooks/useTextToSentence";

export default function SentenceCase(){
    const [str, setStr] = useState('');
    const sentence = useTextToSentence(str);

    function handleString(e){
        setStr(e.target.value);
    }

    return (
        <div className="container-fluid">
            <dl>
                <dt>Enter Uneven String</dt>
                <dd>
                    <input onChange={handleString} type = "text"/>
                </dd>
                <dt>String After Converting into Sentence Case</dt>
                <dd>{sentence.newStr}</dd>
            </dl>
        </div>
    )
}