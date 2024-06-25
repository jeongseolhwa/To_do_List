import logo from './logo.svg';
import './App.css';
import Login from './page/Login';
import Signup from './page/Signup';
import Home from './page/Home';
import DetailList from './page/component/DetailList';
import PlusList from './page/component/PlusList';
function App() {
  return (
    <div className="App">
     {/* <Login></Login> */}
     {/* <Home></Home> */}
     {/* <Signup></Signup> */}
     {/* <DetailList></DetailList> */}
     <PlusList></PlusList>
    </div>
  );
}

export default App;
