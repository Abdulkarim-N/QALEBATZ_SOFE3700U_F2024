import MediaGrid from "../components/Layout/MediaGrid";
import Section from "../components/Section";
import SkeletonLoader from "../components/Loader/SkeletonLoader";
import React from 'react';
import { useParams } from "react-router-dom";  // Import useParams to access URL params
import { routes } from "../shared/routes";
import useFeaturedPlaylists from "../hooks/useFeaturedPlaylists";
import useChillPlaylists from "../hooks/useChillPlaylists";

let userid = '';  // Declare userid globally in the file
export const user_id = (uid) => {
  console.log("Received variable:", uid);
  userid = uid;
  console.log("Current user ID:", userid);
};

export default function UserSpecificPlaylist() {
  const { userid } = useParams(); // Access the user ID from the route params
  const featuredPlaylists = useFeaturedPlaylists(6);
  const chillPlaylists = useChillPlaylists(5);

  return (
    <div className="px-7 mt-20">
      <h1 className="sr-only">UserHome</h1>

      {!featuredPlaylists ? (
        <SkeletonLoader />
      ) : (
        <Section heading="Spotify Playlists">
          <MediaGrid
            mediaPageRoute={routes.USERPLAYLIST.replace(':userid', userid)} // Dynamically replace :userid
            media={featuredPlaylists ? featuredPlaylists.items : null}
          />
        </Section>
      )}

      {!chillPlaylists ? (
        <SkeletonLoader />
      ) : (
        <Section heading="I'm Just A Chill Guy">
          <MediaGrid
            mediaPageRoute={routes.USERPLAYLIST.replace(':userid', userid)} // Dynamically replace :userid
            media={chillPlaylists ? chillPlaylists.items : null}
          />
        </Section>
      )}
    </div>
  );
}
