import React, { useState } from 'react';
const App =()=>{
  const [name,setName]=useState("");
  const[fullname,setfName]=useState(""); 
  const[lastName,setLastName]=useState("");
  const[lastNamenew,setLastNamenew]=useState();

  const onSubmits=(event)=>{
    event.preventDefault();
    setfName(name);
    setLastNamenew(lastName);
  }; 
  
  const inputEvent=(event)=>{
    setName(event.target.value);
  };
  const inputEventTwo=(event)=>{
    setLastName(event.target.value);
  };
   
  
  return(
<> 
 <div className="main_div"></div>

<div>
  <h1>Hello {fullname } {lastNamenew} </h1>
  <input type='text' placeholder='Enter your First Name' onChange={inputEvent}value={name}></input>
  
  <input type='text' placeholder='Enter your Last Name' onChange={inputEventTwo}value={lastName}></input>
  <button onClick={onSubmits}>Click Me 🔼</button> 

</div>

</>
  );
   
}; 
export default App;
