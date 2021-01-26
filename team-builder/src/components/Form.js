import React, { useState } from 'react'





function Form (props) {
   const { formValues, handleSubmit, handleChange } = props;

    // const [formValues, setFormValues] = useState({name:"",email:"",role:""});


    // const handleChange  = (event) =>{
    //   setFormValues({...formValues,[event.target.name]:event.target.value})
  
    // }
return(



    <div>
    <form onSubmit ={handleSubmit}>
      <label >
        Name
        <input 
        type="text" 
        name="Name" 
        value = {formValues.Name}
        onChange ={handleChange}
        />
      </label>
      <label >
        Email
        <input 
        type="email" 
        name="Email" 
        value = {formValues.Email}
        onChange ={handleChange}
        />
      </label>
      <label >
        Role
        <input 
        type="text" 
        name="Role" 
        value = {formValues.Role}
        onChange ={handleChange}
        />
      </label>

      <button>Submit</button>
    </form>
  </div>

);

}

export default Form