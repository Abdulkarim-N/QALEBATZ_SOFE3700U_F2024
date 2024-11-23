import MediaGrid from "../components/Layout/MediaGrid";
import Section from "../components/Section";
import SkeletonLoader from "../components/Loader/SkeletonLoader";
import useFeaturedPlaylists from "../hooks/useFeaturedPlaylists";
import { routes } from "../shared/routes";

export default function userHome() {
  const featuredPlaylists = useFeaturedPlaylists(10);

  return (
    <div className="px-7 mt-20">
      <h1 className="sr-only">UserHome</h1>

      {!featuredPlaylists ? (
        <SkeletonLoader />
      ) : (
        <>
          <Section heading="Spotify Playlists">
            <MediaGrid
              mediaPageRoute={routes.PLAYLIST}
              media={featuredPlaylists ? featuredPlaylists.items : null}
            />
          </Section>
        </>
      )}
    </div>
  );
}
