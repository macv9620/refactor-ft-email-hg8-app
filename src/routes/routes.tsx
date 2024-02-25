import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';

function Routes() {
    return (
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {/* Otras rutas aquí */}
        </Switch>
      </Router>
    );
  }

export default Routes;