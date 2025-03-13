import React from "react";
import { User } from "../users_client/page";
const URL = "https://jsonplaceholder.typicode.com/users";
export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(URL);
  const users = await res.json();
  return (
    <div>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
