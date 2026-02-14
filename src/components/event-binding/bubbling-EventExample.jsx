function BubblingEventExample(){

    function NavClick(){
        alert("Navbar Clicked - Navigate to Home Page");
    }

    function SearchClick(e){
        e.stopPropagation(); // stops the event from bubbling up to parent elements
        alert("Search Button Clicked - shows search");
    }

    return(
        <div className="container-fluid">
            <nav onClick={NavClick} className=" p-2 border border-2 border-dark m-4">
            <h2>Amazon</h2>
            <button onClick={SearchClick} className="btn bi bi-search btn-warning"></button>
            
            </nav>
        </div>
    )
}
export default BubblingEventExample;