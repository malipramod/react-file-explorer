import React from 'react';
import DirectoryTree from './Components/DirectoryTree';
import { directoryTreeData } from './data';
import './App.css';

function App() {
  return (
      <DirectoryTree directory={directoryTreeData}/>
  );
}

export default App;
