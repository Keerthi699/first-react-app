import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

export default function Users() {
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
      {users.map((u) => (
        <User user={u} />
      ))}
    </div>
  );
}
