import { useState } from "react";

function DataBindingObject()
{
const[product]=useState({Name:"Samsung TV",Price:45000,ShippedTo:['Delhi','Mumbai','Bangalore','Hyderabad'], Rating:{Rate:4.5,Count:1345}});

    return (
        <div>
            <h2>Product Details</h2>
            <dl>
                <dt>Name:</dt>
                <dd>{product.Name}</dd>
                <dt>Price:</dt>
                <dd>{product.Price}</dd>
                <dt>Shipped To:</dt>
                <dd>
                    <ul>
                    {product.ShippedTo.map( city=><li key={city}>{city}</li>)}
                    </ul>
                </dd>
                <dt>Rating:</dt>
                <dd>{product.Rating.Rate} <span className="bi bi-star-fill text-success"></span> ({product.Rating.Count})</dd>
            </dl>   
        </div>
    )
}

export default DataBindingObject;