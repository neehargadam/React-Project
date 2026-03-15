import axios from "axios";
import { useEffect, useState } from "react";

function KeyDemo()
{

    const[users,setUsers] = useState([{user_id:null}]);
    const[msg,setMsg] = useState(null);
    const[validationClass,setValidationClass] = useState(null); 

    useEffect(()=>{
        axios.get('users.json')
        .then((response)=>{
            setUsers(response.data)
        })
    },[]);

    function verifyUser(e)
    {
        for(var user of users)
        {
            if(user.user_id === e.target.value)
            {
                setMsg("User ID is already taken - please choose another one");
                setValidationClass("text-danger");
            break;
          }
          else
          {
            setMsg("User ID is available");
            setValidationClass("text-success");
          } 
         
    }
}
    return(
        <div className="container">
           <h2>Register User</h2>
           <dl>
            <dt>User ID:</dt>
            <dd><input type="text" onKeyUp={verifyUser}/></dd>
            <dd className={validationClass}>{msg}</dd>
            </dl>
        </div>  
    )
} 

export default KeyDemo;