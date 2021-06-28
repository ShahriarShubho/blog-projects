import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogs = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState({})
    useEffect(() => {
        fetch(`https://thawing-inlet-19227.herokuapp.com/blogById/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setBlog(data);
          });
      }, [id])
    
    return (
        <div className="container">
           <div className='text-center m-auto p-5'>
               <img src={blog.img} alt="" className="img-fluid mb-3" />
               <h5>Written by: {blog.author}</h5>
               <p>{blog.description}</p>
           </div>
        </div>
    );
};

export default SingleBlogs;