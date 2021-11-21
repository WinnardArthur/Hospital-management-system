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
    return (
        <div className="header">
            <h1>Hospital Management System</h1>
            <div>
                <h5 onClick={logout}>Logout</h5>
            </div>
        </div>
    )
}

export default Header
