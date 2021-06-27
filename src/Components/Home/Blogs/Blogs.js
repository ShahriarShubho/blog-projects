import React, { useEffect, useState } from 'react';
import AllBlog from '../AllBlog/AllBlog'
const Blogs = () => {
    const [blog, setBlog] = useState([])

  useEffect(() => {
    fetch("https://pumpkin-sundae-84698.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <section className="homeSection">
      <div className="container">
        <div className="row">

          {blog.length === 0 && (
            <div className="spinnerStyle  m-auto">
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            </div>
          )}
          
          {blog.map((pd) => (
            <AllBlog blog={pd} key={pd._id}></AllBlog>
          ))}
        </div>
      </div>
    </section>
  );
  };

export default Blogs;