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
  <div className="relative aspect-square w-[min(920px,94vw,82dvh)]">
  {/* Rotating diamonds */}
  <Image
    src="/assets/Diamond-light-large.webp"
    alt=""
    width={700}
    height={700}
    className="pointer-events-none absolute inset-0 m-auto h-full w-full object-contain animate-spin-slow"
  />

  <Image
    src="/assets/Diamond-medium-medium.webp"
    alt=""
    width={640}
    height={640}
    className="pointer-events-none absolute inset-0 m-auto h-[90%] w-[90%] object-contain animate-spin-medium"
  />

  <Image
    src="/assets/Diamond-dark-small.webp"
    alt=""
    width={580}
    height={580}
    className="pointer-events-none absolute inset-0 m-auto h-[80%] w-[80%] object-contain animate-spin-fast"
  />

  {/* Form overlay */}
  <div className="absolute inset-0 z-20 flex items-center justify-center">
    <form onSubmit={handleNameSubmit} className="flex w-[min(680px,72%)] flex-col items-center text-center">
      <label htmlFor="name">CLICK TO TYPE</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Introduce Yourself"
        className="w-full border-b border-black bg-transparent text-center text-[clamp(30px,3.4vw,64px)] outline-none"
      />
    </form>
  </div>
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