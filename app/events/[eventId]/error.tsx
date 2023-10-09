"use client";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col justify-center align-middle items-center my-20">
      <p className="mb-5 text-3xl text-center">
        {error.message}
        <br />
        Better to go back!
      </p>
      <Link
        href="/events"
        className="flex max-w-fit items-center justify-center rounded-full border-2 border-blue-600 text-white px-5 py-3 shadow-lg hover:bg-transparent hover:text-blue-600 bg-blue-600"
      >
        See All Events
      </Link>
    </div>
  );
}
