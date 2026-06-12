"use client";

export default function Error({ reset }) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">
        Database Connection Failed
      </h1>

      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded-lg bg-blue-500"
      >
        Try Again
      </button>
    </main>
  );
}