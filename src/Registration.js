import './App.css';
import React, { useReducer, useState } from 'react';
const formReducer = (state, event) => {
  if(event.reset) {
   return {
     count: 0,
     name: '',
     'Option': '',
   }
 }
  return {
    ...state,
    [event.name]: event.value
  }
}
function Registration() {
    const [formData, setFormData] = useReducer(formReducer, {
    count: 100
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
       reset: true
     })
    }, 4000);
    }
    const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
    return (
        <div className="Registry" >
            <h1> Register Form </h1>
            {submitting &&
            <div>
                You are submitting the following:
                <ul>
                {Object.entries(formData).map(([name, value]) => (
                    <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                ))}
                </ul>
            </div>
            }
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitting}>
                <label>
                    <p>Name</p>
                    <input name="name" onChange={handleChange} value={formData.name || ''}/>
                </label>
                </fieldset>
                <fieldset disabled={submitting}>
                <label>
                    <p>choix</p>
                    <select name="test" onChange={handleChange} value={formData.test || ''}>
                        <option value="">--Please choose option--</option>
                        <option value="test1">test1</option>
                        <option value="test2">test2</option>
                        <option value="test3">test3</option>
                        <option value="test4">test4</option>
                    </select>
                </label>
                <label>
                <p>Count</p>
                <input type="number" name="count" onChange={handleChange} step="1"/>
                </label>  
                    <br/><br/>
                <label>
                    <div class="radio"><label><input type="radio" name="optradio" checked/>Option 1</label></div>
                    <div class="radio"><label><input type="radio" name="optradio"/>Option 2</label></div>
                    <div class="radio"><label><input type="radio" name="optradio" />Option 3</label></div>
                </label>
                <button type="submit" disabled={submitting}>Submit</button>
                </fieldset>
            </form>
        </div>
    );
}
export default Registration;