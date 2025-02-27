//import { useState } from 'react'

import './App.css'
import {useState} from 'react';
import AmountForm from './components/AmountForm'
import FirstNameForm from './components/FirstNameForm'
import SubscriptionForm from './components/SubscriptionForm'
import { FATHER_NAME } from './constants/message'
import axios from "axios";

function App() {

  const [formData, setFormData] = useState([]);

  // Update state from child components
  const handleInputChange = (action, value) => {
    setFormData((prevData) => {
      // Check if action already exists, update it; otherwise, add new entry
      const updatedData = prevData.filter((item) => item.action !== action);
      return [...updatedData, { action, value }];
    });
  };


    // Submit Handler - Calls API based on action type
    const handleSubmit = async () => {
      try {
        const apiCalls = formData.map((data) =>
          axios.post("/api/saveData", { action: data.action, value: data.value })
        );
  
        const responses = await Promise.all(apiCalls);
        console.log("API Responses:", responses.map((res) => res.data));
  
        alert("Data saved successfully!");
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("Something went wrong!");
      }
    };

  return (
    <>
      <p>{FATHER_NAME}</p>
    
      <FirstNameForm onChange={handleInputChange} />
      <AmountForm onChange={handleInputChange} />
      <SubscriptionForm onChange={handleInputChange} />
   <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default App
