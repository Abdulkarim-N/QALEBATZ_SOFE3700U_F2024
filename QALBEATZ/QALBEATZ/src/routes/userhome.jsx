import MediaGrid from "../components/Layout/MediaGrid";
import Section from "../components/Section";
import SkeletonLoader from "../components/Loader/SkeletonLoader";
import useFeaturedPlaylists from "../hooks/useFeaturedPlaylists";
import useChillPlaylists from "../hooks/useChillPlaylists";
import { routes } from "../shared/routes";
let uid = '';
export const usr_id = (userid) => {
  uid = userid
  console.log(uid + 'in button file')
}
export default function userHome() {
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
            mediaPageRoute={routes.USERPLAYLIST.replace(':userid', uid)}
            media={featuredPlaylists ? featuredPlaylists.items : null}
          />
        </Section>
      )}

      {!chillPlaylists ? (
        <SkeletonLoader />
      ) : (
        <Section heading="I'm Just A Chill Guy">
          <MediaGrid
            mediaPageRoute={routes.USERPLAYLIST.replace(':userid', uid)}
            media={chillPlaylists ? chillPlaylists.items : null}
          />
        </Section>
      )}
    </div>
  );
}
