import React from "react";

interface Users {
  id: number;
  name: string;
}

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
    // cache: "no-store",
  });
  const users: Users[] = await res.json();
  return (
    <div>
      {users.map((each) => (
        <div key={each.id}>{each.name}</div>
      ))}
    </div>
  );
};

export default Users;
