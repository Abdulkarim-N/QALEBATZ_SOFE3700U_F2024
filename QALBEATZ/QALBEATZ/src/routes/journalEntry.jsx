import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JournalistTable from "../components/Layout/JournalistTable";
import DotLoader from "../components/Loader/DotLoader";
import axios from "axios";
let uid = '';
export const Usr_id = (userid) => {
  uid = userid
  console.log(uid + 'in button file!')
}


export default function Journalist() {
  const { userid } = useParams(); // Retrieve the user ID from the route
  const [journalEntries, setJournalEntries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJournalEntries = async () => {
      try {
        console.log("Fetching journal entries for user:", userid); // Debugging
        const response = await axios.get(`http://localhost:3000/journal`, {
          params: { user_id: userid },
        });
        setJournalEntries(response.data);
      } catch (err) {
        console.error("Error fetching journal entries:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userid) {
      fetchJournalEntries();
    }
  }, [userid]); // Only triggers when `userid` changes

  if (loading) return <DotLoader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 bg-neutral-900 text-white min-h-screen">
      <div className="overflow-x-auto rounded-lg bg-neutral-900 shadow-md">
        <JournalistTable articles={journalEntries} />
      </div>
    </div>
  );
}