import React from 'react';
import { useState } from 'react';
import './CreatePost.css'
import { supabase } from '../client'

const CreateCrewmate = () => {

    const [post, setPost] = useState({name: "", speed: "", color: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrewmate = async(event) =>{

        event.preventDefault();

        await supabase
  .from('crewmate')
  .insert({name: post.name, speed: post.speed, color: post.color})
  .select();

  window.location = "/new";
    }

    return (
         <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
            <h1>Create a New Crewmate</h1>
            <img src="lol.png" alt="Peeps" height="100" width="250" /><br />

           <form style={{textAlign:"center"}}>
                <div className="card">
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" onChange={handleChange} />
                </div>

                <div className="card">
                    <label htmlFor="speed">Speed:</label><br />
                    <input type="text" id="speed" name="speed" onChange={handleChange} />
                </div>

                <div className="card">
                    <label>Color:</label><br />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {["Red", "Green", "Blue", "Purple", "Yellow", "Orange"].map(color => (
                            <div style={{ display: "flex", alignItems: "center" }} key={color}>
                                <input type="radio" id={color.toLowerCase()} name="color" value={color} onChange={handleChange} />
                                <label htmlFor={color.toLowerCase()}>{color}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <input type="submit" value="Submit" onClick={createCrewmate} style={{width: "300px"}}/>
            </form>
        </div>
    )
}

export default CreateCrewmate