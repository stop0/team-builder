import React, { useState } from 'react'
import './App.css';

import Form from './components/Form'





function App() {

  const [formValues, setFormValues] = useState({Name:"",Email:"",Role:""});

  const handleChange  = (event) =>{
    setFormValues({...formValues,[event.target.name]:event.target.value})

  }
  let topicL = document.querySelector(".App")

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formValues)
    const card1 = document.createElement("div")
    const card2 = document.createElement("div")
    const card3 = document.createElement("div")
    card1.textContent = formValues.Name
    card2.textContent = formValues.Email
    card3.textContent = formValues.Role
    topicL.append(card1)
    topicL.append(card2)
    topicL.append(card3)

    return card1,card2,card3
  }


  return (
    <div className="App">
      <Form formValues = {formValues}  handleChange ={handleChange} handleSubmit = {handleSubmit}/>
    </div>
  );
}

export default App;
