import React from "react";
import { revalidatePath } from "next/cache";
// import { auth, currentUser } from "@clerk/nextjs/server";

type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  //   const authObj = await auth();
  //   const userObj = await currentUser();
  //   console.log(authObj, userObj);

  const res = await fetch("https://67d29c2890e0670699be55a9.mockapi.io/users");
  const users = await res.json();

  // Server action
  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const res = await fetch(
      "https://67d29c2890e0670699be55a9.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );

    const newUser = await res.json();
    console.log(newUser);
    revalidatePath("/mock-users");
  }
  return (
    <div className="py-10 justify-center text-center">
      <form action={addUser} className="mb-4">
        <label htmlFor="name" className="m-2 text-2xl">
          Name:
        </label>
        <input
          title="name"
          placeholder="Name"
          type="text"
          name="name"
          className="p-3 rounded-lg bg-white m-2 text-blue-950"
        />
        <button
          type="submit"
          className="bg-blue-500 rounded-lg p-3 cursor-pointer"
        >
          Add User
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4 py-10">
        {users.map((user: MockUser) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg text-gray-700 p-4"
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
