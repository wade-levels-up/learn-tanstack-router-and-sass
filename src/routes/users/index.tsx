import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/users/")({
  component: UsersComponent,
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate an API call to GET users
    return {
      users: [
        { id: 1, name: "Wade Foster" },
        { id: 2, name: "Bob Brown" },
        { id: 3, name: "David Long" },
        { id: 4, name: "Peter Sandy" },
      ],
    };
  },
  pendingComponent: () => <div>Loading Users...</div>,
  errorComponent: () => <div>Error!</div>,
});

function UsersComponent() {
  const { users } = Route.useLoaderData();

  return (
    <>
      <h1>Welcome to the Users Route!</h1>
      <h2>Click to view user details below</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to="/users/$userId" params={{ userId: user.id.toString() }}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">Home</Link>
    </>
  );
}
