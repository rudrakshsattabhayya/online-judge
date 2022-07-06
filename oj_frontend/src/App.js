import './App.css';
import ResponsiveAppBar from './Navbar/navbar';
import FilterBox from './Dashboard/filterBox'
import ChooseFileBox from './Dashboard/box';
import {Table} from './Dashboard/Problems Table/Table'
import {GoogleAuthButton} from './Login Page/googleAuthButton'
function App() {
  return (
    <div className="App">
    <ResponsiveAppBar />
      <header> 

      {/* <FilterBox /> */}
      {/* <ChooseFileBox /> */}
      {/* <Table /> */}
      <GoogleAuthButton />
      </header>
    </div>
  );
}

export default App;
