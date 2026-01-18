import { useState, useEffect } from "react";

function DataBindingMap() {
    const [categories] = useState(["All","Electronics","Fashion","Home & Furniture","Books","Grocery","Beauty & Personal Care","Toys","Sports"]);
    useEffect(() => {
        
    }, []);
    return (
       <div className="container-fluid">
        <header className="mt-4 p-4  d-flex justify-content-between border border-2"> 
            <div className="h3">Amazon</div>
            <nav>
                {
                    categories.map((cat,i )=><span className="mx-4" key={i}><a href="#">{cat}</a></span>)
                }
            </nav>
            <div>
                <span className="bi bi-heart"></span>
                <span className="bi bi-cart mx-2"></span>
            </div>
        </header>
           <ol>
            {
                categories.map(cat=> <li key={cat}>{cat}</li>)
            }
           </ol>

           <select>
            {
                categories.map((cat,index)=><option key={index}>{cat}</option>)
            }
           </select>
        </div>
    );
}
export default DataBindingMap; 