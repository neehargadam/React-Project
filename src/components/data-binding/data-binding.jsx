function DataBinding(){
    var uname="Neehar";
    var bgstyle="bg-danger";
    return(
        <div className="container-fluid">
            <h2 className={`text-center text-warning p-3 ${bgstyle}`}>Data Binding</h2>
            <p> Welcome {uname} </p>
            <input type="text" value={uname} />
        </div>
    )
}
export default DataBinding;