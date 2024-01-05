import { useState } from "react";

export default function DeleteMeComponent(){
    const [arr, setArr] = useState([]);

    setArr("All");

    arr.push("All", "Electronics", "Footwear", "Fashion");

    return(
        <div>
            <ol>
                {
                    arr.map((item)=> 
                    <li key={item}>{item}</li> // 1. All key=All
                    //2. Electronics key = Electronics
                    //3. Footwear key = Footwear
                    //4. Fashion key = Fashion
                    )
                }
            </ol>
        </div>
    )
}