import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Launches from "./components/Launches";
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';
import FilterButtons from './components/FilterButtons';
import './App.css';

const App = () => {
  const [spaceXdata, setSpaceXdata] = useState([]);
  const updateSpaceXdata = (data) => {
    setSpaceXdata(data);
  }

  const [results, setResults] = useState([]);

  const [upcomingLaunches, setUpcomingLaunches] = useState([]);

  useEffect(() => {
  })


  // spaceXdata.filter(launch => launch.upcoming === true)

  return (
    <div className="App">
      <h1 className="text-center">SpaceX Monitoring</h1>

      <SearchBar spaceXdata={spaceXdata} setResults={setResults}/>
      {results.length > 0 && <SearchResultsList results={results}/>}

    <FilterButtons />


      


      <div className="row container-fluid p-0 m-0">

        <div className="col-sm-1 col-lg-2"></div>
        <div id="launches-list" className="col-xs-12 col-sm-10 col-lg-8 container-fluid p-0">

          <Launches spaceXdata={spaceXdata} setSpaceXdata={updateSpaceXdata} />

        </div>
        <div className="col-sm-1 col-lg-2"></div>
      </div>

    </div>
  );
}

export default App;
