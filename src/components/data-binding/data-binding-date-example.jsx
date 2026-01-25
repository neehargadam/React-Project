import { useEffect, useState } from "react";
import moment from "moment";
function DataBindingDateExample()
{
const [departure,setDeparture] =  useState(Date());
useEffect(()=>{
var dept= Date();
setDeparture(dept);
},[])
    return (
           <div className="container-fluid">   
           <h2>Data Binding Date Example</h2>
           {/* { departure.toLocaleDateString() } */}
           {moment(departure).format('dddd  MMMM Do YYYY, h:mm:ss a')}
            </div>

    )

}
export default DataBindingDateExample;
