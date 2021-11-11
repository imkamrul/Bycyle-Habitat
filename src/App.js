import './App.css';
import AuthProvider from './Context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from './Pages/LogIn/LogIn';
import Dashboard from './Pages/DashBoard/DashBoard/Dashboard';
import Cycles from './Pages/Cycles/Cycles';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ProductBuy from './Pages/ProductBuy/ProductBuy';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/productBuy/:id">
              <ProductBuy />
            </Route>
            <Route path="/cycles">
              <Cycles />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
