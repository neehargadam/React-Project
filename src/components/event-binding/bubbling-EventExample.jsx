function BubblingEventExample(){

    function NavClick(){
        alert("Navbar Clicked - Navigate to Home Page");
    }

    function SearchClick(e){
        e.stopPropagation(); // stops the event from bubbling up to parent elements
        alert("Search Button Clicked - shows search");
    }

    function SubmitClick(e){
        e.preventDefault(); // prevents the default form submission behavior
        alert("Form Submitted - Login");
    }

    return(
        <div className="container-fluid">
            <nav onClick={NavClick} className=" p-2 border border-2 border-dark m-4">
            <h2>Amazon</h2>
            <button onClick={SearchClick} className="btn bi bi-search btn-warning"></button>            
            </nav>
            <section className="m-4">
                <form onSubmit={SubmitClick} className="border border-2 border-dark p-4">
                    <h3>User Name</h3>
                    <input type="text" name="User"/>
                    <button type="submit" >Login</button>
                </form>
            </section>
        </div>
    )
}
export default BubblingEventExample;