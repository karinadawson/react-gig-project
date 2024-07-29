import React from "react";
import { useState } from "react";

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleUsernameChange = (event) => {
        const inputU = event.target;
        console.log(inputU.value);
        setUsername(inputU.value);
    };

    const handlePasswordChange = (event) => {
        const inputP = event.target.value;
        console.log(inputP.value);
        if(inputP.length <= 8) {
        setPassword(inputP.value);
    }};

    const handlePhoneNumberChange = (event) => {
        const inputPh = event.target.value;
        console.log(inputPh.value);
        if (/^\d*$/.test(inputPh)) {
        setPhoneNumber(inputPh);
    }};

const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://url.com/endpoint", {
      method: "POST",
      body: JSON.stringify(
        {username: username,
        password: password,
        phoneNumber: phoneNumber}
    )
    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
};
    

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter your username:
          <input 
          type="username" 
          name="username" 
          value={username}
          onChange={handleUsernameChange}/>
        </label>
        <br />
        <label>
          Enter your password:
          <input 
          type="password" 
          name="password" 
          value={password}
          onChange={handlePasswordChange}/>
        </label>
        <br />
        <label>
          Enter mobile number:
          <input 
          type="tel" 
          name="phone number" 
          value={phoneNumber}
          onChange={handlePhoneNumberChange}/>
        </label>
        <br />
        <input type="submit" name="submit" />
        <br />


      </form>
    );
  };

  export default Form;