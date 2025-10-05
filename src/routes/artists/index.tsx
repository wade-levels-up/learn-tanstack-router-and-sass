import { createFileRoute } from "@tanstack/react-router";

type Artist = {
  name: string;
  age: number;
  albums: string[];
};

export const Route = createFileRoute("/artists/")({
  component: ArtistsComponent,
  loader: async () => {
    const artists = await fetch("http://localhost:3000/artists").then((res) =>
      res.json()
    );
    return artists;
  },
});

function ArtistsComponent() {
  const { artists } = Route.useLoaderData();

  return (
    <>
      <h1>Artists registered with MegaDorsal SoundScoper</h1>
      <ul>
        {artists?.map((artist: Artist, index: number) => (
          <li key={index}>
            <p>Artist name: {artist.name}</p>
            <p>Artist age: {artist.age}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
