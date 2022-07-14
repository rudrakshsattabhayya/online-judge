import './App.css';
import ResponsiveAppBar from './Navbar/navbar';
import Loginpage from './Login Page/loginpage';
import Dashboard from './Dashboard/dashboard';
import {Problem} from './Problems page/page';
import {SubmissionTable} from './Submissions Page/submissionTable'

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <SubmissionTable />
    </>
  );
}

export default App;
