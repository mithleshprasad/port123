import React,{useState} from 'react';

import Cal from "./Cal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Boot from "./Boot"

import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import Hookes from './Hookes';

function App() {
  const [name,setName]=useState("anil...!!!!")
  return (
    <div style={{ margin:10 , textAlign:"center" , padding:15}}>
        <Boot/>

      <Header /><hr></hr>
      <AddContact /><hr></hr>
      <Hookes/><hr></hr>
      <ContactList name={name}/>
      <button onClick={()=>{setName("mithlesh.....!!!!!")}} >Update Name</button>
      <ContactCard></ContactCard><hr></hr>
      <h4>how to create  react calculator </h4>
      <h1>Calculator</h1>
  <Cal/>
    </div>
    

  
  );
}

export default App;
