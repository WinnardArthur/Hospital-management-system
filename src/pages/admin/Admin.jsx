import "./admin.scss";
import Cookies from "universal-cookie/es6";
import Header from "../../components/Header/Header";
import { useState } from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import DoctorList from "../../components/doctorList/DoctorList";
import StaffList from "../../components/staffList/StaffList";

const cookies = new Cookies();

const username = cookies.get('username');

const Admin = () => {

    const [showBranchForm, setShowBranchForm] = useState(false)
    const [showDoctorForm, setShowDoctorForm] = useState(false)

    const toggleBranchForm = () => {
        setShowBranchForm((prevForm) => !prevForm)
    }

    const toggleDoctorForm = () => {
        setShowDoctorForm((prevForm) => !prevForm)
    }

    return (
        <div className="admin">
            <Header />
            <h1>Welcome Admin {username}</h1>

            <div className="adminBody">
                <div className="btns">
                    <button onClick={toggleBranchForm} disabled={showDoctorForm}>{!showBranchForm ? 'Create New Branch' : 'Cancel'}</button>
                    <button onClick={toggleDoctorForm} disabled={showBranchForm}>{showDoctorForm ? 'Cancel' : 'Create New Doctor'}</button>
                </div>

                <div className="forms">
                    {showBranchForm && 
                        <div className="branchForm">
                            <form>
                                <h1>Create Branch</h1>
                                <div className="form-item">
                                    <label htmlFor="Username">Branch Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Name of Branch" 
                                        className="loginInput" 
                                        name="branchName"
                                        // onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="password">Description</label>
                                    <input 
                                        type="text" 
                                        placeholder="Info about branch..." 
                                        className="loginInput" 
                                        name="staffNumber"
                                        // onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button>Create</button>
                            </form>
                        </div>
                    }

                    {showDoctorForm && 
                    <div className="branchForm staffForm">
                        <form>
                            <h1>Create New Doctor</h1>
                            <div className="form-item">
                                <label htmlFor="Username">Username</label>
                                <input 
                                    type="text" 
                                    placeholder="Doctor's username" 
                                    className="loginInput" 
                                    name="doctorUsername"
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    placeholder="Doctor's password" 
                                    className="loginInput" 
                                    name="password"
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                            <button>Create</button>
                        </form>
                    </div>
                    }

                    <div className="chartArea">
                        <FeaturedInfo 
                            card1='Admin' 
                            card2='Staff' 
                            card3='Doctors'
                            num1={12}    
                            num2={55}
                            num3={150}
                        />
                        <Chart data={userData} title="Statistics" dataKey={'Patients'} grid/>
                    </div>

                    <div className="doctorsArea">
                        <DoctorList />
                    </div>
                    
                    <div className="staffArea">
                        <StaffList />
                    </div>
                </div>
                
            </div>

            
        </div>
    )
}

export default Admin
