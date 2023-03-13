import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  let [apiResponse, setApiResponse] = useState(null)
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://19o9wqa834.execute-api.us-west-1.amazonaws.com/',
        {method: 'GET'}
      )
      const recipe = await response.text()
      setApiResponse(recipe)
    }
    fetchData()
  })
    
  return (
    <div className="App">
      <header className="App-header">
        <p>
          The recipe: {apiResponse}
        </p>
      </header>
    </div>
  );
}

export default App;
