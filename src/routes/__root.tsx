import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link
        to="/posts"
        search={{
          query: "post1",
        }}
        className="[&.active]:font-bold"
      >
        Posts
      </Link>
      <Link to="/users" className="[&.active]:font-bold">
        Users
      </Link>
      <Link to="/artists" className="[&.active]:font-bold">
        Artists
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
