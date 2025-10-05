import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId")({
  component: UserComponent,
  loader: async ({ params }) => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate delayed API call
    const users = [
      { id: 1, name: "Wade Foster", bio: "Hello my name is Wade!" },
      { id: 2, name: "Bob Brown", bio: "Hello my name is Bob!" },
      { id: 3, name: "David Long", bio: "Hello my name is David!" },
      { id: 4, name: "Peter Sandy", bio: "Hello my name is Peter!" },
    ];
    const user = users.filter((user) => user.id === Number(params.userId));
    return { user: user[0] };
  },
  pendingComponent: () => <div>Loading user....</div>,
});

function UserComponent() {
  const { user } = Route.useLoaderData();
  return (
    <>
      <div>{user.name}</div>
      <div>{user.bio}</div>
    </>
  );
}
