import { users } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = users.find((user) => user.id === parseInt(id));
  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  });
}

// export async function DELETE(request: Request, {params} : {params : {id: string}}
// ) {
//     const { id } = await params;
//     const user = users.filter((user) => user.id !== parseInt(id));
//     return Response.json(user);
// }
