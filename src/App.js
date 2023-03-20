import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  let [apiResponse, setApiResponse] = useState(null)
  let [submitted, setSubmitted] = useState(false)
  
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
  
  function handleSubmit(event) {
    setSubmitted(true)
    event.preventDefault();  
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="App">
      <header className="App-header">
        <div>
          <label> rice</label>
          <input type="checkbox" id="ingredient2" name="ingredient2" value="milk"/>
          <label> milk</label>
          <input type="checkbox" id="ingredient3" name="ingredient3" value="orange"/>
          <label> orange</label>
          <input type="checkbox" id="ingredient4" name="ingredient4" value="sugar"/>
          <label> sugar</label>
          <input type="checkbox" id="ingredient5" name="ingredient5" value="cinnamon"/>
          <label>cinnamon</label>
          <input type="submit" value="Submit"/>
        </div>
        <p>
          The recipe: {submitted ? apiResponse: ""}
        </p>
      </header>
    </div>
    </form>
  );
}

export default App;
