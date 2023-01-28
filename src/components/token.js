import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ component: Component, role, ...rest }) => {
  const userRole = localStorage.getItem('userRole');
  return (
    <Router
      {...rest}
      render={(props) =>
        userRole === role ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  const handleLogin = async (username, password) => {
    try {
      const { data } = await axios.post('/login', {
        username,
        password,
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);
      setIsLoggedIn(true);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
    history.push('/login');
  };
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} role="applicant" />
        <PrivateRoute exact path="/applicant2" component={ApplicantPage2} role="applicant" />
        <PrivateRoute exact path="/manager" component={ManagerPage} role="manager" />
        <PrivateRoute exact path="/manager2" component={ManagerPage2} role="manager" />
        <PrivateRoute exact path="/hr" component={TechPage} role="tech" />
        <PrivateRoute exact path="/hr2" component={TechPage2} role="tech" />
        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <LoginPage onLogin={handleLogin} />}
        </Route>
        <Route exact path="/logout" onClick={handleLogout} />
      </Switch>
    </Router>
  );
}
export default App;