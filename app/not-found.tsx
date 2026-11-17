import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060608] text-gray-100 px-4">
      <h1 className="text-6xl font-black bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
        404
      </h1>
      <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
