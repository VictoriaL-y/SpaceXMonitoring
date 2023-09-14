import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Launches from "./components/Launches";
import './App.css';

const App = () => {
  const [spaceXdata, setSpaceXdata] = useState([]);
  const updateSpaceXdata = (data) => {
    setSpaceXdata(data);
};

return (
  <div className="App">
  <h1 className="text-center">SpaceX Monitoring</h1>
    {/* <NavBar /> */}

    <div className="row container-fluid p-0 m-0">
      <div className="col-sm-1 col-lg-2"></div>
      <div id="launches-list" className="col-xs-12 col-sm-10 col-lg-8 container-fluid p-0">

        <Launches spaceXdata={spaceXdata} setSpaceXdata={updateSpaceXdata}/>


      </div>
      <div className="col-sm-1 col-lg-2"></div>
    </div>

  </div>
);
}

export default App;
