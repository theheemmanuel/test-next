import React from "react";

interface Users {
  id: number;
  name: string;
}

const Users = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_SUPABASE_URL!, {
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
    },
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
