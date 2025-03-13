"use client";
import { useQuery } from "@tanstack/react-query";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export const URL = "https://jsonplaceholder.typicode.com/users";

export default function UserClient() {
  const {
    data: users = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(URL);
      const data = await response.json();
      localStorage.setItem("users", JSON.stringify(data));
      return data;
    },
  });

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul className="grid grid-cols-4 gap-4 py-9">
        {users.map((user: User) => (
          <li
            key={user.id}
            className="bg-amber-100 p-2 m-1 text-black text-center rounded-lg shadow-md"
          >
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
