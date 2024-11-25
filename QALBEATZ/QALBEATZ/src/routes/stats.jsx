import React, { useState, useEffect, useRef } from "react";
import Section from "../components/Section";
import axios from "axios";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function Stats() {
  const [journalData, setJournalData] = useState(null);
  const [entrySummary, setEntrySummary] = useState(""); // For "Most Entries" and "Least Entries"
  const [entryCountInRange, setEntryCountInRange] = useState(null); // For date range count
  const [startDate, setStartDate] = useState(""); // Start date for range
  const [endDate, setEndDate] = useState(""); // End date for range
  const [selectedOption, setSelectedOption] = useState(""); // For dropdown option (Most or Least Entries)
  const chartInstance = useRef(null);

  useEffect(() => {
    async function fetchJournalMoods() {
      try {
        const response = await axios.get("http://localhost:3000/stats");
        setJournalData(response.data);
      } catch (error) {
        console.error("Error fetching journal mood data:", error);
      }
    }

    fetchJournalMoods();
  }, []);

  useEffect(() => {
    if (journalData) {
      renderChart(journalData);
    }
  }, [journalData]);

  const renderChart = (data) => {
    const canvas = document.getElementById("journalMoodChart");
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }

    const ctx = canvas.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const labels = data.map((entry) => {
      const date = new Date(entry.journal_date);
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(date);
    });

    const mood = data.map((entry) => entry.journal_mood);

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Journal Mood Over Time",
            data: mood,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Mood (1-10)",
            },
            beginAtZero: true,
            max: 10,
          },
        },
      },
    });
  };

  const exportToCSV = async () => {
    try {
      const response = await axios.get("http://localhost:3000/stats");
      const data = response.data;

      const csvContent = [
        ["Journal ID", "Journal Entry", "Journal Title", "Date", "Mood"],
        ...data.map((row) => [
          row.journal_id,
          row.journal_entry,
          row.journal_title,
          row.journal_date,
          row.journal_mood,
        ]),
      ]
        .map((e) => e.join(","))
        .join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "journal_moods.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error exporting to CSV:", error);
    }
  };

  const calculateEntriesInRange = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const entriesInRange = journalData.filter((entry) => {
      const entryDate = new Date(entry.journal_date);
      return entryDate >= start && entryDate <= end;
    });

    setEntryCountInRange(entriesInRange.length);
  };

  const handleDropdownChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    // Logic for handling Most Entries / Least Entries could go here
    if (option === "Most Entries") {
      // Calculate and show the month with the most entries
      const { month, count } = calculateMonthWithMostEntries();
      setEntrySummary(`Month with most entries: ${month} (${count} entries)`);
    } else if (option === "Least Entries") {
      // Calculate and show the month with the least entries
      const { month, count } = calculateMonthWithLeastEntries();
      setEntrySummary(`Month with least entries: ${month} (${count} entries)`);
    }
  };

  // Logic to calculate the month with most entries
  const calculateMonthWithMostEntries = () => {
    const monthCount = {};
    journalData.forEach((entry) => {
      const month = new Date(entry.journal_date).toLocaleString("default", { month: "long" });
      monthCount[month] = (monthCount[month] || 0) + 1;
    });

    const maxMonth = Object.keys(monthCount).reduce((a, b) => (monthCount[a] > monthCount[b] ? a : b));
    return { month: maxMonth, count: monthCount[maxMonth] };
  };

  // Logic to calculate the month with least entries
  const calculateMonthWithLeastEntries = () => {
    const monthCount = {};
    journalData.forEach((entry) => {
      const month = new Date(entry.journal_date).toLocaleString("default", { month: "long" });
      monthCount[month] = (monthCount[month] || 0) + 1;
    });

    const minMonth = Object.keys(monthCount).reduce((a, b) => (monthCount[a] < monthCount[b] ? a : b));
    return { month: minMonth, count: monthCount[minMonth] };
  };

  return (
    <div className="px-7 mt-20 relative">
      <div className="absolute top-5 right-5">
        <button
          onClick={exportToCSV}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Export Data
        </button>
      </div>

      <Section heading="Journal Mood Stats">
        {journalData ? (
          <div style={{ width: "100%", height: "400px", margin: "auto" }}>
            <canvas id="journalMoodChart"></canvas>
          </div>
        ) : (
          <p>Loading mood data...</p>
        )}
      </Section>

      {/* Dropdown for Most/Least Entries */}
      <div className="mt-5">
        <h3 className="font-bold">Select Most or Least Entries</h3>
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="border p-2"
        >
          <option value="">Select Option</option>
          <option value="Most Entries">Most Entries</option>
          <option value="Least Entries">Least Entries</option>
        </select>
        {entrySummary && <p className="mt-2 font-semibold">{entrySummary}</p>}
      </div>

      {/* Date Range Input Section */}
      <div className="mt-5">
        <h3 className="font-bold">Find Journal Entries in Date Range</h3>
        <label className="mr-2">Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-1 mr-4"
        />
        <label className="mr-2">End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-1 mr-4"
        />
        <button
          onClick={calculateEntriesInRange}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Count Entries
        </button>

        {entryCountInRange !== null && (
          <p className="mt-3">
            Number of journal entries from {startDate} to {endDate}:{" "}
            <span className="font-bold">{entryCountInRange}</span>
          </p>
        )}
      </div>
    </div>
  );
}
