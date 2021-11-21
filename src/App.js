import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Admin from './pages/admin/Admin';
import Doctor from './pages/doctors/Doctor';
import Login from './pages/login/Login';
import Staff from './pages/staff/Staff';
import Cookies from 'universal-cookie/es6';


const cookies = new Cookies();

const username = cookies.get('username') 
const password = cookies.get('password') 
const position = cookies.get('position') 

console.log(username, password, position)

function App() {

  if(username === undefined || password === undefined || position === undefined) return <Login />

  return (    
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            {position === 'admin' ? <Admin /> : <Redirect to={`/${position}`} />}
          </Route>
          <Route path="/staff">
            {position === 'staff' ? <Staff /> : <Redirect to={`/${position}`} />}  
          </ Route >
          <Route path="/doctor">
            {position === 'doctor' ? < Doctor /> : <Redirect to={`/${position}`} /> }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
