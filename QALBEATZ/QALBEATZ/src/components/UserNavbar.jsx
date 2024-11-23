import { useState } from "react";
import { Form } from "react-bootstrap";
import FlatButton from "./Buttons/FlatButton";
import SecondaryButton from "./Buttons/SecondaryButton";
import { routes } from "../shared/routes";
import useSearch from "../hooks/useSearch";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const { searchResults, isLoading, error } = useSearch(search, "track");

  return (
    <nav className="flex justify-between p-4 bg-neutral-900 text-white">
      <ul role="menu" className="flex items-center gap-4">
        
        <li className="flex-1">
          <Form.Control
            type="search"
            placeholder="Search Songs/Artists"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "0.5rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              background: "#121212",
              color: "#fff",
            }}
          />
        </li>

        
        <li>
          <FlatButton
            href={routes.SIGNUP}
            className="text-neutral-400 hover:text-white font-bold hover:scale-105"
          >
            Journal
          </FlatButton>
        </li>

        
        <li>
          <SecondaryButton href={routes.HOME} className="px-8 py-3">
            Log Out
          </SecondaryButton>
        </li>
      </ul>

      
      <div
        className="absolute top-[100%] mt-2 w-full max-w-md bg-neutral-800 text-white shadow-lg rounded overflow-hidden"
        style={{ zIndex: 10 }}
      >
        {isLoading && (
          <p className="text-center py-2 text-gray-400">Loading...</p>
        )}
        {error && (
          <p className="text-center text-red-500 py-2">
            Error: {error.message}
          </p>
        )}
        {searchResults?.tracks?.items?.length > 0 && (
          <ul className="list-none">
            {searchResults.tracks.items.map((track) => (
              <li
                key={track.id}
                className="flex items-center gap-4 p-2 hover:bg-neutral-700 cursor-pointer transition-colors"
              >
                {/* Album Art */}
                <img
                  src={track.album.images[0]?.url || ""}
                  alt={`${track.name} Album`}
                  className="w-12 h-12 rounded"
                />

                {/* Track and Artist Details */}
                <div className="truncate">
                  <p className="font-semibold truncate">{track.name}</p>
                  <p className="text-sm text-gray-400 truncate">
                    {track.artists[0].name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {!isLoading && searchResults?.tracks?.items?.length === 0 && (
          <p className="text-center py-2 text-gray-400">No results found.</p>
        )}
      </div>
    </nav>
  );
}
