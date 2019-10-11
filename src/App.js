import React, {useState,useEffect} from 'react';
import SearchBar from './components/SearchBar';
import ResultArea from './components/ResultArea';
import stateData from './data/state';
import './App.css';



const isMatchedByIndex = (inputStr,targetStr,upToIndex) => {
  return inputStr.toLowerCase() === targetStr.toLowerCase().slice(0,upToIndex) ? true : false
}

const searchStateArr = (str, arr) => {
  const result = arr.filter( state => isMatchedByIndex(str,state.name,str.length));
  console.log(result);
  return result;
}

function App() {
  const [searchTerm,setSearchTerm] = useState("");
  const [stateDisplay,setStateDisplay] = useState(stateData.states)

  const handleSearchChange = e => {
    const data = e.target.value;
    if (data) {
      setSearchTerm(data);
      setStateDisplay(searchStateArr(data, stateDisplay));
    } else {
      setSearchTerm("");
      setStateDisplay(stateData.states);
    }
  }

  return (
    <div className = "App">
      <SearchBar data={searchTerm} handleChange={handleSearchChange}/>
      <ResultArea data={stateDisplay}/>
    </div>
  );
}

export default App;
