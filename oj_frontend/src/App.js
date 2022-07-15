import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ResponsiveAppBar from './Navbar/navbar';
import Loginpage from './Login Page/loginpage';
import Dashboard from './Dashboard/dashboard';
import {Problem} from './Problems page/page';
import {SubmissionTable} from './Submissions Page/submissionTable'

function App() {
  return (
    <>
      <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route element={<Loginpage />} path="/" />
        <Route element={<Dashboard />} path="/home-page" />
        <Route element={<SubmissionTable />} path="/submissions" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
