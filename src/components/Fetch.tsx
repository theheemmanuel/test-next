import React, { Suspense } from "react";
import { SkeletonCircle } from "./Loading";

interface Users {
  id: number;
  name: string;
}

const Fetch = async () => {
  let users: Users[] = [];

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_SUPABASE_URL!, {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
      },
      // cache: "no-store",
      next: { revalidate: 10 },
    });
    users = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
  } catch (err) {
    console.log(err);
  }
  return (
    <Suspense
      fallback={
        <div className="flex flex-wrap gap-6">
          {[1, 2, 3, 4, 5].map((each) => (
            <SkeletonCircle key={each} />
          ))}
        </div>
      }
    >
      <div>
        {users.length > 0 &&
          users.map((each) => <div key={each.id}>{each.name}</div>)}
      </div>
    </Suspense>
  );
};

export default Fetch;
