import React from "react";

import "./App.css";

import Header from "./components/Header"
import TaskList from './components/TaskList';

function App() {   
    return (
      <>
        <Header title="To do List" />          
        <TaskList />
      </>
    ); 
}

export default App;
