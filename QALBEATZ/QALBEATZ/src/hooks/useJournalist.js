import { useState, useEffect } from "react";

export default function useJournalist(journalistId) {
    const [journalist, setJournalist] = useState(null);
  
    useEffect(() => {
      // Simulate a hardcoded data fetch based on journalistId
      const hardcodedJournalists = {
        "1": {
          id: "1",
          name: "John Doe",
          bio: "An investigative journalist who specializes in uncovering corruption.",
          profile_picture: "/images/john_doe.jpg",
          articles: [
            { id: "101", title: "Breaking the Silence", date: "2024-11-01" , mood: "1" },
            { id: "102", title: "The Untold Story", date: "2024-10-15", mood: "10" },
          ],
        },
        "2": {
          id: "2",
          name: "Jane Smith",
          bio: "A tech journalist who writes about innovations and startups.",
          profile_picture: "/images/jane_smith.jpg",
          articles: [
            { id: "201", title: "AI and the Future", date: "2024-09-12" },
            { id: "202", title: "Breaking into the Tech World", date: "2024-08-30" },
          ],
        },
      };
  
      // Simulate loading delay
      setTimeout(() => {
        setJournalist(hardcodedJournalists[journalistId] || null);
      }, 500);
    }, [journalistId]);
  
    return [journalist];
  }
  