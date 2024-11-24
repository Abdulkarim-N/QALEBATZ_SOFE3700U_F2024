import MediaGrid from "../components/Layout/MediaGrid";
import Section from "../components/Section";
import SkeletonLoader from "../components/Loader/SkeletonLoader";
import React, { useState } from 'react';
import axios from 'axios';
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../shared/routes";
import useFeaturedPlaylists from "../hooks/useFeaturedPlaylists";


export default function Stats() {
    const featuredPlaylists = useFeaturedPlaylists(5);
  
    return (
      <div className="px-7 mt-20">
        <h1 className="sr-only">Home</h1>
  
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