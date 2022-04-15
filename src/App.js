import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404,
  Services,
  CompanyHistory,
  Location
} from "./pages"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/about" element={<About />}>
        <Route path="services" element={<Services />} />
        <Route path="history" element={<CompanyHistory />} />
        <Route path="location" element={<Location />} />

          </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;


/* 

// Fetching and displaying from api
//https://api.github.com/users/pratik088

  function App({ login }) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      if (!login) return;
      setLoading(true);
      fetch(`https://api.github.com/users/pratik088`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
    }, [login]);

    if(loading) return <h1>Loading...</h1>;
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if(!data) return null;

      return (
      <div>
        <h1>{data.login}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url}/>
      </div>);
    

    return <div> No user available.</div>
  }
*/