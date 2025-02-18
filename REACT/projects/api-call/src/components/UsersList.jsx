import { useEffect, useState } from "react";

import User from "./User";
import Loader from "./Loader";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Loader user={true} />
      ) : (
        <div className="flex flex-col gap-4 max-h-full overflow-auto pt-5">
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </div>
      )}
    </>
  );
};

export default UsersList;
