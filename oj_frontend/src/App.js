import './App.css';
import ResponsiveAppBar from './Navbar/navbar';
import Loginpage from './Login Page/loginpage';
import Dashboard from './Dashboard/dashboard';
import {Problem} from './Problems page/page';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Problem />
    </>
  );
}

export default App;
