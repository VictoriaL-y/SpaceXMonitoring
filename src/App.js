import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Launches from "./components/Launches";
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';
import FilterButtons from './components/FilterButtons';
import CheckClickOutside from "./components/CheckClickOutside";
import ButtonToTop from './components/ButtonToTop';

const App = () => {
  const [spaceXdata, setSpaceXdata] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchBarResults, setSearchBarResults] = useState([]);
  const [filterResult, setFilterResult] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="App">
      <h1 className="text-center spaceX-title">SpaceX Monitoring</h1>

      <CheckClickOutside onClickOutside={() => setSearchBarResults([])}>
        
        <SearchBar spaceXdata={spaceXdata}
          setSearchBarResults={setSearchBarResults}
          setResults={setFilterResult}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setIsFocused={setIsFocused}
          isFocused={isFocused}
          setIsActive={setIsActive}
           />
        
          <SearchResultsList
            results={searchBarResults}
            setResults={setFilterResult}
            setSearchBarResults={setSearchBarResults}
            setSearchInput={setSearchInput}
            setIsActive={setIsActive} />

      </CheckClickOutside>

      <FilterButtons
        spaceXdata={spaceXdata}
        setResults={setFilterResult}
        isFocused={isFocused}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        isActive={isActive}
        setIsActive={setIsActive} />

      <div className="row container-fluid p-0 m-0 launch-results">

        <div className="col-sm-1 col-lg-3"></div>
        <div id="launches-list" className="col-xs-12 col-sm-10 col-lg-6 container-fluid p-0">

          <Launches
            spaceXdata={spaceXdata}
            setSpaceXdata={setSpaceXdata}
            filterResult={filterResult} />

        </div>
        <div className="col-sm-1 col-lg-3"></div>
      </div>
      <ButtonToTop />
    </div>
  );
}

export default App;
