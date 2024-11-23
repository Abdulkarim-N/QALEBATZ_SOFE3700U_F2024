import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

export default function useSearch(query, type = "track,artist,album") {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setSearchResults(null); 
      return;
    }

    const fetchSearchResults = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchData(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(
            query
          )}&type=${type}&limit=20`
        );
        setSearchResults(data);
      } catch (err) {
        console.error("Error fetching search results:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [query, type]);

  return { searchResults, isLoading, error };
}
