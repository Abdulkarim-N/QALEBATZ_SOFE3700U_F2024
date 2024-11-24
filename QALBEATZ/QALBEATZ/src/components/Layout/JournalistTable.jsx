import { Link } from "react-router-dom";

export default function JournalistTable({ articles = [] }) {
  return (
    <div className="overflow-x-auto rounded-lg bg-neutral-900 shadow-md">
      <table className="min-w-full table-auto text-left border-collapse">
        <thead className="bg-neutral-800 text-gray-300 uppercase text-sm tracking-wide">
          <tr>
            <th className="px-4 py-3 w-1/12 text-center">#</th>
            <th className="px-4 py-3 w-2/12 text-left">Date</th>
            <th className="px-4 py-3 w-3/12 text-left">Entry</th>
            <th className="px-4 py-3 w-2/12 text-center">Mood</th>
            <th className="px-4 py-3 w-2/12 text-center">Update</th>
            <th className="px-4 py-3 w-2/12 text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr
              key={article.journal_id}
              className={`${
                index % 2 === 0 ? "bg-neutral-900" : "bg-neutral-800"
              } hover:bg-neutral-700`}
            >
              <td className="px-4 py-3 text-center text-gray-400">{index + 1}</td>
              <td className="px-4 py-3 text-gray-200">
                {new Date(article.journal_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td className="px-4 py-3 text-gray-400 truncate">{article.journal_entry}</td>
              <td className="px-4 py-3 text-center">
                <span className="bg-neutral-800 text-gray-300 px-3 py-1 rounded">
                  {article.mood || "Neutral"}
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Update
                </button>
              </td>
              <td className="px-4 py-3 text-center">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}