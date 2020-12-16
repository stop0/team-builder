import React, { useState } from 'react'
import './App.css';

import Form from './components/Form'





function App() {

  const [formValues, setFormValues] = useState({name:"",role:"",email:""});



  return (
    <div className="App">
      <Form formValues = {formValues} />
    </div>
  );
}

export default App;
