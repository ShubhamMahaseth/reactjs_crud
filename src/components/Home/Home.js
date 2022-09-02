import React, { useState, useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState([]);

  const api = "http://localhost:3003/users";
  function handleUsers(api) {
    return fetch(api)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    handleUsers(api);
  }, []);
  console.log(user);

  return <h1>Home</h1>;
};

export default Home;
