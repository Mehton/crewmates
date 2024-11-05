import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreateCrewmate from './pages/CreateCrewmate'

import { Link } from 'react-router-dom'
import EditCrewmate from './pages/EditCrewmate';


const App = () => {
  
  const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  const posts = [
      {'id':'1', 
      'title': 'Cartwheel in Chelsea 🤸🏽‍♀️',
      'author':'Harvey Milian', 
      'description': descr},
      {'id':'2', 
      'title': 'Love Lock in Paris 🔒',
      'author':'Beauford Delaney', 
      'description':descr},
      {'id':'3', 
      'title': 'Wear Pink on Fridays 🎀',
      'author':'Onika Tonya', 
      'description':descr},
      {'id':'4', 
      'title': 'Adopt a Dog 🐶',
      'author':'Denise Michelle', 
      'description':descr},
  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditCrewmate data={posts} />
    },
    {
      path:"/new",
      element: <CreateCrewmate />
    }
  ]);

  return ( 

   <div className="App">
      <aside className="sidebar">
        <Link to="/" activeClassName="active"><h1 style={{textAlign:"center"
        }}>Home</h1></Link>
        <ul>
          <li>
            <Link to="/new" activeClassName="active"><h1 style={{textAlign:"center"
        }}>Create a Crewmate!</h1></Link>
          </li>
          <li>
            <Link to="/" activeClassName="active"><h1 style={{textAlign:"center"
        }}>Crewmate Gallery</h1></Link>
          </li>
        </ul>
      </aside>

      <div className="header">
        <h1>Welcome to the Crewmate Creator!</h1>
        <h3>Here is where you can create your very own set of crewmates before sending them off into space!</h3>
        <img src="lol.png" alt="Peeps" height="200" width="500" /> <br />
        <img src="spaceship.png" alt="Space Ship" height="auto" width="500" />
      </div>

       {element}
    </div>

  );
}

export default App;
