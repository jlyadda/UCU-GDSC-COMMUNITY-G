import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { useState } from 'react';
import AuthProvider from "./AuthContext";
import Login from './Login';
import Signup from "./Signup"
import Home from './Home'
function App() {
  // const [currentUser, setCurrentUser] = useState(null);
  // const validUsers = [
  //   {
  //     email: 'john@example.com',
  //     password: 'password1',
  //     name: 'John Doe',
  //     phone: '1234567890',
  //     otherDetails: 'Lorem ipsum dolor sit amet'
  //   },
  //   {
  //     email: 'jane@example.com',
  //     password: 'password2',
  //     name: 'Jane Doe',
  //     phone: '0987654321',
  //     otherDetails: 'Consectetur adipiscing elit'
  //   }
  // ];

return (
  <AuthProvider>
    <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Signup} />
    {/* <Route exact path="./Login" component={Login} /> */}
    <Route path="./Home" component={Home} />
    <Route path="./Login" component={Login} />
  </Switch>
</BrowserRouter> </AuthProvider>
);
}

export default App;