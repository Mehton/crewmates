import React, { useState, useEffect } from 'react';
import { supabase } from '../client'
import Card from '../components/Card';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // setPosts(props.data);

        const fetchPost = async()=>{
            const {data} = await supabase
  .from('crewmate')
  .select()
  .order('created_at', { ascending: true })

// set state of posts
setPosts(data);
        }
        fetchPost()
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} name={post.name} speed={post.speed} color={post.color}/>
                ) : <h2>{'No Crewmate Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;