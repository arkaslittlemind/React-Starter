import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
      <Link
        to="/"
        className="px-4 py-2 bg-orange-700 text-white rounded hover:bg-orange-800 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
