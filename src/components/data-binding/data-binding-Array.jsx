import { useState } from "react";

function DataBindingArray() {
    const [products] = useState([
        { Name: "Samsung TV", Price: 45000, Category: "Electronics" },
        { Name: "Nike Shoes", Price: 7500, Category: "Fashion" },
        { Name: "Wooden Dining Table", Price: 35000, Category: "Home & Furniture" },
        { Name: "The Alchemist", Price: 300, Category: "Books" },
        { Name: "Organic Apples", Price: 500, Category: "Grocery" },
        { Name: "Face Wash", Price: 250, Category: "Beauty & Personal Care" },
        { Name: "Lego Star Wars", Price: 4500, Category: "Toys" },
        { Name: "Football", Price: 1200, Category: "Sports" }
    ]);
    return (
        <div className="container-fluid">
            <h2 className="text-center text-warning p-3">Product List</h2>
            <table className="table table-bordered table-striped table-hover table-hover-shadow">
                <thead>
                    <tr>
                        <th>Name</th>

                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((prod, index) =>
                            <tr key={index}>
                                <td>{prod.Name}</td>
                                <td>{prod.Price}</td>
                                <td>{prod.Category}</td>
                                <td>
                                    <button className="btn btn-warning bi bi-pen-fill"></button>
                                    <button className="btn btn-danger bi bi-trash mx-2"></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default DataBindingArray;