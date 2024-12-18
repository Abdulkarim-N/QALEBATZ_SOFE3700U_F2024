import React, { useState } from 'react';
import axios from 'axios';
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../shared/routes";

let uid = ''; // Ensures uid is updated by the username_id function
export const username_id = (userid) => {
  uid = userid;
  console.log(uid + ' in button file');
};

export default function JournalEntry() {
  const navigate = useNavigate();
  const { userid } = useParams(); // Use this if `userid` is passed in the route
  const [journalTitle, setJournalTitle] = useState(""); // State for journal title
  const [journalText, setJournalText] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [mood, setMood] = useState(""); // State for mood

  const journalEntry = {
    journalTitle,
    journalText,
    entryDate,
    mood,
    userid,
  };

  return (
    <div className="min-h-screen flex flex-col items-stretch font-body bg-black md:bg-gradient-to-b md:from-zinc-900 md:to-black">
      <header className="py-12 md:py-8 px-8 md:px-12 md:mb-8 bg-black">
        <nav>
          {/* Use uid if no `userid` from params */}
          <a href={routes.HOME} className="outline-none">
            {/* Navigation content if needed */}
          </a>
        </nav>
      </header>

      <main className="self-center w-full max-w-[46rem] flex flex-col items-stretch gap-8 px-8 md:px-28 md:py-20 pb-20 md:rounded-lg bg-black">
        <h1 className="text-3xl md:text-[2.9rem] md:text-center md:mb-7 font-extrabold">
          Journal
        </h1>

        <form
          className="flex flex-col gap-5 md:px-[5.5rem]"
          onSubmit={(e) => {
            e.preventDefault();
            journalEntry.journalTitle = journalTitle;
            journalEntry.journalText = journalText;
            journalEntry.entryDate = entryDate;
            journalEntry.mood = mood;
            journalEntry.userid = uid;
            console.log(journalEntry);
            navigate(routes.LOGGED.replace(':userid', uid)); // Ensure routes.LOGGED is correct
            axios
              .post('http://localhost:3000/journalpost', { journalEntry })
              .then(response => console.log(response.data))
              .catch(err => console.log(err));
          }}
        >
          <label className="text-gray-400">Journal Title</label>
          <input
            type="text"
            value={journalTitle}
            onChange={(e) => setJournalTitle(e.target.value)}
            placeholder="Enter your journal title"
            className="p-2 border border-gray-300 rounded bg-black text-white"
            required
          />

          <label className="text-gray-400">Enter Date of Journal</label>
          <input
            type="date"
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-black text-white"
            required
          />

          <label className="text-gray-400">Journal Entry</label>
          <textarea
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
            placeholder="How are you feeling today?"
            className="p-2 border border-gray-300 rounded h-40 bg-black text-white"
            required
          />

          <label className="text-gray-400">Mood</label>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-black text-white"
            required
          >
            <option value="" disabled>Select your mood (1-10)</option>
            {[...Array(10)].map((_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>

          <PrimaryButton type="submit" className="mt-5" style={{ color: "#a1051c" }}>
            Save Entry  
          </PrimaryButton>
        </form>

        <div className="flex flex-col gap-5 items-center text-center">
          <hr className="hidden md:block w-full border-t-[1px] mb-6 border-zinc-800" />

          <div className="flex flex-col gap-1 md:gap-2 md:flex-row">
            <p className="text-zinc-400">Want to go back?</p>
            <a href={routes.LOGGED} className="text-red-500 hover:underline">
              Return to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
