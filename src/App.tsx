import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </div>
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        {/* Otras rutas aquí */}
      </Switch>
    </Router>
  );
}

export default App;
