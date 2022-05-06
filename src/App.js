import logo from './logo.svg';
import './App.css';
import { Navbar } from "./component/Navbar";
import {Home} from "./component/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inquisition from './component/Inquisition';
import Candid from './component/Candid';
import Rhetorical from './component/Rhetorical';
import Melodrama from './component/Melodrama';
import Through from './component/Through';
import Beautiful from './component/Beautiful';
import Resource from './component/Resource';
import Piecemeal from './component/Piecemeal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/inquisition" element={<Inquisition />}></Route>
        <Route path="/candid" element={<Candid />}></Route>
        <Route path="/rhetorical" element={<Rhetorical />}></Route>
        <Route path="/melodrama" element={<Melodrama />}></Route>
        <Route path="/Piecemeal" element={<Piecemeal />}></Route>
        <Route path="/through" element={<Through />}></Route>
        <Route path="/beautiful" element={<Beautiful />}></Route>
        <Route path="/resource" element={<Resource />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
