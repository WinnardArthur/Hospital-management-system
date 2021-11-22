import "./doctor.scss";
import Cookies from "universal-cookie/es6";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Header from '../../components/Header/Header';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

const cookies = new Cookies();

const username = cookies.get('username')

const Doctor = () => {
    return (
        <div className="doctor">
            <Header />
            <h1>Welcome Doctor {username}</h1>

            <div className="doctorBody">
                <div style={{maxWidth: '300px'}}>
                    <FeaturedInfo 
                        card1='Patients' 
                        num1={1250}
                    />
                </div>
                <div className="chartArea">
                    <Chart data={userData} title="Patient analytics" dataKey="Patients" grid/>
                </div>

                <div className="patientList">
                    <WidgetSm />
                    <WidgetLg />
                </div>
            </div>
        </div>
    )
}

export default Doctor
