import MediaGrid from "../components/Layout/MediaGrid";
import Section from "../components/Section";
import SkeletonLoader from "../components/Loader/SkeletonLoader";
import React from 'react';
import { useParams } from "react-router-dom";  // Import useParams to access URL params
import { routes } from "../shared/routes";
import useAnimePlaylist from "../hooks/useWorkoutPlaylist";
import usePodcastPlaylist from "../hooks/usePartyPlaylist";

let userid = '';  // Declare userid globally in the file
export const user_id = (uid) => {
  console.log("Received variable:", uid);
  userid = uid;
  console.log("Current user ID:", userid);
};

export default function UserSpecificPlaylist() {
  const { userid } = useParams(); // Access the user ID from the route params
  const AnimePlaylist = useAnimePlaylist(6);
  const PodcastPlaylist = usePodcastPlaylist(5);

  return (
    <div className="px-7 mt-20">
      <h1 className="sr-only">UserHome</h1>

      {!AnimePlaylist ? (
        <SkeletonLoader />
      ) : (
        <Section heading="Feeling a workout?">
          <MediaGrid
            mediaPageRoute={routes.USERPLAYLIST.replace(':userid', userid)} // Dynamically replace :userid
            media={AnimePlaylist ? AnimePlaylist.items : null}
          />
        </Section>
      )}

      {!PodcastPlaylist ? (
        <SkeletonLoader />
      ) : (
        <Section heading="It's time to party!">
          <MediaGrid
            mediaPageRoute={routes.USERPLAYLIST.replace(':userid', userid)} // Dynamically replace :userid
            media={PodcastPlaylist ? PodcastPlaylist.items : null}
          />
        </Section>
      )}
    </div>
  );
}
