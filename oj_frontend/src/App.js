import './App.css';
import ResponsiveAppBar from './Navbar/navbar';
import FilterBox from './Dashboard/filterBox'
import ChooseFileBox from './Dashboard/box';

function App() {
  return (
    <div className="App">
    <ResponsiveAppBar />
      <header> 
      <FilterBox />
      {/* <ChooseFileBox /> */}
      </header>
    </div>
  );
}

export default App;
