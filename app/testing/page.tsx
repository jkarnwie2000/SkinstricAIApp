"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function PhotoPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  function handleNameSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanName = name.trim();

    if (
      cleanName.length < 2 ||
      !/^[A-Za-z\s.'-]+$/.test(cleanName)
    ) {
      setError("Please enter a valid name using letters only.");
      return;
    }

    setError("");
    localStorage.setItem("name", cleanName);
    router.push("/photo");
  }

  return (
    <main className="relative flex min-h-[calc(100dvh-64px)] flex-col items-center justify-center overflow-hidden bg-white text-black">

      <p className="absolute left-8 top-6 z-20 text-left text-base font-semibold">
        TO START ANALYSIS
      </p>

      {/* Centered container for diamonds and form */}
      <div className="relative flex aspect-square w-[min(700px,90vw,70dvh)] shrink-0 items-center justify-center">

        {/* Large rotating diamond */}
        <Image
          src="/assets/Diamond-light-large.webp"
          alt=""
          width={700}
          height={700}
          className="pointer-events-none absolute inset-0 h-full w-full object-contain animate-spin-slow brightness-50"
        />

        {/* Medium rotating diamond */}
        <Image
          src="/assets/Diamond-medium-medium.webp"
          alt=""
          width={640}
          height={640}
          className="pointer-events-none absolute inset-0 m-auto h-[90%] w-[90%] object-contain animate-spin-medium"
          style={{ transformOrigin: "center" }}
        />

        {/* Small rotating diamond */}
        <Image
          src="/assets/Diamond-dark-small.webp"
          alt=""
          width={580}
          height={580}
          className="pointer-events-none absolute inset-0 m-auto h-[80%] w-[80%] object-contain animate-spin-fast"
          style={{ transformOrigin: "center" }}
        />

        {/* Form centered inside diamonds */}
        <form
          onSubmit={handleNameSubmit}
          className="relative z-20 flex w-[min(417px,80%)] flex-col items-center justify-center gap-2 text-center"
        >
          <label
            htmlFor="name"
            className="text-sm font-semibold text-gray-500"
          >
            CLICK TO TYPE
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Introduce Yourself"
            className="w-full border-b border-black bg-transparent pb-1 text-center text-[clamp(23px,4vw,45px)] leading-tight text-black outline-none placeholder:text-gray-500"
          />

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 cursor-pointer text-sm font-semibold"
          >
            PROCEED
          </button>
        </form>
      </div>

      {/* Back navigation */}
      <Link
        href="/"
        className="absolute bottom-8 left-8 z-20 flex items-center gap-4"
        aria-label="Back"
      >
        <span className="flex h-10 w-10 rotate-45 items-center justify-center border border-black">
          <span className="-rotate-45">◀</span>
        </span>

        <span className="font-semibold">BACK</span>
      </Link>
    </main>
  );
}