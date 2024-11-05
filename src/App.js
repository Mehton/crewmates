import './App.css';
import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreateCrewmate from './pages/CreateCrewmate'

import { Link } from 'react-router-dom'
import EditCrewmate from './pages/EditCrewmate';


const App = () => {
  const location = useLocation();
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/gallery",
      element:<ReadPosts />
    },
    {
      path:"/gallery/edit/:id",
      element: <EditCrewmate />
    },
    {
      path:"/new",
      element: <CreateCrewmate />
    }
  ]);

  return ( 

    <>
      <div className="App">
        <aside className="sidebar">
          <Link to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            <h1 style={{ textAlign: "center" }}>Home</h1>
          </Link>
          <ul>
            <li>
              <Link to="/new" className={({ isActive }) => (isActive ? 'active' : '')}>
                <h1 style={{ textAlign: "center" }}>Create a Crewmate!</h1>
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>
                <h1 style={{ textAlign: "center" }}>Crewmate Gallery</h1>
              </Link>
            </li>
          </ul>
        </aside>

        {location.pathname === '/' && (
          <div className="header">
            <h1>Welcome to the Crewmate Creator!</h1>
            <h3>Here is where you can create your very own set of crewmates before sending them off into space!</h3>
            <img src="./lol.png" alt="Peeps" height="200" width="500" /> <br />
            <img src="./spaceship.png" alt="Space Ship" height="auto" width="500" />
          </div>
        )}

        {element}
      </div>
    </>
  );
}

export default App;
