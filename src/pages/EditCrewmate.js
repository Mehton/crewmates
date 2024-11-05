import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'
import './EditPost.css'

const EditCrewmate = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", speed: "", color: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const deletePost = async(event)=>
    {
        event.preventDefault();
        await supabase
  .from('crewmate')
  .delete()
  .eq('id', id);

   window.location = "/";
    }

    const updatePost = async(event)=>{
        event.preventDefault();
        await supabase
  .from('crewmate')
  .update({ name: post.name, speed: post.speed,  color: post.color})
  .eq('id', id);

  window.location = "/";
    }

    return (
        <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
            <h1>Edit Crewmate</h1>
            <img src="../../lol.png" alt="Peeps" height="100" width="250" /><br />

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
                <input type="submit" value="Submit" onClick={updatePost} style={{width: "300px"}} />
                <button className="deleteButton" onClick={deletePost} style={{width: "300px"}}>Delete</button>

            </form>
                {/* <input type="submit" value="Submit"  style={{width: "300px"}}/> */}
        </div>
               
    )
}

export default EditCrewmate