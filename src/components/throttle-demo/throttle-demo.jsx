import { useEffect, useState } from "react";

function ThrottleDemo()
{

    const [clock, setClock]=useState();
    function GetTime()
    {
        var now = new Date();
        setClock(now.toLocaleTimeString());
    }

    useEffect(()=>{
        setInterval(GetTime,1000);
    },[])

    
    return(
        <div>
            Hello World
            <h1>{clock}</h1>
        </div>
    )
}
export default ThrottleDemo;