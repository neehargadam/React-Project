import { useEffect, useState } from "react";

function DataBindingState() {
   const [getName, setName] = useState("Neehar");

   const[price,setPrice]=useState(0);
   const[itemName,setItemName]=useState("");
   useEffect(()=>{
    setName("Neehar Gadam");
    setItemName("Laptop");
    setPrice(45000);
   },[])
    return (
        <div className="container-fluid">
            <h2 className={`text-center text-warning p-3`}>Data Binding</h2>
            <p> Welcome {getName} </p>
            <p>Item : {itemName}</p>
            <p>Price : {price}</p>
         
        </div>
    )
}
export default DataBindingState;