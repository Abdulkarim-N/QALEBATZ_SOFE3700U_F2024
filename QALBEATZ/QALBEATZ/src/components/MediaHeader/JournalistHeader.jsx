import { Link } from "react-router-dom";

export default function JournalistTable({ articles = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse bg-neutral-900 text-white shadow-lg rounded-lg">
        <thead className="bg-neutral-800">
          <tr>
            <th className="px-6 py-3 text-left font-semibold text-gray-300 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-300 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-300 uppercase tracking-wider">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr
              key={article.id}
              className={`${
                index % 2 === 0 ? "bg-neutral-900" : "bg-neutral-800"
              } hover:bg-neutral-700`}
            >
              <td className="px-6 py-4 text-gray-200">{article.title}</td>
              <td className="px-6 py-4 text-gray-400">{article.date}</td>
              <td className="px-6 py-4">
                <Link
                  to={`/articles/${article.id}`}
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  View Article
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
