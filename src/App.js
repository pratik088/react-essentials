import React , { useState } from 'react';
import './App.css';

function SecretComponent(){
  return <h1>Secret information for authorized users only.</h1>
}

function RegularComponent () {
   return <h1>Everyone can see this component.</h1>;
  }
  
  /* When the app runs the initial state is going to be happy. */
  function App() {
    const [emotion, setEmotion] = useState("happy");

    return (
      <>
       <h1>Current emotion is {emotion}.</h1>
       
       <button onClick={() => setEmotion("happy")}> Happy </button>

       <button onClick={() => setEmotion("frustrated")}> Frustrate </button>
       
       <button onClick={() => setEmotion("enthusiastic")}> Enthuse </button>
      </>
    );
  }

export default App;
