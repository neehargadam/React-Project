export function NetflixHeader()
{
    return (        
         <header className="d-flex justify-content-between   p-3">
            <div className="h1 text-danger fw-bold">
                NETFLIX 
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <div>
                    <div className="input-group">
                    <span className='bi bi-language input-group-text'></span>
                    <select className="form-select">
                        <option>Language</option>
                    </select>
                </div>
                </div>
                <button className="btn btn-danger mx-4">Sign In</button>
            </div>

         </header>       
    )
}