import Header from "../../components/Header/Header";
import "./staff.scss";
import Cookies from 'universal-cookie';
import { useState } from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";

const cookies = new Cookies();

const username = cookies.get('username');

const initialState = ({
    firstName: '',
    lastName: '',
    description: '',
    gender: ''
})

const Staff = () => {
    const [form, setForm] = useState(initialState)
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm((prevForm) => !prevForm)
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})

        console.log(form)
    }
    return (
        <div className="staff">
            <Header />
            <h1>Welcome {username}</h1>

            <div className="staffBody">
                <div className="createBtn">
                    <button onClick={toggleForm}>{showForm ? 'Cancel' : 'Register Patient'}</button>    
                </div>   

                <div className="form">
                    {showForm && 
                        <div className="patientForm">
                            <form>
                                <h1>Register Patient</h1>
                                <div className="form-item">
                                    <label htmlFor="Username">Firstname</label>
                                    <input 
                                        type="text" 
                                        placeholder="Name of Branch" 
                                        className="loginInput" 
                                        name="firstName"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="Username">Lastname</label>
                                    <input 
                                        type="text" 
                                        placeholder="Name of Branch" 
                                        className="loginInput" 
                                        name="lastName"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="Username">Gender</label>
                                    <label htmlFor="Male" className="radioLabel">Male</label>
                                    <input 
                                        type="radio" 
                                        className="radioBtn" 
                                        name="gender"
                                        id="male"
                                        value="male"
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="Female" className="radioLabel">Female</label>
                                    <input 
                                        type="radio" 
                                        placeholder="Name of Branch" 
                                        className="radioBtn" 
                                        name="gender"
                                        id="female"
                                        value="female"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        type="text" 
                                        placeholder="Info and issues with patient..." 
                                        className="loginInput" 
                                        name="description"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button>Create</button>
                            </form>
                        </div>
                    }

                    <div className="chartArea">
                            <FeaturedInfo 
                                card1='Doctors'
                                card2='Patients' 
                                num1={58}    
                                num2={2320}
                            />
                            <Chart data={userData} title="Statistics" dataKey={'Patients'} grid/>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Staff
