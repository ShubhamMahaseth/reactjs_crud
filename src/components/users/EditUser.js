import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Home from "../Home/Home";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  function handleInput(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    return (
      await fetch(`http://localhost:3003/users/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
      navigate("/")
    );
  }

  async function loadUser() {
    return await fetch(`http://localhost:3003/users/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Enter Your Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={data.name}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Enter Your Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="username"
              value={data.username}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email your E-mail Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={data.email}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Enter Your Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="phone"
              value={data.phone}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Enter Your Website Name
            </label>
            <input
              type="website"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="website"
              value={data.website}
              onChange={handleInput}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Edit User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
