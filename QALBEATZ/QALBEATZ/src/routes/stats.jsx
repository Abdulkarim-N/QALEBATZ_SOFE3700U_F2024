import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import axios from "axios";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function Stats() {
  const [journalData, setJournalData] = useState(null);

  useEffect(() => {
    async function fetchJournalMoods() {
      try {
        const response = await axios.get("http://localhost:3000/stats");
        setJournalData(response.data);
        renderChart(response.data);
      } catch (error) {
        console.error("Error fetching journal mood data:", error);
      }
    }

    fetchJournalMoods();
  }, []);

  const renderChart = (data) => {
    const ctx = document.getElementById("journalMoodChart").getContext("2d");

    const labels = data.map((entry) => {
      const date = new Date(entry.journal_date);
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(date);
    });

    const moods = data.map((entry) => entry.journal_mood);

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Journal Mood Over Time",
            data: moods,
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
    </div>
  );
}
