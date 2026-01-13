import './login.css'
function Login() {
    return (
        <>
        <div className="d-flex justify-content-center align-items-center vh-100">
             <form className="login-form mt-4 rounded p-4 shadow">
                <h2>Login Form</h2>
                <dl>
                    <dt>Username:</dt>
                    <dd><input type="text" id="username" name="username" className='form-control'   /></dd>
                    <dt>Password:</dt>
                    <dd><input type="password" id="password" name="password" className='form-control'   /></dd>
                </dl>
                <button type="submit" className='btn btn-warning'>Login</button>
            </form>

        </div> 
        </>

    )
}
export default Login