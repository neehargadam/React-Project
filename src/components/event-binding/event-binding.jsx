import { useState } from "react";

function EventBinding()
{
    const[msg,setMsg]=useState(null);   
    function handleInsertClick(e,...product)
    {
        //alert("Insert Button Clicked");
        setMsg("Inserted Successfully");
        let [id,name,available,locations,details]=product;
        console.log(`Id : ${id} \n Name : ${name} \n Available : ${available} \n Locations : ${locations.join(', ')} \n Details : ${JSON.stringify(details)}`); 
        console.log(`Button value : ${e.target.value} \n Button id : ${e.target.id} \n X Position : ${e.clientX} \n Y Position : ${e.clientY} `);
    }
    return (
        <div className="container-fluid">
            {/* <button  value="Insert" id="btnInsert" onClick={handleInsertClick}>Insert</button> */}
            <button  value="Insert" id="btnInsert" onClick={(event)=>handleInsertClick(event,1,'TV',true,['Delhi','Hyderabad'],{Rating:5})}>Insert</button>
            <p>{msg}</p>
        </div>
    )
}
export default EventBinding