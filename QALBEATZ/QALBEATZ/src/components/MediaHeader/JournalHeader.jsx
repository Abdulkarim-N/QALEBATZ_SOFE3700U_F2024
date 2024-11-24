import React from "react";

export default function JournalHeader({ className, journalEntries }) {
  // Compute total entries and time if relevant
  const totalEntries = journalEntries.length;
  const firstEntryDate = journalEntries.length
    ? new Date(journalEntries[0].journal_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No entries";

  return (
    <div className={`bg-neutral-800 text-white px-8 py-6 rounded-lg shadow-md ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        {/* Title Section */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">My Journal</h1>
          <p className="opacity-75 text-sm md:text-base mt-1">
            A summary of your journal activity
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-400">Total Entries</span>
            <span className="text-lg font-semibold">{totalEntries} entries</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-400">First Entry Date</span>
            <span className="text-lg font-semibold">{firstEntryDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
