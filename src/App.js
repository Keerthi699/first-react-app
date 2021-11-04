import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // 2. set user data to `users` state with `setUsers` function
    setUsers(response.data);
  };

  // 1. get users data when user load the page
  useEffect(() => {
    fetchUsers();
  }, []);

  // watch `users` state and log if it changes
  useEffect(() => {
    if (users.length > 0) {
      console.log(users);
    }
  }, [users]);

  // 3. show users from the `users` state
  return (
    <div className="App">
      {users.map((user) => (
        <div key={user.id}>
          <li style={{ listStyle: "none" }}>{user.name}</li>
          <li style={{ listStyle: "none", color: "#888", marginBottom: 20 }}>
            {user.email}
          </li>
        </div>
      ))}
    </div>
  );
}

export default App;
