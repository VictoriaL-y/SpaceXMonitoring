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
  const [filterButtonResult, setFilterButtonResult] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [enterClicked, setEnterClicked] = useState(false);

  return (
    <div className="App">
      <h1 className="text-center spaceX-title">SpaceX Monitoring</h1>

      <CheckClickOutside onClickOutside={() => setSearchBarResults([])}>
        <SearchBar spaceXdata={spaceXdata}
          setSearchBarResults={setSearchBarResults}
          setResults={setFilterButtonResult}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setIsFocused={setIsFocused}
          isFocused={isFocused}
          setEnterClicked={setEnterClicked} />
        {searchBarResults.length > 0 &&
          <SearchResultsList
            results={searchBarResults}
            setResults={setFilterButtonResult}
            setSearchBarResults={setSearchBarResults}
            setSearchInput={setSearchInput}
            setEnterClicked={setEnterClicked} />}
      </CheckClickOutside>

      <FilterButtons
        spaceXdata={spaceXdata}
        setResults={setFilterButtonResult}
        isFocused={isFocused}
        enterClicked={enterClicked}
        setEnterClicked={setEnterClicked}
        setSearchInput={setSearchInput} />

      <div className="row container-fluid p-0 m-0 launch-results">

        <div className="col-sm-1 col-lg-3"></div>
        <div id="launches-list" className="col-xs-12 col-sm-10 col-lg-6 container-fluid p-0">

          <Launches
            spaceXdata={spaceXdata}
            setSpaceXdata={setSpaceXdata}
            filterButtonResult={filterButtonResult}
            searchInput={searchInput}
            enterClicked={enterClicked} />

        </div>
        <div className="col-sm-1 col-lg-3"></div>
      </div>
      <ButtonToTop />
    </div>
  );
}

export default App;
