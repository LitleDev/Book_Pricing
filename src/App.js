import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Dataload from './compoments/Dataload';
import Search from './compoments/Search';
// https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json
 
function App() {
  return (
    <div className="App">
      {/* <Search></Search> */}
      <Dataload/>
    </div>
  );
}

export default App;
