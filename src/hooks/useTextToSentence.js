import { useState, useEffect } from "react";

export function useTextToSentence(str){
    const [newStr, setNewStr] = useState('');

    useEffect(() => {
        setNewStr(str.charAt(0).toUpperCase() + str.substring(1).toLowerCase());
    },[str]);

    return {newStr}
}