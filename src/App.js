import React, {useState,useEffect} from 'react';
import SearchBar from './components/SearchBar';
import ResultArea from './components/ResultArea';
import './App.css';

const tempState = [
  {
    name:"California",
    link:""
  },
  {
    name:"Georgia",
    link:""
  },
  {
    name:"New Hampshire",
    link:""
  }
]

const isMatchedByIndex = (inputStr,targetStr,upToIndex) => {
  return inputStr === targetStr.slice(0,upToIndex-1) ? true : false
}

const searchStateArr = (str, arr) => {
  console.log(arr);
  const result = arr.filter( state => isMatchedByIndex(str,state.name,str.length));
  return result;
}

function App() {
  const [searchTerm,setSearchTerm] = useState("");
  const [stateDisplay,setStateDisplay] = useState(tempState)

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
    setStateDisplay(searchStateArr(searchTerm,stateDisplay));
  }

  return (
    <div className = "App">
      <SearchBar data={searchTerm} handleChange={handleSearchChange}/>
      <ResultArea data={stateDisplay}/>
    </div>
  );
}

export default App;
