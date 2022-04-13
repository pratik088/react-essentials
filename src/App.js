import React , { useState, useEffect } from 'react';
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
    const [secondary, setSecondary] = useState("tired");

    useEffect(() => {
       console.log(`It's ${emotion} around here!`);
      }, [emotion]);

      useEffect(() => {
        console.log(`It's ${secondary} around here!`);
       }, [secondary]);

    return (
      <>
       <h1>Current emotion is {emotion} and {secondary}.</h1>

       <button onClick={() => setEmotion("happy")}>Make happy </button>

       <button onClick={() => setSecondary("tired")}> Make tired </button>

       <button onClick={() => setSecondary("crabby")}> Make crabby </button>

       <button onClick={() => setEmotion("frustrated")}> Frustrate </button>
       
       <button onClick={() => setEmotion("enthusiastic")}> Enthuse </button>
      </>
    );
  }

export default App;
