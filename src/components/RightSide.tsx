import React from "react";

interface User {
  id: number;
  name: string;
}

const RightSide = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // next: { revalidate: 10 },
    // cache: "no-store",
  });
  const users: User[] = await res.json();

  console.log(users);
  return (
    <div>
      <div>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
          {users.map((each) => (
            <li key={each.id}>{each.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
