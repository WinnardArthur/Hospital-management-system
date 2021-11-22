import "./header.scss";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

const Header = () => {
    const logout = () => {
        cookies.remove('username')
        cookies.remove('password')
        cookies.remove('position')

        window.location.replace('/login');
    }

    const signIn = () => {
        window.location.replace('/login')
    }

    const path = window.location.pathname

    return (
        <div className="header">
            <h1>Hospital Management System</h1>
            <div>
                {path === '/login' ? <h5 onClick={signIn}>Sign in</h5> : <h5 onClick={logout}>Logout</h5>}
            </div>
        </div>
    )
}

export default Header
