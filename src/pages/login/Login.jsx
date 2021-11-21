import { useState } from "react";
import "./login.scss";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

const initialState = ({
    username: '',
    password: '',
    position: ''
})

const Login = () => {

    const [form, setForm] = useState(initialState)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        cookies.set('username', form.username);
        cookies.set('password', form.password);
        cookies.set('position', form.position);

        if (form.position === 'admin') {
            window.location.replace('/admin')
        } else if (form.position === 'staff') {
            window.location.replace('/staff')
        }
        else {
            window.location.replace('/doctor')
        }
    }
    return (
        <div className="login" onSubmit={handleSubmit}>
            <form>
                <h1>Sign in</h1>
                <div className="form-item">
                    <label htmlFor="Username">Username</label>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className="loginInput" 
                        name="username"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="loginInput" 
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="Username">Position</label>
                    <select 
                        name="position" 
                        onChange={handleChange}
                        required
                    >
                        <option value=""></option>
                        <option value="admin">Admin</option>
                        <option value="staff">Staff</option>
                        <option value="doctor">Doctor</option>
                    </select>
                </div>
                <button>login</button>
            </form>
        </div>
    )
}

export default Login
