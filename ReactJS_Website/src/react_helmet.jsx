import React from "react";  
import "./App.css";  
import { Helmet } from "react-helmet";  
import Child from "./Child";  
function App() {  
  return (  
    <div className="App">  
      <Helmet>  
        <title>React Helmet Tutorial</title>  
        <meta name="description" content="Tutorial for React Helmet" />  
        <meta name="theme-color" content="#E6E6FA" />  
      </Helmet>  
  
      <header className="App-header">  
        Title will not be React Helmet Tutorial <Child />  
      </header>  
    </div>  
  );  
}  
export default App;  
