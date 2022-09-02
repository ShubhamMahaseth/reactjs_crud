import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Link, useParams } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const api = "http://localhost:3003/users";
  async function handleUsers(api) {
    return await fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.reverse());
      })
      .catch((err) => console.log(err));
  }

  async function deleteUser(id) {
    return (
      await fetch(`http://localhost:3003/users/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((res) => console.log(res)),
      handleUsers(api)
    );
  }

  useEffect(() => {
    handleUsers(api);
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table table-success table-striped border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>

                <td>
                  <button
                    className="btn btn-primary m-1"
                    exact
                    onClick={() => navigate(`/users/edit/${item.id}`)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-outline-primary m-1" exact>
                    View
                  </button>
                  <button
                    className="btn btn-danger m-1"
                    exact
                    onClick={() => {
                      deleteUser(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
