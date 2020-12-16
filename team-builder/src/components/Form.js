import React from 'react'





function Form (props) {
    const { submit } = props;

return(



    <div>
    <form onSubmit =  {submit}>
      <label htmlFor="name">
        Name
        <input type="text" name="Name" />
      </label>
      <label htmlFor="name">
        Role
        <input type="text" name="Role" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="Email" />
      </label>
      <button>Submit</button>
    </form>
  </div>

);

}

export default Form