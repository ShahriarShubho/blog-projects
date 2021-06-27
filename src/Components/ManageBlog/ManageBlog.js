import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {     
        fetch("http://localhost:5000/allBlogs")
          .then((response) => response.json())
          .then((data) => {
            setBlogs(data)
            setLoading(false);
         
          });
      }, [blogs]);

      const handleDelete = (id) => {
          fetch(`http://localhost:5000/delete/${id}`, {
              method: 'DELETE'
          })
          .then(response => response.json())
          .then(data => {
            if(data){
              swal("Good Job!", "service successfully deleted", "success");
            }
          })
      }
    return (
        <div className="text-center">
            <h3>Manage blog</h3>
            <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>seral</th>
            <th>Name</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        {loading &&   <Spinner className="my-5" animation="grow" variant="primary" />}
        {blogs.map((blog, index) =>
        <tbody>
          <tr>
            <td>{index + 1}</td>
            <td>{blog.title}</td>
            <td>{blog.author}</td>
            <td><button onClick={() => handleDelete(blog._id)} className="btn btn-danger">DELETE</button></td>
          </tr>
        </tbody>)}
      </Table>
        </div>
    );
};

export default ManageBlog;